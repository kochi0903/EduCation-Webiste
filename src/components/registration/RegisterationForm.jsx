import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    courseInterest: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const courseOptions = [
    "Digital Marketing",
    "Web Development",
    "Data Science",
    "Business Management",
    "Graphic Design",
    "Not sure yet",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)
    ) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.courseInterest) {
      newErrors.courseInterest = "Please select a course interest";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          courseInterest: "",
          message: "",
        });
      }, 1500);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="bg-white rounded-lg shadow-card p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-16 h-16 mx-auto bg-success-50 rounded-full flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-success-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
        <p className="text-neutral-600 mb-6">
          Thank you for registering with LearnWell Academy. We've sent a
          confirmation email to your inbox. Our team will contact you shortly to
          discuss next steps.
        </p>
        <Button to="/" variant="primary">
          Return to Home
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white rounded-lg shadow-card p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">Register for a Course</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="form-label">
              First Name <span className="text-error-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`form-input ${
                errors.firstName ? "border-error-500 focus:ring-error-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="form-error">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="form-label">
              Last Name <span className="text-error-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`form-input ${
                errors.lastName ? "border-error-500 focus:ring-error-500" : ""
              }`}
            />
            {errors.lastName && <p className="form-error">{errors.lastName}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="form-label">
              Email <span className="text-error-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${
                errors.email ? "border-error-500 focus:ring-error-500" : ""
              }`}
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="form-label">
              Phone <span className="text-error-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              className={`form-input ${
                errors.phone ? "border-error-500 focus:ring-error-500" : ""
              }`}
            />
            {errors.phone && <p className="form-error">{errors.phone}</p>}
          </div>
        </div>

        {/* Course Interest */}
        <div className="mb-6">
          <label htmlFor="courseInterest" className="form-label">
            Course Interest <span className="text-error-500">*</span>
          </label>
          <select
            id="courseInterest"
            name="courseInterest"
            value={formData.courseInterest}
            onChange={handleChange}
            className={`form-input ${
              errors.courseInterest
                ? "border-error-500 focus:ring-error-500"
                : ""
            }`}
          >
            <option value="">Select a course</option>
            {courseOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.courseInterest && (
            <p className="form-error">{errors.courseInterest}</p>
          )}
        </div>

        {/* Message */}
        <div className="mb-6">
          <label htmlFor="message" className="form-label">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="form-input"
            placeholder="Tell us about your learning goals..."
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Submit Registration"
          )}
        </Button>

        <p className="text-sm text-neutral-500 mt-4 text-center">
          By submitting this form, you agree to our{" "}
          <a href="#" className="text-primary-600 hover:underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary-600 hover:underline">
            Terms of Service
          </a>
          .
        </p>
      </form>
    </motion.div>
  );
};

export default RegistrationForm;
