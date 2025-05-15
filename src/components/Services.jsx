import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.section id="services" className="py-16 bg-white"
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
          >Our Services</motion.h2>
          <motion.p className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Explore the range of services we offer to support your learning and career growth.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personalized Learning */}
          <motion.div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">Personalized Learning</h3>
            <p className="text-gray-600">
              Tailored course recommendations and adaptive learning paths to fit your unique goals and pace.
            </p>
          </motion.div>
          {/* Career Support */}
          <motion.div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ delay: 0.35, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">Career Support</h3>
            <p className="text-gray-600">
              Resume reviews, interview prep, and job placement assistance to help you land your dream role.
            </p>
          </motion.div>
          {/* Community Access */}
          <motion.div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">Community Access</h3>
            <p className="text-gray-600">
              Join a vibrant community of learners and professionals for networking, mentorship, and collaboration.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}