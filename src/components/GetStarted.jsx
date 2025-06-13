import React from 'react'

const GetStarted = () => {
  return (
    <div className='flex h-fit w-fit rounded-3xl shadow-2xl mt-24 mx-auto px-12 py-10 space-x-16'>
        <div className='flex-col '>
            <h1 className='font-semibold text-5xl w-100 pb-4'>Get Started with MintZip today</h1>
            <h1 className='text-gray-600 pb-10'>Start optimizing your processes today</h1>
            <button className='py-2 px-4 bg-blue-500 rounded-2xl text-white'> Sign up now</button>
        </div>
        <div className=''>
            <img src=".\image\mainLogo.png" alt="MintZip-Logo" className='size-60' />
        </div>
    </div>
  )
}

export default GetStarted