import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
