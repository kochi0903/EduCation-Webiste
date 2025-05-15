import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import CourseCard from "../ui/CourseCard";
import Button from "../ui/Button";
import { courses } from "../../data/courses";

const FeaturedCourses = () => {
  // Get only the featured courses (limited to 3)
  const featuredCourses = courses
    .filter((course) => course.featured)
    .slice(0, 3);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container">
        <SectionTitle
          title="Featured Courses"
          subtitle="Explore our most popular courses selected by our students and industry experts"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button to="/courses" size="lg">
            View All Courses
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
