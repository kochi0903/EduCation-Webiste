import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedCourses from '../components/home/FeaturedCourses';
import AboutPreview from '../components/home/AboutPreview';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const Home = () => {
  useEffect(() => {
    document.title = 'LearnWell Academy | Transforming Education';
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      <AboutPreview />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default Home;