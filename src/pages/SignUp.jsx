import React, { useState } from 'react'
import { MdCheckBoxOutlineBlank} from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";



const SignUp = () => {

    const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className='flex justify-center align-middle items-center h-screen max-w-screen bg-white'>
        <div className='flex flex-col px-15 py-13 rounded-2xl shadow-2xl'>
            <img src='./image/mainLogo.png' alt='MintZip-Logo' className='h-30 w-35 mx-auto' />
            <h1 className='text-center font-semibold text-4xl pb-7 '>Sign Up</h1>
            <input placeholder='Name' type='text' className='border-1 border-gray-l00 rounded-md outline-none focus:outline-none mb-5 px-3 py-2 text-l w-80'></input>
            <input placeholder='Email' type='email' className='border-1 border-gray-l00 rounded-md outline-none focus:outline-none mb-5 px-3 py-2 text-l w-80'></input>
            <input placeholder='Password' type='password' className='border-1 border-gray-l00 rounded-md outline-none focus:outline-none mb-5 px-3 py-2 text-l w-80'></input>
             <input placeholder='Confirm Password' type='password' className='border-1 border-gray-l00 rounded-md outline-none focus:outline-none mb-5 px-3 py-2 text-l w-80'></input>

            <button className='bg-blue-900 px-5 py-3 text-white hover:bg-blue-600 rounded-md'>Sign Up</button>
            
            <div className=' flex space-x-1 pt-3  ' onClick={() => setRememberMe(!rememberMe)}>
                {rememberMe ? <IoCheckbox size={22}/> : <MdCheckBoxOutlineBlank  size={22}/>}
                <span>Remember Me</span>
            </div>

            <p className='text-gray-400 text-center pt-5'>Already have an account? <a href="#"className='text-black hover:text-blue'>Log In</a></p>

        </div>
    </div>
  )
}

export default SignUp
