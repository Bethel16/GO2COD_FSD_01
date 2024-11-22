import React, { useEffect } from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import GallerySection from './GallerySection';
import Footer from './Footer';

const Main = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) preloader.style.display = 'none';
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="main" id="top">
      <div className="preloader" id="preloader">
        <div className="loader-box">
          <div className="loader"></div>
        </div>
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <GallerySection />
      <Footer />
    </main>
  );
};

export default Main;
