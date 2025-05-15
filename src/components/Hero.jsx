import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section className="pt-28 pb-16 bg-gradient-to-r from-gray-50 to-gray-100"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div className="md:w-1/2 mb-10 md:mb-0"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-6">
            Helping You Rise, <br />
            One Skill at a Time
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover personalized learning paths that empower your career
            growth and help you achieve your professional goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.08, rotate: -2 }}
              whileTap={{ scale: 0.96 }}
              className="bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-400"
            >
              Explore Courses
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08, rotate: 2 }}
              whileTap={{ scale: 0.96 }}
              className="border-2 border-gray-800 text-gray-800 font-bold px-8 py-3 rounded-full hover:bg-gray-800 hover:text-white"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
        <motion.div className="md:w-1/2"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
        >
          <motion.img
            src="/api/placeholder/600/400"
            alt="Education concept"
            className="rounded-lg shadow-xl"
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}