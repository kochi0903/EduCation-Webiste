import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Guides Eduruz
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our core principles shape everything we do as we work to create
            the best learning experience for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To democratize education by providing accessible, high-quality
              learning experiences that empower individuals to achieve their
              career goals.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600">
              A world where anyone, regardless of background, can develop the
              skills needed to thrive in the digital economy and create
              positive change.
            </p>
          </div>
          {/* Values */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Our Values
            </h3>
            <p className="text-gray-600">
              Innovation, inclusion, integrity, and impact guide our approach
              to education. We believe in lifelong learning and continuous
              improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



// import React from "react";
// import { motion } from "framer-motion";
// import { FaRegCircleCheck } from "react-icons/fa6";
// import Button from "../ui/Button";

// const About = () => {
//   const benefits = [
//     "Expert instructors with industry experience",
//     "Flexible learning schedules to fit your lifestyle",
//     "Hands-on projects and real-world applications",
//     "Career guidance and placement assistance",
//     "Interactive learning environment with peer collaboration",
//     "Lifetime access to course materials and updates",
//   ];

//   return (
//     <section className="py-20">
//       <div className="container">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Image Side */}
//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <img
//               src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg"
//               alt="About LearnWell Academy"
//               className="rounded-lg shadow-elevated w-full h-[500px] object-cover"
//             />
//           </motion.div>

//           {/* Content Side */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Why Choose <span className="text-primary-500">LearnWell</span>{" "}
//               Academy?
//             </h2>

//             <p className="text-neutral-700 text-lg mb-8">
//               At LearnWell Academy, we're dedicated to providing exceptional
//               educational experiences that empower individuals to achieve their
//               personal and professional goals. Our innovative approach combines
//               expert instruction, cutting-edge curriculum, and supportive
//               learning environment.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//               {benefits.map((benefit, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-start"
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                 >
//                   <FaRegCircleCheck
//                     className="text-secondary-500 mt-1 mr-3 flex-shrink-0"
//                     size={20}
//                   />
//                   <p className="text-neutral-700">{benefit}</p>
//                 </motion.div>
//               ))}
//             </div>

//             <Button to="/about" size="lg">
//               Learn More About Us
//             </Button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
