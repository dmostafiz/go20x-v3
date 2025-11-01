
import { useState } from 'react';
import Hero from './components/Hero';
import FeaturedDestinations from './components/FeaturedDestinations';
import WhyChooseUs from './components/WhyChooseUs';
import TravelExperiences from './components/TravelExperiences';
import PopularBrands from './components/PopularBrands';
import HolidayDeals from './components/HolidayDeals';
import DigitalResources from './components/DigitalResources';
import PriceComparison from './components/PriceComparison';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import axios from 'axios';

const Home = () => {

  const [noSponsorModal, setNoSponsorModal] = useState(false)
  const sponsor = Cookies.get('sponsor')

  useEffect(() => {

    console.log('Found sponsor home page: ', sponsor)

    if (!sponsor) {
      console.log('sponsor not found')
      setNoSponsorModal(true)
    }

  }, [])

  const [userName, setUsername] = useState('')

  const handleVerify = async () => {
    if (userName == '') {
      return alert('Please enter your sponsor username')
    }


    const res = await axios.get(`${import.meta.env.VITE_BASE_API}/sponsor/validate/${userName}`)

    console.log('Ref validation res: ', res?.data)


    if (res?.data?.ok) {

      Cookies.set('sponsor', userName)

      setTimeout(() => {
        window.location.href = `/`
      }, 500)

    }
    else {
      // setPageLoading(false)
      alert('Sponsor not verified!')
    }
  }

  return (
    <div className="relative min-h-screen bg-white">
      {noSponsorModal == true && <div className='!fixed z-50 w-screen h-screen flex items-center justify-center bg-black/50'>
        <div className='p-5 bg-white w-[95vw] md:!w-[450px]'>
          <h2 className='font-bold text-lg mb-5'>Who referred you?</h2>
          <div className='border p-2 rounded-sm mb-3'>
            <input onChange={e => setUsername(e.target.value)} className='w-full ring-0 border-0 outline-none' placeholder='Enter your sponsor username here' />
          </div>
          <button onClick={handleVerify} className='w-full py-2 bg-black text-white'>Verify Sponsor</button>
        </div>
      </div>}
      <Hero />
      <FeaturedDestinations />
      <WhyChooseUs />
      <TravelExperiences />
      <PopularBrands />
      <HolidayDeals />
      <DigitalResources />
      <PriceComparison />
      <Testimonials />
      <Footer />


    </div>
  );
};

export default Home;
