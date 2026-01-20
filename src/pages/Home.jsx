import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Services preview={true} /> {/* Pass preview prop to show less/summary */}
    </div>
  );
};

export default Home;
