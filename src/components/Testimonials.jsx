import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Web Development Graduate",
    image: "/api/placeholder/100/100",
    quote:
      "Eduruz's web development course completely transformed my career. I went from a complete beginner to landing a junior developer role in just 6 months.",
  },
  {
    name: "Michael Chen",
    role: "Data Science Student",
    image: "/api/placeholder/100/100",
    quote:
      "The structured curriculum and hands-on projects at Eduruz gave me practical skills that I apply daily in my data science internship.",
  },
  {
    name: "Olivia Martinez",
    role: "Digital Marketing Professional",
    image: "/api/placeholder/100/100",
    quote:
      "Eduruz helped me stay current with the latest digital marketing trends. Their specialized courses are perfect for working professionals like me.",
  },
];

export default function Testimonials() {
  return (
    <motion.section id="testimonials" className="py-16 bg-gray-50"
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
          >Testimonials</motion.h2>
          <motion.p className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Hear from our successful learners and professionals who have transformed their careers with Eduruz.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ delay: 0.2 + idx * 0.15, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              <motion.img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <h3 className="text-xl font-bold text-gray-800 mb-1">{testimonial.name}</h3>
              <span className="text-yellow-500 font-medium mb-3">{testimonial.role}</span>
              <p className="text-gray-600">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}