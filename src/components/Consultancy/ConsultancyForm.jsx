import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const ConsultancyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    schoolCollege: "", // Added school/college
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (!formData.schoolCollege.trim()) {
      newErrors.schoolCollege = "School/College is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      const meetingBaseUrl = "https://koalendar.com/e/meet-with-kisholoy-roy"; // Replace with your link
      const queryParams = new URLSearchParams({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        a1: formData.phone, // Example: Custom answer 1 for phone
        a2: formData.schoolCollege, // Example: Custom answer 2 for school/college
      });

      const calendlyUrl = `${meetingBaseUrl}?${queryParams.toString()}`;

      window.location.href = calendlyUrl;
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-card p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">Book Your Consultation</h2>

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
              placeholder="Rohan"
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
              placeholder="Singh"
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
              placeholder="rohan@g***.com"
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
              placeholder="+91 911111111"
              className={`form-input ${
                errors.phone ? "border-error-500 focus:ring-error-500" : ""
              }`}
            />
            {errors.phone && <p className="form-error">{errors.phone}</p>}
          </div>

          {/* School/College */} 
          <div className="md:col-span-2">
            <label htmlFor="schoolCollege" className="form-label">
              School/College <span className="text-error-500">*</span>
            </label>
            <input
              type="text"
              id="schoolCollege"
              name="schoolCollege"
              value={formData.schoolCollege}
              onChange={handleChange}
              className={`form-input ${
                errors.schoolCollege ? "border-error-500 focus:ring-error-500" : ""
              }`}
              placeholder="e.g., DAV Public School / MAKAUT University"
            />
            {errors.schoolCollege && (
              <p className="form-error">{errors.schoolCollege}</p>
            )}
          </div>
        </div>
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
            "Proceed to Booking"
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

export default ConsultancyForm;
