import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = () => {
      const faqs = [
    {
      question: "How does this work?",
      answer: "MintZip works by providing an instant dose of freshness through our specially formulated natural mint blend. Whether you use it as a mouth freshener or as a water enhancer, it’s designed for quick and easy use—just open, apply, and enjoy the refreshing experience in seconds."
    }, {
      question: "What are the benefits?",
      answer: "MintZip offers a range of benefits including instant breath freshness, enhanced water flavor, and a clean feeling without the need for sugar or harsh chemicals. It's made from natural ingredients, fits easily in your pocket, and is perfect for on-the-go use. Some versions also offer dual use, meaning you can enjoy it both as a mouth freshener and a water enhancer."
    }, {
      question: "Is it difficult to use?",
      answer: "Not at all. MintZip is designed to be user-friendly and convenient. All you have to do is open the container, spray or drop the product as needed—either directly into your mouth or into your water—and you’re done. It’s that quick and simple."
    }, {
      question: "Can I have custom pricing?",
      answer: "Yes, we do offer custom pricing for bulk orders, businesses, and resellers. If you’re interested in purchasing larger quantities or partnering with us, feel free to reach out so we can discuss a pricing plan that works for you."
    }, {
      question: "Is there trial version available?",
      answer: "We occasionally provide trial versions or sample packs during promotional periods. To stay updated on when free trials are available, we recommend subscribing to our newsletter or following us on social media where we announce all ongoing offers."
    }, {
      question: "Where do I sign up?",
      answer: `You can sign up and place your order through our official website. Simply go to the homepage and click on the "Get Started" or "Order Now" button to begin your MintZip experience. The sign-up process is quick, and you’ll be enjoying your product in no time.`
    },
  ];

  const [openIndex, setOpenIndex] = useState(null)

  const toggleArrow = (index) => {
     setOpenIndex(prev => (prev === index ? null : index));
   };
   
  return (
    <div className='flex flex-col justify-center align-center items-center pt-25 font-semibold sm:px-10'>
    <h1 className='flex text-center text-4xl font-semibold justify-center pb-10'>Frequently asked questions</h1>

    {faqs.map((faq, index) => (
      <div className='flex-col w-full max-w-2xl'>
          <div
            key={index}
            onClick={() => toggleArrow(index)}
            className='flex justify-between items-center py-4 cursor-pointer'
          >
            <span>{faq.question}</span>
            <span>{openIndex === index?
              (<IoIosArrowUp className='transition-transform duration-200 ease'/>) :
              (<IoIosArrowDown className='transition-transform duration-200'/>)}</span>
          </div>
          <div className={`grid overflow-hidden text-justify text-gray-500 font-normal text-sm transition-all duration-300 ease-in-out ${
          openIndex === index
          ? 'grid-rows-[1fr] opacity-100'
          : 'grid-rows-[0fr] opacity-0'
          }`}>
            <span className='overflow-hidden'>{faq.answer}</span>
          </div>
      </div>
        ))}
      </div>
  )
}

export default Accordion
