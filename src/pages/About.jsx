import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className='bg-white min-h-screen min-w-screen flex-col'>
      <NavBar/>

     <div className='pt-44 pb-32 px-20'>
        <h1 className='text-center text-5xl font-bold pb-3.5'>About Us</h1>
        <h2 className=' text-center text-md px-52'>At MintZip, we believe that freshness isn’t just a feeling—it’s a lifestyle. Born out of the desire to combine hydration with instant oral freshness, we created a product that’s convenient, natural, and confidence-boosting.</h2>
        <img src="src\image\mainLogo.png" alt="MintZip-Logo" className='h-96 w-full px-96 mb-20'/>

        <h1 className='text-center text-5xl font-bold pb-3.5'>Our Mission</h1>
        <h2 className=' text-center text-md px-52'>At MintZip, our mission is to empower people to feel confident, refreshed, and ready—anytime, anywhere. We aim to revolutionize the way freshness is experienced by combining hydration and breath care in one smart, natural solution. Through innovation, quality ingredients, and thoughtful design, we strive to make freshness accessible, convenient, and always on-the-go.</h2>
      </div>

      <div className='flex px-60 justify-center h-fit space-x-100'>
        <h1 className='text-5xl font-semibold w-3 pt-16'>Breathe Fresh. Sip Smart. Live Confident.</h1>
        <img src="src\image\MintZip-Bottle.jpg" alt="MinzZip-bottle" className='h-96' />
      </div>

      <div className='pt-44 pb-10 px-20'>
        <h1 className='text-center text-5xl font-bold pb-3.5'>Team</h1>
        <h2 className=' text-center text-md px-52'>Meet the people behind our magical product</h2>
      </div>

    <div className='flex px-20 justify-center'>
      <div className='flex-col w-40'>
        <img src="src\image\Ceo.jpg" alt="Ceo-image" className='h-28 mx-auto '/>
        <h1 className='text-center'>Chief Executive Officer</h1>
      </div>

      <div className='flex-col w-40'>
        <img src="src\image\Sr-Dev.jpg" alt="Sr.Dev-image" className='h-28 mx-auto '/>
        <h1 className='text-center'>Senior Developer</h1>
      </div>

      <div className='flex-col w-40'>
        <img src="src\image\QaTester.jpg" alt="Sr.Dev-image" className='h-28 mx-auto '/>
        <h1 className='text-center'>QA Tester</h1>
      </div>

    </div>

    <div className='flex px-20 justify-center'>
      <div className='flex px-20 pt-5'>
        <div className='flex-col w-40'>
          <img src="src\image\Front-End.jpg" alt="Front-End-image" className='h-28 mx-auto '/>
          <h1 className='text-center'>Front-end Developer</h1>
        </div>

        <div className='flex-col w-40'>
          <img src="src\image\Back-End.jpg" alt="Front-End  -image" className='h-28 mx-auto '/>
          <h1 className='text-center'>Back-end Developer</h1>
        </div>
    </div>
    </div>

    <Footer />
    </div>
    
  )
}

export default About