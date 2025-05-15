import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary-500">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="mb-8 md:mb-0 md:mr-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-neutral-800 text-lg max-w-xl">
              Enroll today and take the first step towards a brighter future.
              Our expert-led courses are designed to help you succeed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              to="/register"
              variant="secondary"
              size="lg"
              className="shadow-lg"
            >
              Register Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
