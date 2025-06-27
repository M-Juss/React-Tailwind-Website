import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
          <div className='border-b-2 border-b-gray-100 w-full px-6 md:px-10 lg:px-20 py-4 flex items-center justify-between relative'>
      {/* Logo */}
      <img src='./image/mainLogo.png' alt='MintZip-Logo' className='h-12 md:h-16' />

      {/* Desktop Nav */}
      <nav className='hidden lg:flex space-x-12 text-gray-600 font-semibold'>
        <Link to="/" className='hover:text-blue-600'>Home</Link>
        <Link to="/pricing" className='hover:text-blue-600'>Pricing</Link>
        <Link to="/about" className='hover:text-blue-600'>About Us</Link>
        <Link to="/contact" className='hover:text-blue-600'>Contact</Link>
      </nav>

      {/* Action buttons (Log in / Create Account) */}
      <div className='hidden lg:flex space-x-4 items-center'>
        <span className='hover:text-blue-600 cursor-pointer'>Log In</span>
        <button className='py-2 px-4 bg-blue-900 rounded-2xl text-white text-sm font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105 shadow-md'>
          <Link to="/signup">Create an Account</Link>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className='lg:hidden text-2xl text-gray-700' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-white z-10 flex flex-col items-center space-y-4 py-6 border-t border-gray-200 shadow-md lg:hidden'>
          <Link to="/" className='hover:text-blue-600' onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/pricing" className='hover:text-blue-600' onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link to="/about" className='hover:text-blue-600' onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className='hover:text-blue-600' onClick={() => setMenuOpen(false)}>Contact</Link>
          <span className='hover:text-blue-600'>Log In</span>
          <button className='py-2 px-4 bg-blue-900 rounded-2xl text-white text-sm font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105 shadow-md'>
            Create an Account
          </button>
        </div>
      )}
    </div>
    </nav>

  );
};

export default NavBar;