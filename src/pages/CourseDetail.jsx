import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaUser, FaChartBar,FaStar, FaCheckCircle, FaCalendar, FaAward  } from "react-icons/fa";
import Button from '../components/ui/Button';
import TestimonialCard from '../components/ui/TestimonialCard';
import { courses } from '../data/courses';
import { testimonials } from '../data/testimonials';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  
  useEffect(() => {
    if (id) {
      const foundCourse = courses.find(c => c.id.toString() === id);
      
      if (foundCourse) {
        setCourse(foundCourse);
        document.title = `${foundCourse.title} | LearnWell Academy`;
      } else {
        navigate('/courses');
      }
    }
  }, [id, navigate]);
  
  if (!course) {
    return <div className="container py-20 text-center">Loading...</div>;
  }
  
  // Get related courses (same category, excluding current)
  const relatedCourses = courses
    .filter(c => c.category === course.category && c.id !== course.id)
    .slice(0, 3);
  
  // Get course-specific testimonials
  const courseTestimonials = testimonials.filter(t => t.courseId === course.id).slice(0, 2);
  
  return (
    <>
      {/* Header */}
      <section className="bg-neutral-900 py-16">
        <div className="container pt-16">
          <div className="max-w-4xl mx-auto">
            <motion.span
              className="inline-block px-3 py-1 bg-primary-500 text-neutral-900 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {course.category}
            </motion.span>
            
            <motion.h1
              className="text-white text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {course.title}
            </motion.h1>
            
            <motion.p
              className="text-neutral-300 text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {course.description}
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center text-neutral-300">
                <FaClock size={20} className="mr-2 text-primary-500" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center text-neutral-300">
                <FaUser size={20} className="mr-2 text-primary-500" />
                <span>{course.studentsEnrolled} students</span>
              </div>
              <div className="flex items-center text-neutral-300">
                <FaChartBar size={20} className="mr-2 text-primary-500" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center text-neutral-300">
                <FaCalendar  size={20} className="mr-2 text-primary-500" />
                <span>Last updated: {course.lastUpdated}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Course Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Course Image */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-auto rounded-lg shadow-card"
                />
              </motion.div>
              
              {/* Course Description */}
              <div className="bg-white rounded-lg shadow-card p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">About This Course</h2>
                <p className="text-neutral-700 mb-6">
                  {course.fullDescription || course.description}
                </p>
                
                <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {course.learningOutcomes?.map((outcome, index) => (
                    <div key={index} className="flex items-start">
                      <FaCheckCircle  className="text-secondary-500 mt-1 mr-3 flex-shrink-0" size={20} />
                      <span className="text-neutral-700">{outcome}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-4">Prerequisites</h3>
                <ul className="list-disc list-inside text-neutral-700 mb-8 ml-4 space-y-2">
                  {course.prerequisites?.map((prerequisite, index) => (
                    <li key={index}>{prerequisite}</li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-bold mb-4">Course Curriculum</h3>
                <div className="space-y-4 mb-8">
                  {course.curriculum?.map((section, index) => (
                    <div key={index} className="border border-neutral-200 rounded-lg overflow-hidden">
                      <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200">
                        <h4 className="font-bold">{section.title}</h4>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="flex items-start">
                              <div className="mr-3 flex-shrink-0">
                                {lesson.type === 'video' && (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                  </svg>
                                )}
                                {lesson.type === 'quiz' && (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                  </svg>
                                )}
                                {lesson.type === 'assignment' && (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-error-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                                    <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                                  </svg>
                                )}
                              </div>
                              <div>
                                <div className="font-medium">{lesson.title}</div>
                                <div className="text-sm text-neutral-500">{lesson.duration}</div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-4">Instructor</h3>
                <div className="flex items-start mb-8">
                  <img
                    src={course.instructor.imageUrl}
                    alt={course.instructor.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{course.instructor.name}</h4>
                    <p className="text-neutral-600 text-sm mb-2">{course.instructor.role}</p>
                    <p className="text-neutral-700">{course.instructor.bio}</p>
                  </div>
                </div>
                
                {/* Testimonials */}
                {courseTestimonials.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-6">Student Testimonials</h3>
                    <div className="space-y-6">
                      {courseTestimonials.map((testimonial, index) => (
                        <TestimonialCard
                          key={index}
                          quote={testimonial.quote}
                          author={testimonial.author}
                          role={testimonial.role}
                          avatarUrl={testimonial.avatarUrl}
                          rating={testimonial.rating}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Price Card */}
              <div className="bg-white rounded-lg shadow-card p-6 mb-8 sticky top-24">
                <div className="text-3xl font-bold mb-4">${course.price}</div>
                
                <Button to="/register" variant="primary" className="w-full mb-4">
                  Enroll Now
                </Button>
                
                <div className="text-center text-neutral-600 text-sm mb-6">
                  30-Day Money-Back Guarantee
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaClock className="text-primary-500 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium">Duration</div>
                      <div className="text-neutral-600">{course.duration}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaChartBar className="text-primary-500 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium">Level</div>
                      <div className="text-neutral-600">{course.level}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaCalendar  className="text-primary-500 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium">Last Updated</div>
                      <div className="text-neutral-600">{course.lastUpdated}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaAward  className="text-primary-500 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium">Certificate</div>
                      <div className="text-neutral-600">Certificate of Completion</div>
                    </div>
                  </div>
                </div>
                
                <hr className="my-6 border-neutral-200" />
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FaStar className="text-primary-500 fill-primary-500" size={20} />
                    <span className="ml-1 font-medium">{course.rating}</span>
                  </div>
                  <span className="text-neutral-600">{course.reviews} reviews</span>
                </div>
              </div>
              
              {/* Related Courses */}
              {relatedCourses.length > 0 && (
                <div className="bg-white rounded-lg shadow-card p-6">
                  <h3 className="text-xl font-bold mb-6">Related Courses</h3>
                  <div className="space-y-4">
                    {relatedCourses.map((relatedCourse) => (
                      <div key={relatedCourse.id} className="flex items-start">
                        <img
                          src={relatedCourse.imageUrl}
                          alt={relatedCourse.title}
                          className="w-20 h-16 object-cover rounded mr-4"
                        />
                        <div>
                          <h4 className="font-medium mb-1 line-clamp-2">
                            <a href={`/courses/${relatedCourse.id}`} className="hover:text-primary-600 transition-colors">
                              {relatedCourse.title}
                            </a>
                          </h4>
                          <div className="text-primary-600 font-medium">${relatedCourse.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetails;