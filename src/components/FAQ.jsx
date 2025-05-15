import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "How do Eduruz courses work?",
    answer:
      "Our courses combine video lectures, interactive assignments, real-world projects, and personalized feedback. You'll have access to course materials 24/7 and can learn at your own pace. Our instructors are available to answer questions and provide guidance throughout your learning journey.",
  },
  {
    question: "Are there any prerequisites for joining courses?",
    answer:
      "Most of our beginner courses have no prerequisites. For intermediate and advanced courses, we recommend specific prior knowledge or skills, which are clearly listed on each course page. If you're unsure, you can take our free skill assessment to find the right starting point.",
  },
  {
    question: "Do you provide certifications?",
    answer:
      "Yes, all our courses come with a completion certificate once you've successfully finished all required modules and assignments. Our certifications are recognized by leading employers in the industry and can boost your resume.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "We offer a 14-day money-back guarantee for all our courses. If you're not satisfied with your learning experience, you can request a full refund within 14 days of purchase, no questions asked.",
  },
];

export default function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <motion.section id="faq" className="py-16 bg-white"
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
          >Frequently Asked Questions</motion.h2>
          <motion.p className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Find answers to the most common questions about Eduruz and our courses.
          </motion.p>
        </div>
        <div className="max-w-2xl mx-auto">
          {faqItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="mb-6 border-b border-gray-200 pb-4"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.12, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
            >
              <button
                className="w-full flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleQuestion(idx)}
              >
                <span className="text-lg font-semibold text-gray-800">{item.question}</span>
                <span className="ml-4 text-yellow-500">
                  {activeQuestion === idx ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {activeQuestion === idx && (
                <motion.div
                  className="mt-3 text-gray-600 animate-fade-in"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}