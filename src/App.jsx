
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  )
}

export default App
