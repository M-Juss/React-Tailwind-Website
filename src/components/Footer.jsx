import React from 'react'

const Footer = () => {
  return (
    <div className='min-w-screen h-32 border-gray-100 border-t-2 flex px-20 mt-24 pt-7  text-gray-500 text-sm space-x-48 pb-36'>

        <div className='flex-col'>
            <h1 className='pb-2 text-lg font-semibold'>Lando</h1>
            <h1>2021 © Lando</h1>
            <h1>All rights reserved.</h1>
        </div>

        <div className='flex-col'>
            <h1 className='pb-2'>Home</h1>
            <h1 className='pb-2'>Pricing</h1>
            <h1 className='pb-2'>About us</h1>
            <h1>Contact</h1>
        </div>

        <div className='flex-col'>
            <h1 className='pb-2'>Facebook</h1>
            <h1 className='pb-2'>Instagram</h1>
            <h1 className='pb-2'>Twitter</h1>
            <h1>LinkedIn</h1>
        </div>

        <div className='flex-col'>
            <h1 className='pb-2'>Privacy Policy</h1>
            <h1>Terms of Service</h1>
        </div>

    </div>
  )
}

export default Footer