import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';
import TeamPicture from '../components/ui/TeamPicture';

const About = () => {
  return (
    <div className='bg-white min-h-screen flex flex-col'>
      <NavBar />

      {/* About Section */}
      <div className='pt-20 pb-16 px-6 md:px-20'>
        <h1 className='text-center text-4xl md:text-5xl font-bold pb-4'>About Us</h1>
        <p className='text-center text-sm md:text-base max-w-4xl mx-auto pb-10'>
          At MintZip, we believe that freshness isn’t just a feeling—it’s a lifestyle. Born out of the desire to combine hydration with instant oral freshness, we created a product that’s convenient, natural, and confidence-boosting.
        </p>
        <img
          src="/image/mainLogo.png"
          alt="MintZip Logo"
          className='h-auto max-h-80 mx-auto mb-16'
        />

        {/* Mission Section */}
        <h1 className='text-center text-4xl md:text-5xl font-bold pb-4'>Our Mission</h1>
        <p className='text-center text-sm md:text-base max-w-4xl mx-auto'>
          At MintZip, our mission is to empower people to feel confident, refreshed, and ready—anytime, anywhere. We aim to revolutionize the way freshness is experienced by combining hydration and breath care in one smart, natural solution. Through innovation, quality ingredients, and thoughtful design, we strive to make freshness accessible, convenient, and always on-the-go.
        </p>
      </div>

      {/* Tagline Section */}
      <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-15 px-6 md:px-20 py-16'>
        <h1 className='text-3xl md:text-4xl font-semibold text-center lg:text-left max-w-4xl'>
          Breathe Fresh. Sip Smart. Live Confident.
        </h1>
        <img
          src="/image/MintZip-Bottle.jpg"
          alt="MintZip bottle"
          className='h-auto max-h-96 object-contain'
        />
      </div>

      {/* Team Section */}
      <div className='pt-24 pb-10 px-6 md:px-20'>
        <h1 className='text-center text-4xl md:text-5xl font-bold pb-3.5'>Team</h1>
        <p className='text-center text-sm md:text-base max-w-2xl mx-auto'>
          Meet the people behind our magical product
        </p>
      </div>

      <TeamPicture/>

      <Footer />
    </div>
  );
};

export default About;