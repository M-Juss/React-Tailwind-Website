import React from 'react'
import NavBar from '../components/NavBar'

const Pricing = () => {
  return (
    <div className='min-h-screen min-w-screen bg-white flex-col'>
      <NavBar/>

      <div className='pt-32 pb-14 px-20'>
        <h1 className='text-center text-5xl font-bold pb-3.5'>Pricing</h1>
        <h2 className=' text-center text-md'>Our pricing is refreshing just like MintZip. Not too cheap, not too fancy—just the perfect fresh deal.</h2>
      </div>

      <div className='flex justify-between px-20 space-x-14'>
        <div className='flex-1 h-96 shadow-2xl rounded-2xl transition-all duration-300 transform hover:scale-105'>
          <div className='flex-col px-10 py-10'>
            <h1 className='font-semibold text-xl pb-5'>Basic</h1>
            <div className='flex h-fit'>
              <h1 className='text-3xl font-semibold'>$</h1>
              <h1 className='text-7xl font-semibold'>9</h1>
              <h1 className='items-end flex'>/month</h1>
            </div>
            <h1 className='pt-5 pb-14'>For casual users and fresh breath on the go</h1>
            <div className='flex justify-center'>
              <button className='border-2 py-2 px-5 text-md font-semibold rounded-xl'>
              Get started with Basic
              </button>
            </div>
          </div>
        </div>
        <div className='flex-1 h-96 shadow-2xl rounded-2xl scale-110'>
          <div className='flex justify-end pt-3 px-3'>
            <h1 className='bg-blue-500 py-1 px-3 rounded-xl text-xs font-semibold text-white'>Most Popular</h1>
          </div>
            <div className='flex justify-center'>
          <div className='flex-col px-10 py-10'>
            <h1 className='font-semibold text-xl pb-5'>Pro</h1>
            <div className='flex h-fit'>
              <h1 className='text-3xl font-semibold'>$</h1>
              <h1 className='text-7xl font-semibold'>19</h1>
              <h1 className='items-end flex'>/month</h1>
            </div>
            <h1 className='pt-5 pb-7'>For regular users who want to stay fresh and confident all day</h1>
            <div className='flex justify-center'>
              <button className=' py-2 px-5 text-md font-semibold rounded-xl text-white bg-blue-500'>
              Get started with Pro
              </button>
            </div>
            </div>
          </div>
        </div>
        <div className='flex-1 h-96 shadow-2xl rounded-2xl transition-all duration-300 transform hover:scale-105'>
          <div className='flex-col px-10 py-10'>
            <h1 className='font-semibold text-xl pb-5'>Business</h1>
            <div className='flex h-fit'>
              <h1 className='text-3xl font-semibold'>$</h1>
              <h1 className='text-7xl font-semibold'>99</h1>
              <h1 className='items-end flex'>/month</h1>
            </div>
            <h1 className='pt-5 pb-14'>For offices, teams, or retail setups with bulk needs</h1>
            <div className='flex justify-center'>
            <div className='flex justify-center'>
              <button className='border-2 py-2 px-5 text-md font-semibold rounded-xl '>
              Get started with Business
              </button>
            </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    
  )
}

export default Pricing