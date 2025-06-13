import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'

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
            <img src='src\image\MintZip-Design.png' className='h-140 w-700'></img>
        </div>
      </div>

    <GetStarted />
    <Footer/>
    </div>
  )
}

export default Home