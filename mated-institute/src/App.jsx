import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experiences from './components/Experiences';
import Vision from './components/Vision';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Staff from './components/Staff';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Experiences />
      <Vision />
      <Partners />
      <Testimonials />
      <Staff />
      <News />
      <Footer />
    </div>
  );
}

export default App;