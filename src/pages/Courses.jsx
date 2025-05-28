import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CourseCard from "../components/ui/CourseCard";
import CourseFilters from "../components/courses/CourseFilters";
import { courses } from "../data/courses";

const Courses = () => {
  useEffect(() => {
    document.title = "Our Courses | LearnWell Academy";
  }, []);

  const [filteredCourses, setFilteredCourses] = useState(courses);

  const categories = Array.from(
    new Set(courses.map((course) => course.category))
  );
  const levels = Array.from(new Set(courses.map((course) => course.level)));

  const handleFilterChange = (filters) => {
    const { search, category, level, priceRange } = filters;

    const filtered = courses.filter((course) => {
      // Search filter
      const matchesSearch = search
        ? course.title.toLowerCase().includes(search.toLowerCase()) ||
          course.description.toLowerCase().includes(search.toLowerCase())
        : true;

      // Category filter
      const matchesCategory = category ? course.category === category : true;

      // Level filter
      const matchesLevel = level ? course.level === level : true;

      // Price filter
      const matchesPrice =
        course.price >= priceRange[0] && course.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
    });

    setFilteredCourses(filtered);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-neutral-900 py-16">
        <div className="container pt-16">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-white text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Courses
            </motion.h1>
            <motion.p
              className="text-neutral-300 text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore our wide range of courses designed to help you succeed
            </motion.p>
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <CourseFilters
                categories={categories}
                levels={levels}
                onFilterChange={handleFilterChange}
              />
            </div>

            {/* Course Grid */}
            <div className="lg:col-span-3">
              <div className="mb-8 flex justify-between items-center">
                <p className="text-neutral-600">
                  Showing{" "}
                  <span className="font-medium">{filteredCourses.length}</span>{" "}
                  courses
                </p>
                <select className="form-input w-auto">
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>

              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCourses.map((course, index) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <CourseCard course={course} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-card p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">No courses found</h3>
                  <p className="text-neutral-600 mb-4">
                    We couldn't find any courses matching your criteria. Try
                    adjusting your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
