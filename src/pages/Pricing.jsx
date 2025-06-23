import React from 'react';
import NavBar from '../components/NavBar';
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Footer from '../components/Footer';
import GetStarted from '../components/GetStarted';
import { useState } from 'react';

const Pricing = () => {
  const basic = ["Daily Freshness Dose", "Natural Mint Formula", "Pocket-Friendly Packaging"];
  const pro = [...basic, "Stronger, Longer-Lasting Freshness", "Dual-Use (Mouth + Water Enhancer)", "Exclusive Mint Variants"];
  const business = [...pro, "Custom Branding Options", "Monthly Bulk Deliveries", "Priority Customer Support"];
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

  const [accordionOpen, setAccordionOpen] = useState(false);

   const [openIndex, setOpenIndex] = useState(null);

   const toggleArrow = (index) => {
     setOpenIndex(prev => (prev === index ? null : index));
   };



  return (
    <div className='min-h-screen w-full bg-white flex flex-col'>
      <NavBar />

      {/* Header */}
      <div className='pt-32 pb-14 px-6 md:px-20'>
        <h1 className='text-center text-4xl md:text-5xl font-bold pb-4'>Pricing</h1>
        <h2 className='text-center text-sm md:text-md'>Our pricing is refreshing just like MintZip. Not too cheap, not too fancy—just the perfect fresh deal.</h2>
      </div>

      {/* Pricing Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20'>
        {/* Basic */}
        <div className='shadow-2xl rounded-2xl transition-transform duration-300 hover:scale-105 p-8'>
          <h1 className='font-semibold text-xl pb-4'>Basic</h1>
          <div className='flex items-end'>
            <h1 className='text-3xl font-semibold'>$</h1>
            <h1 className='text-6xl font-bold'>9</h1>
            <span className='pl-1 pb-2 text-md'>/month</span>
          </div>
          <p className='pt-5 pb-10 text-sm'>For casual users and fresh breath on the go</p>
          <div className='text-center'>
            <button className='border-2 py-2 px-5 text-sm font-semibold rounded-xl'>Get started with Basic</button>
          </div>
        </div>

        {/* Pro */}
        <div className='shadow-2xl rounded-2xl transition-transform duration-300 hover:scale-105 p-8 scale-105 md:scale-110'>
          <div className='flex justify-end'>
            <span className='bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-xl'>Most Popular</span>
          </div>
          <h1 className='font-semibold text-xl pt-2 pb-4'>Pro</h1>
          <div className='flex items-end'>
            <h1 className='text-3xl font-semibold'>$</h1>
            <h1 className='text-6xl font-bold'>19</h1>
            <span className='pl-1 pb-2 text-md'>/month</span>
          </div>
          <p className='pt-5 pb-10 text-sm'>For regular users who want to stay fresh and confident all day</p>
          <div className='text-center'>
            <button className='bg-blue-500 text-white py-2 px-5 text-sm font-semibold rounded-xl'>Get started with Pro</button>
          </div>
        </div>

        {/* Business */}
        <div className='shadow-2xl rounded-2xl transition-transform duration-300 hover:scale-105 p-8'>
          <h1 className='font-semibold text-xl pb-4'>Business</h1>
          <div className='flex items-end'>
            <h1 className='text-3xl font-semibold'>$</h1>
            <h1 className='text-6xl font-bold'>99</h1>
            <span className='pl-1 pb-2 text-md'>/month</span>
          </div>
          <p className='pt-5 pb-10 text-sm'>For offices, teams, or retail setups with bulk needs</p>
          <div className='text-center'>
            <button className='border-2 py-2 px-5 text-sm font-semibold rounded-xl'>Get started with Business</button>
          </div>
        </div>
      </div>

      {/* Feature Comparison */}
      <div className='px-6 md:px-20 pt-16'>
        <h1 className='text-2xl font-semibold mb-6'>Compare Features</h1>

        {/* Plan Headers */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-semibold text-xl'>
          <div>
            <h1 className='flex'>Basic</h1>
            <div className='border-b my-4' />
            {basic.map((item, index) => (
                <div className='flex items-start gap-2 py-2 text-sm' key={index}>
                  <FaCircleCheck color='blue' size={20} />
                  <span>{item}</span>
                </div>
              ))}
          </div>
          
          <div>
            <h1 className='flex'>Pro</h1>
            <div className='border-b my-4' />
            {pro.map((item, index) => (
                <div className='flex items-start gap-2 py-2 text-sm' key={index}>
                  <FaCircleCheck color='blue' size={20} />
                  <span>{item}</span>
                </div>
              ))}
          </div>

          <div>
            <h1 className='flex'>Business</h1>
            <div className='border-b my-4' />
            {business.map((item, index) => (
                <div className='flex items-start gap-2 py-2 text-sm' key={index}>
                  <FaCircleCheck color='blue' size={20} />
                  <span>{item}</span>
                </div>
              ))}
          </div>

        </div>
      </div>

      {/*Frequently Asked*/}
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

      <GetStarted />
      <Footer />
    </div>
  );
};

export default Pricing;