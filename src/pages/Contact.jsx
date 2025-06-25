import Input from '../components/ui/Input';
import Footer from '../components/layout/Footer';
import NavBar from '../components/layout/NavBar';

const Contact = () => {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <NavBar />

      <div className='flex flex-col md:flex-row items-center md:items-start justify-center px-6 md:px-20 py-12 gap-10'>
        <div className='w-full md:w-1/2 flex justify-center'>
          <img src="./image/MintZip-Design.png" alt="MintZip Design" className='size-100 md:w-80 object-cover' />
        </div>

        <div className='w-fit md:full md:w-1/2 px-auto'>
          <h1 className='font-semibold text-4xl pb-6'>Contact Us</h1>
          <h2 className='text-md'>Explore the future with us.</h2>
          <h2 className='text-sm pb-6'>Feel free to get in touch.</h2>

          <div className='pt-4'>
            <h2 className='text-sm font-semibold pb-2'>Name</h2>
            <Input placeholder="Fullname" />
          </div>

          <div className='pt-4'>
            <h2 className='text-sm font-semibold pb-2'>Email</h2>
            <Input placeholder="Email Address" />
          </div>

          <div className='pt-4'>
            <h2 className='text-sm font-semibold pb-2'>Message</h2>
            <Input placeholder="How can we get better?" />
          </div>

          <div className='py-5'>
            <button className='py-2 px-4 bg-blue-900 hover:bg-blue-600 rounded-lggit  text-white  '><a href='#'>Sumbit</a></button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;