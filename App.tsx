
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-red-500 selection:text-white">
      <Navbar />
      <Hero />
      <Portfolio />
      <Pricing />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
