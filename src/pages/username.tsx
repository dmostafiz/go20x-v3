import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie'
// import Axios from '../Helpers/Axios'
import axios from 'axios'

export default function username() {
    const { refId } = useParams();

    const [pageLoading, setPageLoading] = useState(true)

    useEffect(() => {

        if (refId) {
            handleVerify(refId)
        }

    }, [refId])

    const handleVerify = async (refId: string) => {
        if (!refId) {
            return alert('Please enter a username')
        }

        console.log('Ref Id: ', refId)
        console.log('BASE_API: ', import.meta.env.VITE_BASE_API)

        const res = await axios.get(`${import.meta.env.VITE_BASE_API}/sponsor/validate/${refId}`)

        console.log('Ref validation res: ', res?.data)


        if (res?.data?.ok) {

            Cookies.set('sponsor', refId)

            setTimeout(() => {
                window.location.href = `/`
            }, 500)

        }
        else {
            setPageLoading(false)
        }
    }
    return (
        <div>

        </div>
    )
}
