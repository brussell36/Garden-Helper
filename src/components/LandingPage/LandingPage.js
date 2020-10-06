import React from 'react';
import Header from './Header';
import Features from './Features';
import About from './About';
import Footer from './Footer';
import ImageCarousel from './ImageCarousel';

function LandingPage() {
  return(
    <>
      <Header />
      <Features />
      <About />
      <ImageCarousel />
      <Footer />
    </>
  );
}

export default LandingPage;