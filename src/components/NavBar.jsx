import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='border-b-2 border-b-gray-100 h-18 w-screen flex px-20 items-center space-x-3.5 justify-between'>
          <img src="src\image\mainLogo.png" alt="MintZip-Logo" className='h-26' />
          <nav>
            <ul className='flex space-x-14 justify-between text-gray-600 font-semibold'>
              <li className=' hover:text-blue-600'><Link to="/">Home</Link></li>
              <li className=' hover:text-blue-600'><Link to="/pricing">Pricing</Link></li>
              <li className=' hover:text-blue-600'><Link to="/about">About Us</Link></li>
              <li className=' hover:text-blue-600'><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className='flex space-x-3 items-center'>
            <h1 className=' hover:text-blue-600'>Log In</h1>
            <button className='py-2 px-3 bg-blue-900 rounded-4xl text-white font-semibold text-sm hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md '>Create an Account</button>
          </div>
      </div>
  )
}

export default NavBar