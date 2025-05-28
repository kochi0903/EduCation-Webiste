import React from "react";
import { FaClock, FaUser, FaChartBar } from "react-icons/fa";
import Button from "./Button";

const CourseCard = ({ course, className = "" }) => {
  return (
    <div className={`card hover-lift ${className}`}>
      <div className="relative">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-primary-500 text-neutral-900 text-sm font-medium px-3 py-1 rounded-full">
          {course.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-neutral-600 mb-4 line-clamp-3">
          {course.description}
        </p>

        <div className="flex flex-wrap gap-4 mb-5">
          <div className="flex items-center text-sm text-neutral-600">
            <FaClock size={16} className="mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center text-sm text-neutral-600">
            <FaUser size={16} className="mr-1" />
            <span>{course.studentsEnrolled} students</span>
          </div>
          <div className="flex items-center text-sm text-neutral-600">
            <FaChartBar size={16} className="mr-1" />
            <span>{course.level}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="font-bold text-lg">Rs{course.price}</div>
          <Button to={`/courses/${course.id}`} variant="secondary" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
