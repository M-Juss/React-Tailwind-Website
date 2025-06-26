import React from 'react'

const Join = () => {
  return (
      <div className='flex flex-col lg:flex-row justify-between items-center gap-10 py-16 px-6 md:px-20'>
        
        <div className='flex flex-col items-center lg:items-start w-full lg:w-1/2'>
          <img src="/image/mainLogo.png" alt="Main Logo" className='w-48 mb-5' />
          <h1 className='font-semibold text-2xl md:text-3xl text-center lg:text-left mb-3'>How to join the MintZip community</h1>
          <p className='text-center lg:text-left mb-5'>Just 3 simple steps to refresh your lifestyle and enjoy MintZip benefits.</p>
          <button className='py-2 px-4 bg-blue-900  rounded-xl text-white font-semibold hover:bg-blue-600 transition'>
            Sign up now
          </button>
        </div>

        
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
  )
}

export default Join
