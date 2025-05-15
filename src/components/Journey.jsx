import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Journey() {
  return (
    <motion.section id="journey" className="py-16 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 className="text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >Your Journey at Eduruz</motion.h2>
          <motion.p className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            A simple three-step process to guide you from discovering your
            path to achieving your career goals.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Discover */}
          <motion.div className="relative bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-5 -left-5 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-xl font-bold text-gray-900">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 mt-4">
              Discover
            </h3>
            <p className="text-gray-600 mb-4">
              Explore our wide range of courses and take a personalized
              assessment to find the perfect learning path that matches your
              goals and current skill level.
            </p>
            <a
              href="#"
              className="flex items-center text-yellow-500 font-bold hover:text-yellow-600"
            >
              Start exploring <FaArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
          {/* Learn & Build */}
          <motion.div className="relative bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ delay: 0.35, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-5 -left-5 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-xl font-bold text-gray-900">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 mt-4">
              Learn & Build
            </h3>
            <p className="text-gray-600 mb-4">
              Engage with interactive lessons, hands-on projects, and real-world scenarios to build practical skills and a strong portfolio.
            </p>
            <a
              href="#"
              className="flex items-center text-yellow-500 font-bold hover:text-yellow-600"
            >
              See learning paths <FaArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
          {/* Achieve */}
          <motion.div className="relative bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-5 -left-5 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-xl font-bold text-gray-900">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 mt-4">
              Achieve
            </h3>
            <p className="text-gray-600 mb-4">
              Complete your journey with recognized certifications and career support, ready to take on new opportunities.
            </p>
            <a
              href="#"
              className="flex items-center text-yellow-500 font-bold hover:text-yellow-600"
            >
              Get certified <FaArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}