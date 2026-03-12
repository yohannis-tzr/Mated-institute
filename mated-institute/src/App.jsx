import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experiences from './components/Experiences';
import Vision from './components/Vision';
import Team from './components/Team';
import Contact from './components/Contact';
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
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;