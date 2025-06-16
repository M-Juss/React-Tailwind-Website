import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'
import { FaStar } from "react-icons/fa"

const Home = () => {
  return (
    <div className='min-h-screen min-w-screen bg-white flex-col'>
      <NavBar/>
      <div className='flex pt-20 items-center space-x-20 px-20'>

        <div className='flex-col w-9xl'>
          <h1 className='text-gray-600 pb-1'>Launch MintZip with a crisp, refreshing presentation.</h1>
          <h1 className='font-bold text-5xl pb-1 text-left w-170'>Perfect for health-conscious individuals, commuters, and teams who value confidence and cleanliness. Designed for freshness on the go!</h1>
          <h1 className='pb-5'>Trusted by busy professionals, students, and wellness advocates who want to make a fresh impression.</h1>
          <div className='flex space-x-4'>
            <button className='py-2 px-3 bg-blue-900 rounded-xl text-white font-semibold text-sm hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md'>Try for MintSip now</button>
            <button className='py-2 px-3 bg-transparent rounded-xl text-black border-2 font-semibold text-sm hover:transition-all duration-300 transform hover:scale-105'>See how it works</button>
          </div>
        </div>

        <div>
            <img src='.\image\MintZip-Design.png' className='h-150 w-700 relative bottom-20 left-15'></img>
        </div>
      </div>

    <div className='flex-col pt-20 px-20'>
    <h1 className='font-semibold text-4xl text-center pb-5'>Testimonial</h1>
    <h2 className='text-center pb-7'>People love the MintZip experience here’s what they have to say.</h2>

    <div className='flex justify-center space-x-10'>

      <div className='flex-col shadow-2xl rounded-4xl py-5 px-7'>
        <h2 className='text-center w-70 font-semibold pb-5'>"MintZip is a game-changer! Our customers love the instant freshness and we’ve seen repeat sales skyrocket."</h2>
        
        <div className='flex space-x-1 justify-center pb-3'>
          <FaStar color='blue'  size={20}/>
          <FaStar color='blue'  size={20}/>
          <FaStar color='blue'  size={20}/>
          <FaStar color='blue'  size={20}/>
          <FaStar color='blue'  size={20}/>
        </div>

        <h2 className='font-semibold text-center pb-1'>Kim Ernest Ciria</h2>
        <h2 className='text-gray-600 text-sm text-center'>Marketing Lead, CoolMart</h2>
        
      </div>

            <div className='flex-col shadow-2xl rounded-4xl py-5 px-7'>
        <h2 className='text-center w-70 font-semibold pb-5'>“Ever since we added MintZip to our stores, customers can’t get enough. It’s small, refreshing, and always in demand!"</h2>
        
        <div className='flex space-x-1 justify-center pb-3'>
          <FaStar color='blue'  size={20}/>
          <FaStar color='blue'  size={20}/>
          <FaStar color='blue'  size={20}/>
          <FaStar color='blue'  size={20}/>
          <FaStar color='blue'  size={20}/>
        </div>

        <h2 className='font-semibold text-center pb-1'>Joenel Sevellejo</h2>
        <h2 className='text-gray-600 text-sm text-center'>Retail Manager, FreshStop</h2>
        
      </div>

            <div className='flex-col shadow-2xl rounded-4xl py-5 px-7'>
        <h2 className='text-center w-70 font-semibold pb-5'>“I personally use MintZip every day. It’s now a staple in our office giveaways — our team absolutely loves it.”</h2>
        
        <div className='flex space-x-1 justify-center pb-3'>
          <FaStar color='blue'  size={20}/>
          <FaStar color='blue'  size={20}/>
          <FaStar color='blue'  size={20}/>
          <FaStar color='blue'  size={20}/>
          <FaStar color='blue'  size={20}/>
        </div>

        <h2 className='font-semibold text-center pb-1'>Nathanniel Joy Alvarez</h2>
        <h2 className='text-gray-600 text-sm text-center'>HR Officer, ZenTech Solutions</h2>
        
      </div>

    </div>
    </div>

    <div className='flex justify-between py-5 rounded-3xl shadow-2xl mt-25 mx-50'>

      <div className='flex-col w-fit  pl-20 flex-3/4 '>
        <img src="public\image\mainLogo.png" alt="Main-logo" className='size-80 relative left-20' />
        <h1 className='font-semibold text-3xl relative bottom-15 w-90'>How to join the MintZip community</h1>
        <h2 className='w-130 relative bottom-8'>Just 3 simple steps to refresh your lifestyle and enjoy MintZip benefits.</h2>
        <button className='py-2 mb-5 px-4 bg-blue-500 rounded-xl text-white'> Sign up now</button>
      </div>

      <div className='flex-col w-fit pr-20 flex-1/12'> 
        <h1 className='font-semibold text-2xl pb-4 pt-9'>Step 1</h1>
        <h2 className='text-sm text-gray-600 pb-7 border-b-black border-b-1 w-100'>Send us a message or visit one of our partner stores to learn how MintZip fits into your daily routine.</h2>
        
        
        <h1 className='font-semibold text-2xl pb-4 pt-7'>Step 2</h1>
        <h2 className='text-sm text-gray-600 pb-7 border-b-black border-b-1 w-100'>Our team will recommend the best MintZip pack for your lifestyle — from single-use freshness to on-the-go hydration.</h2>

        <h1 className='font-semibold text-2xl pb-4 pt-7'>Step 3</h1>
        <h2 className='text-sm text-gray-600 pb-7 w-100'>Poof! You’re ready to stay fresh, confident, and cool with MintZip — anytime, anywhere.</h2>

      </div>

    </div>

    <GetStarted />
    <Footer/>
    </div>
  )
}

export default Home