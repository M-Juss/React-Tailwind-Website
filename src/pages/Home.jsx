import Footer from '../components/layout/Footer'
import GetStarted from '../components/layout/GetStarted'
import Join from '../components/layout/Join'
import NavBar from '../components/layout/NavBar'
import Testimonials from '../components/ui/Testimonials'

const Home = () => {
  
  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <NavBar />

      {/* Hero Section */}
      <div className='flex flex-col-reverse md:flex-row items-center gap-10 mt-5 mb-17 px-6 md:px-20 pt-20'>
        {/* Text Content */}
        <div className='flex flex-col w-full md:w-1/2'>
          <h1 className='text-gray-600 pb-1 text-base md:text-lg'>
            Launch MintZip with a crisp, refreshing presentation.
          </h1>
          <h1 className='font-bold text-3xl md:text-5xl pb-3'>
            Perfect for health-conscious individuals, commuters, and teams who value confidence and cleanliness.
          </h1>
          <p className='pb-5 text-sm md:text-base'>
            Trusted by busy professionals, students, and wellness advocates who want to make a fresh impression.
          </p>
          <div className='flex flex-wrap gap-3'>
            <button className='py-2 px-4 bg-blue-900 rounded-xl text-white font-semibold text-sm hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md'>
              Try MintZip now
            </button>
            <button className='py-2 px-4 bg-transparent rounded-xl text-black border-2 font-semibold text-sm hover:scale-105 transition-all'>
              See how it works
            </button>
          </div>
        </div>

        {/* Image */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <img
            src='./image/MintZip-Design.png'
            alt='MintZip Design'
            className='h-auto max-w-full md:max-w-md lg:max-w-lg object-contain'
          />
        </div>
      </div>

      <Testimonials/>

      <Join/>

      <GetStarted />

      <Footer />
    </div>
  )
}

export default Home