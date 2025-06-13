import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='min-w-screen h-32 border-gray-100 border-t-2 flex px-20 mt-24 pt-7  text-gray-500 text-sm space-x-48 pb-36'>

        <div className='flex-col'>
            <h1 className='pb-2 text-lg font-semibold'>MintSip</h1>
            <h1>2021 © MintSip</h1>
            <h1>All rights reserved.</h1>
        </div>

        <div className='flex-col'>
            <h1 className='pb-2'><Link to="/">Home</Link></h1>
            <h1 className='pb-2'><Link to="/pricing">Pricing</Link></h1>
            <h1 className='pb-2'><Link to="/about">About Us</Link></h1>
            <h1><Link to="/contact">Contact</Link></h1>
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