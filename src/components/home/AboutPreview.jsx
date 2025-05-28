import React from "react";
import { motion } from "framer-motion";
import { FaRegCircleCheck } from "react-icons/fa6";
import Button from "../ui/Button";
import StudentsAbout from "../../assets/StudentsAbout.jpeg";


const AboutPreview = () => {
  const benefits = [
    "Expert instructors with industry experience",
    "Flexible learning schedules to fit your lifestyle",
    "Hands-on projects and real-world applications",
    "Career guidance and placement assistance",
    "Interactive learning environment with peer collaboration",
    "Lifetime access to course materials and updates",
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={StudentsAbout}
              alt="About LearnWell Academy"
              className="rounded-lg shadow-elevated w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-primary-500">LearnWell</span>{" "}
              Academy?
            </h2>

            <p className="text-neutral-700 text-lg mb-8">
              At LearnWell Academy, we're dedicated to providing exceptional
              educational experiences that empower individuals to achieve their
              personal and professional goals. Our innovative approach combines
              expert instruction, cutting-edge curriculum, and supportive
              learning environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <FaRegCircleCheck
                    className="text-secondary-500 mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-neutral-700">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <Button to="/about" size="lg">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
