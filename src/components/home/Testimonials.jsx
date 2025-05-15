import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import TestimonialCard from "../ui/TestimonialCard";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % totalPages);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + totalPages) % totalPages);
  };

  const visibleTestimonials = testimonials.slice(
    activeIndex * testimonialsPerPage,
    (activeIndex + 1) * testimonialsPerPage
  );

  return (
    <section className="py-20 bg-secondary-50">
      <div className="container">
        <SectionTitle
          title="What Our Students Say"
          subtitle="Hear from our students about their learning experiences and successes"
          centered
        />

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  avatarUrl={testimonial.avatarUrl}
                  rating={testimonial.rating}
                />
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md text-neutral-800 hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-500"
              aria-label="Previous testimonials"
            >
              <FaChevronLeft size={24} />
            </button>
            <div className="flex space-x-2 items-center">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex
                      ? "bg-secondary-500"
                      : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to testimonial page ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md text-neutral-800 hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-500"
              aria-label="Next testimonials"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
