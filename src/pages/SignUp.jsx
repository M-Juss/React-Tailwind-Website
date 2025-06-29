import React, { useState } from 'react'
import { MdCheckBoxOutlineBlank} from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { Link } from 'react-router-dom';


const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='flex justify-center align-middle items-center h-screen max-w-screen bg-white transition-all ease-in duration-200'>
        <div className='flex flex-col px-15 py-8 rounded-2xl shadow-2xl'>

            <Link to="/">
              <img src='./image/mainLogo.png' alt='MintZip-Logo' className='h-30 w-35 mx-auto' />
            </Link>

            <h1 className='text-center font-semibold text-4xl pb-7 '>Sign Up</h1>

            <input placeholder='Name' type='text' className='border-1 border-gray-400 rounded-md outline-none focus:outline-none mb-5 px-3 py-2 text-l w-80'></input>
            <input placeholder='Email' type='text' className='border-1 border-gray-400 rounded-md outline-none focus:outline-none mb-5 px-3 py-2 text-l w-80'></input>
            <input placeholder='Password' type={showPassword? 'text' : 'password'} id='pass' className='border-1 border-gray-400 rounded-md outline-none focus:outline-none mb-5 px-3 py-2 text-l w-80'></input>
            <input placeholder='Confirm Password' type={showPassword? 'text' : 'password'} id='pass' className='border-1 border-gray-400 rounded-md outline-none focus:outline-none mb-5 px-3 py-2 text-l w-80'></input>

            <button className='bg-blue-900 py-2 text-white hover:bg-blue-600 rounded-md'>Sign Up</button>
            
            <div className=' flex space-x-1 pt-3 ' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <IoCheckbox size={20}/>  : <MdCheckBoxOutlineBlank  size={20}/>}
              <span className=' text-sm'>Show Password</span>
            </div>

            <div className='flex space-x-1 mx-auto'>
              <p className='text-gray-400 text-center pt-5'>Already have an account?</p>
              <p className='text-black hover:text-blue-900 pt-5'><a href="#"><Link to="/login">Log In</Link></a></p>
            </div>
            
        </div>
    </div>
  )
}

export default SignUp
