import React from 'react';
import NavBar from '../components/NavBar';
import Input from '../components/Input';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className='flex-col bg-white h-screen min-w-screen'>
      <NavBar/>

      <div className='flex space-x-30 h-fit'>
        <div>
          <img src=".\image\MintZip-Design.png" alt="" className='size-170 w-200' />
        </div>
        <div className='flex-col my-auto'>
          <h1 className='font-semibold text-4xl pb-9'>Contact Us</h1>
          <h2 className='text-md'>Explore the future with us.</h2>
          <h2 className='text-sm pb-7'>Feel free to get in touch.</h2>
          <h2 className='text-sm font-semibold pt-7 pb-4'>Name</h2>
          <Input placeholder="Fullname"/>
          <h2 className='text-sm font-semibold pt-7 pb-4'>Email</h2>
          <Input placeholder="Email Address"/>
          <h2 className='text-sm font-semibold pt-7 pb-4'>Message</h2>
          <Input placeholder="How can we get better?"/>
        </div>
      </div>
    <Footer />
    </div>
  )
}

export default Contact