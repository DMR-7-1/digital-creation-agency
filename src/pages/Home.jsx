import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import About from '../sections/About';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Services preview={true} /> {/* Pass preview prop to show less/summary */}
      <div className="mobile-home-hidden">
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
