import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page Not Found | LearnWell Academy';
  }, []);
  
  return (
    <section className="py-20 min-h-screen flex items-center">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-8xl font-bold text-primary-500 mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/" variant="primary">
                Return to Home
              </Button>
              <Button to="/courses" variant="outline">
                Browse Courses
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;