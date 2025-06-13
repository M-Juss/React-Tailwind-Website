import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'

const Home = () => {
  return (
    <div className='min-h-screen min-w-screen bg-white flex-col'>
      <NavBar/>
      <div className='flex pt-20 items-center space-x-14 px-20'>

        <div className='flex-col w-9xl'>
          <h1 className='text-gray-600 pb-1'>Turn Ideas into Reality.</h1>
          <h1 className='font-bold text-5xl pb-1 text-left'>Launch your product or service with a stunning visual presentation. Designed for startups, creatives, and teams who want to impress</h1>
          <h1 className='pb-5'>Trusted by startups, agencies, and enterprises around the world.</h1>
          <div className='flex space-x-4'>
            <button className='py-2 px-3 bg-blue-900 rounded-xl text-white font-semibold text-sm hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md'>Try for free</button>
            <button className='py-2 px-3 bg-transparent rounded-xl text-black border-2 font-semibold text-sm hover:transition-all duration-300 transform hover:scale-105'>See how it works</button>
          </div>
        </div>

        <div>
            <img src='src\image\london.png' className='h-130 w-500'></img>
        </div>
      </div>

    <GetStarted />
    <Footer/>
    </div>
  )
}

export default Home