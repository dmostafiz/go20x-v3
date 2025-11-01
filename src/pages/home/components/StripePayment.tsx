import React, { useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    PaymentElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import Cookies from "js-cookie";
import axios from 'axios';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function CheckoutForm({ clientSecret }: { clientSecret: string }) {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // where Stripe redirects after 3D Secure, etc.
                return_url: "http://localhost:3000/payment-success",
            },
            redirect: "if_required", // keep user on same page if no redirect needed
        });

        if (error) {

            setError(error.message);
            setLoading(false);

        } else if (paymentIntent && paymentIntent.status === "succeeded") {

            const token = Cookies.get('token')
            // Inform your backend
            console.log('Auth Token: ', token)

            const res = await axios.post(`${import.meta.env.VITE_BASE_API}/uxlm/confirm-20x-order`, {
                paymentIntentId: paymentIntent.id,
                clientSecret
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log('after payment response: ', res?.data)

            if (res?.data?.ok) {

                Cookies.remove('intent')
                Cookies.remove('token')
                Cookies.remove('sponsor')

                const webUrl = 'https://shopxcelerate.com'
                // const webUrl = 'http://localhost:3000'

                return window.location.href = `${webUrl}/auth/create_credential?token=${res?.data?.token}&email=${res?.data?.email}&uid=${res?.data?.id}`


            } else {
                alert(res?.data?.msg)
            }

            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='mb-5'>
                <PaymentElement />
                {error && <p>{error}</p>}
            </div>

            <button type="submit" className="w-full bg-black text-white py-3 rounded" data-v-bb614710="">
                <span className="main-text" data-v-bb614710="">
                    {loading ? "Processing..." : "Join Now"}
                </span>
            </button>
        </form>
    );
}


export default function StripePayment({ clientSecret }: { clientSecret: string }) {
    return (
        <Elements
            stripe={stripePromise}
            options={{
                clientSecret,
                // appearance: { theme: "stripe" },
            }}
        >
            <CheckoutForm clientSecret={clientSecret} />
        </Elements>
    );
}
