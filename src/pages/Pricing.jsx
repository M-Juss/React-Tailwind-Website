import { FaCircleCheck } from "react-icons/fa6";
import NavBar from '../components/layout/NavBar';

import Accordion from '../components/ui/Accordion';
import Footer from '../components/layout/Footer';
import GetStarted from '../components/layout/GetStarted';

const Pricing = () => {
  const basic = ["Daily Freshness Dose", "Natural Mint Formula", "Pocket-Friendly Packaging"];
  const pro = [...basic, "Stronger, Longer-Lasting Freshness", "Dual-Use (Mouth + Water Enhancer)", "Exclusive Mint Variants"];
  const business = [...pro, "Custom Branding Options", "Monthly Bulk Deliveries", "Priority Customer Support"];

  return (
    <div className='min-h-screen w-full bg-white flex flex-col transition-all ease-in duration-200'>
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
            <span className='bg-blue-900 hover:bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-xl'>Most Popular</span>
          </div>
          <h1 className='font-semibold text-xl pt-2 pb-4'>Pro</h1>
          <div className='flex items-end'>
            <h1 className='text-3xl font-semibold'>$</h1>
            <h1 className='text-6xl font-bold'>19</h1>
            <span className='pl-1 pb-2 text-md'>/month</span>
          </div>
          <p className='pt-5 pb-10 text-sm'>For regular users who want to stay fresh and confident all day</p>
          <div className='text-center'>
            <button className='bg-blue-900 hover:bg-blue-600 text-white py-2 px-5 text-sm font-semibold rounded-xl'>Get started with Pro</button>
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
      <Accordion/>
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Pricing;