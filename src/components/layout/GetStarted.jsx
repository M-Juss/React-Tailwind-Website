import React from 'react';
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between rounded-3xl shadow-2xl mt-8 mx-auto px-6 md:px-12 py-10 space-y-10 md:space-y-0 md:space-x-16 max-w-6xl bg-white">
      {/* Text Section */}
      <div className="flex flex-col text-center md:text-left">
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl w-full pb-4">Get Started with MintZip today</h1>
        <p className="text-gray-600 pb-8">Start optimizing your process today</p>
        <button className="py-2 px-6 bg-blue-900 max-w-40 mx-auto rounded-2xl text-white hover:bg-blue-600 transition duration-300">
          <Link to="/signup">Sign up now</Link>
        </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <img src="./image/mainLogo.png" alt="MintZip-Logo" className="w-40 sm:w-48 md:w-60" />
      </div>
    </div>
  );
};

export default GetStarted;