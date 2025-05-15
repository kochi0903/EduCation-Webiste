import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg"
          alt="Students in a classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-neutral-900/60" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-500 text-neutral-900 font-medium text-sm mb-6">
              Transform Your Future With Us
            </span>
          </motion.div>
          
          <motion.h1
            className="text-white text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Exceptional Education for <span className="text-primary-500">Tomorrow's Leaders</span>
          </motion.h1>
          
          <motion.p
            className="text-neutral-200 text-xl mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover our world-class courses designed to help you master new skills,
            advance your career, and achieve your full potential.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button to="/courses" size="lg">
              Explore Courses
            </Button>
            <Button to="/register" variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/40">
              Register Now
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm py-6 z-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-primary-500 font-bold text-3xl md:text-4xl">30+</div>
              <div className="text-white text-sm md:text-base">Professional Courses</div>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="text-primary-500 font-bold text-3xl md:text-4xl">5,000+</div>
              <div className="text-white text-sm md:text-base">Happy Students</div>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-primary-500 font-bold text-3xl md:text-4xl">95%</div>
              <div className="text-white text-sm md:text-base">Satisfaction Rate</div>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="text-primary-500 font-bold text-3xl md:text-4xl">15+</div>
              <div className="text-white text-sm md:text-base">Years Experience</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;