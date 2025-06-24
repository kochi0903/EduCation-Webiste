import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ quote, author, role, rating, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-card ${className}`}>
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            size={18}
            className={`${
              i < rating
                ? "text-primary-500 fill-primary-500"
                : "text-neutral-300"
            }`}
          />
        ))}
      </div>

      <p className="text-neutral-700 mb-6 italic">"{quote}"</p>

      <div className="flex items-center">
        <div>
          <h4 className="font-medium text-neutral-900">{author}</h4>
          <p className="text-sm text-neutral-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
