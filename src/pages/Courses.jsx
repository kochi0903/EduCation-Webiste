import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturedCourses from "../components/home/FeaturedCourses";
import About from "../components/home/About";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";

const Home = () => {
  useEffect(() => {
    document.title = "LearnWell Academy | Transforming Education";
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      <About />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default Home;
