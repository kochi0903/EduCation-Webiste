import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section className="py-16 bg-gray-50"
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
          >Contact Us</motion.h2>
          <motion.p className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Have questions or need support? Reach out to us!
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <FaPhone className="text-yellow-500 text-3xl mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </motion.div>
          <motion.div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ delay: 0.35, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <FaEnvelope className="text-yellow-500 text-3xl mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">support@eduruz.com</p>
          </motion.div>
          <motion.div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <FaMapMarkerAlt className="text-yellow-500 text-3xl mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600">123 Learning Ave, Knowledge City</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}