import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'
import Testimonials from '../components/Testimonials'

const Home = () => {
  
  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <NavBar />

      {/* Hero Section */}
      <div className='flex flex-col-reverse md:flex-row items-center gap-10 mt-5 mb-17 px-6 md:px-20 pt-20'>
        {/* Text Content */}
        <div className='flex flex-col w-full md:w-1/2'>
          <h1 className='text-gray-600 pb-1 text-base md:text-lg'>
            Launch MintZip with a crisp, refreshing presentation.
          </h1>
          <h1 className='font-bold text-3xl md:text-5xl pb-3'>
            Perfect for health-conscious individuals, commuters, and teams who value confidence and cleanliness.
          </h1>
          <p className='pb-5 text-sm md:text-base'>
            Trusted by busy professionals, students, and wellness advocates who want to make a fresh impression.
          </p>
          <div className='flex flex-wrap gap-3'>
            <button className='py-2 px-4 bg-blue-900 rounded-xl text-white font-semibold text-sm hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md'>
              Try MintZip now
            </button>
            <button className='py-2 px-4 bg-transparent rounded-xl text-black border-2 font-semibold text-sm hover:scale-105 transition-all'>
              See how it works
            </button>
          </div>
        </div>

        {/* Image */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <img
            src='./image/MintZip-Design.png'
            alt='MintZip Design'
            className='h-auto max-w-full md:max-w-md lg:max-w-lg object-contain'
          />
        </div>
      </div>

      <Testimonials/>

      {/* Join Section */}
      <div className='flex flex-col lg:flex-row justify-between items-center gap-10 py-16 px-6 md:px-20'>
        {/* Left Side */}
        <div className='flex flex-col items-center lg:items-start w-full lg:w-1/2'>
          <img src="/image/mainLogo.png" alt="Main Logo" className='w-48 mb-5' />
          <h1 className='font-semibold text-2xl md:text-3xl text-center lg:text-left mb-3'>How to join the MintZip community</h1>
          <p className='text-center lg:text-left mb-5'>Just 3 simple steps to refresh your lifestyle and enjoy MintZip benefits.</p>
          <button className='py-2 px-4 bg-blue-500 rounded-xl text-white font-semibold hover:bg-blue-600 transition'>
            Sign up now
          </button>
        </div>

        {/* Right Side */}
        <div className='w-full lg:w-1/2 space-y-8'>
          <div>
            <h1 className='font-semibold text-xl pb-2'>Step 1</h1>
            <p className='text-sm text-gray-600 border-b pb-3'>
              Send us a message or visit one of our partner stores to learn how MintZip fits into your daily routine.
            </p>
          </div>
          <div>
            <h1 className='font-semibold text-xl pb-2'>Step 2</h1>
            <p className='text-sm text-gray-600 border-b pb-3'>
              Our team will recommend the best MintZip pack for your lifestyle — from single-use freshness to on-the-go hydration.
            </p>
          </div>
          <div>
            <h1 className='font-semibold text-xl pb-2'>Step 3</h1>
            <p className='text-sm text-gray-600'>
              Poof! You’re ready to stay fresh, confident, and cool with MintZip — anytime, anywhere.
            </p>
          </div>
        </div>
      </div>

      <GetStarted />
      <Footer />
    </div>
  )
}

export default Home