import React from 'react'
import { FaStar } from "react-icons/fa"

const Testimonials = () => {

  const feedback =  [
    {
      quote: "MintZip is a game-changer! Our customers love the instant freshness and we’ve seen repeat sales skyrocket.",
      name: "Kim Ernest Ciria",
      title: "Marketing Lead, CoolMart"
    }, {
      quote: "Ever since we added MintZip to our stores, customers can’t get enough. It’s small, refreshing, and always in demand!",
      name: "Joenel Sevellejo",
      title: "Retail Manager, FreshStop"
    }, {
      quote: "I personally use MintZip every day. It’s now a staple in our office giveaways — our team absolutely loves it.",
      name: "Nathanniel Joy Alvarez",
      title: "HR Officer, ZenTech Solutions"
    }
  ]
    return (
      <div className='pt-20 px-6 md:px-20'>
        <h1 className='font-semibold text-4xl text-center pb-5'>Testimonial</h1>
        <h2 className='text-center pb-10 text-sm md:text-base'>People love the MintZip experience — here’s what they have to say.</h2>

        <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
          {feedback.map((t, i) => (
            <div key={i} className='flex flex-col shadow-2xl rounded-3xl py-6 px-6 w-full max-w-sm'>
              <h2 className='text-center font-semibold pb-5 text-sm md:text-base'>"{t.quote}"</h2>
              <div className='flex justify-center space-x-1 pb-3'>
                {[...Array(5)].map((_, i) => <FaStar key={i} color='blue' size={20} />)}
              </div>
              <h2 className='font-semibold text-center pb-1'>{t.name}</h2>
              <h2 className='text-gray-600 text-sm text-center'>{t.title}</h2>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Testimonials
