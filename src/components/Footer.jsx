import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div className="w-full border-t-2 border-gray-100 mt-24 pt-10 pb-10 px-6 md:px-12 lg:px-20 bg-white text-gray-500 text-sm">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-10 md:space-y-0">
        
        {/* Logo and copyright */}
        <div className="flex flex-col space-y-1">
          <h1 className="text-lg font-semibold text-black">MintSip</h1>
          <p>2021 © MintSip</p>
          <p>All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2">
          <h1 className="font-semibold text-black">Navigation</h1>
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link to="/about" className="hover:text-blue-600">About Us</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Social Media */}
        <div className="flex flex-col space-y-2">
          <h1 className="font-semibold text-black">Follow Us</h1>
          <p className="hover:text-blue-600 cursor-pointer">Facebook</p>
          <p className="hover:text-blue-600 cursor-pointer">Instagram</p>
          <p className="hover:text-blue-600 cursor-pointer">Twitter</p>
          <p className="hover:text-blue-600 cursor-pointer">LinkedIn</p>
        </div>

        {/* Legal */}
        <div className="flex flex-col space-y-2">
          <h1 className="font-semibold text-black">Legal</h1>
          <p className="hover:text-blue-600 cursor-pointer">Privacy Policy</p>
          <p className="hover:text-blue-600 cursor-pointer">Terms of Service</p>
        </div>
      </div>
    </div>

    </footer>
    
  );
};

export default Footer;