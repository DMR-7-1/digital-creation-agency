import React from 'react';
import { PageTransition } from '../components/AnimatedSection';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import About from '../sections/About';
import Contact from '../sections/Contact';

import SEO from '../components/SEO';

const Home = () => {
  return (
    <PageTransition>
      <SEO title="الرئيسية" description="وكالة رقمية جزائرية تقدم تصميم مواقع، متاجر إلكترونية، وتطبيقات ويب بجودة عالمية" />
      <div>
        <Hero />
        <Services preview={true} />
        <div className="mobile-home-hidden">
          <About />
          <Contact />
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
