import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Experiences from './components/Experiences';
import Vision from './components/Vision';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Staff from './components/Staff';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Departments from './components/Departments';
import Booking from './components/Booking';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';

// home page renders all primary sections
const Home = () => (
  <>
    <Hero />
    <Services />
    <Experiences />
    <Vision />
    <Partners />
    <Testimonials />
    <Staff />
    <News />
  </>
);

// utility component that redirects to home and then scrolls to an anchor
const AnchorRedirect = ({ hash }) => {
  React.useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  // keep user on home path
  return <Navigate to="/" replace />;
};

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experience" element={<Experiences />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/admin" element={<AdminPanel />} />
        {/* legacy anchor redirects */}
        <Route path="/who-we-are" element={<AnchorRedirect hash="#who-we-are" />} />
        <Route path="/structure" element={<AnchorRedirect hash="#structure" />} />
        <Route path="/training" element={<AnchorRedirect hash="#training" />} />
        <Route path="/consultancy" element={<AnchorRedirect hash="#consultancy" />} />
        <Route path="/ifrs" element={<AnchorRedirect hash="#ifrs" />} />
        <Route path="/ipsas" element={<AnchorRedirect hash="#ipsas" />} />
        <Route path="/valuation" element={<AnchorRedirect hash="#valuation" />} />
        {/* redirect any unknown route back to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
