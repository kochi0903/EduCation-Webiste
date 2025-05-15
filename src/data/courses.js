export const courses = [
  {
    id: 1,
    title: "Digital Marketing Masterclass",
    description: "Learn the essential skills and strategies to excel in digital marketing from industry experts.",
    fullDescription: "This comprehensive digital marketing course covers all aspects of online marketing, including SEO, social media, email marketing, PPC advertising, and analytics. You'll learn how to create effective marketing strategies, measure campaign success, and adapt to the ever-changing digital landscape. By the end of this course, you'll have the knowledge and practical skills to implement successful digital marketing campaigns for any business.",
    imageUrl: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
    price: 149.99,
    category: "Marketing",
    level: "Beginner to Intermediate",
    duration: "10 weeks",
    studentsEnrolled: 1250,
    featured: true,
    rating: 4.8,
    reviews: 325,
    lastUpdated: "June 15, 2024",
    learningOutcomes: [
      "Develop comprehensive digital marketing strategies",
      "Optimize websites for search engines and conversions",
      "Create and manage effective social media campaigns",
      "Implement email marketing strategies with high open rates",
      "Analyze marketing data to improve campaign performance",
      "Set up and optimize PPC advertising campaigns"
    ],
    prerequisites: [
      "Basic computer skills",
      "Familiarity with social media platforms",
      "No prior marketing experience required"
    ],
    curriculum: [
      {
        title: "Introduction to Digital Marketing",
        lessons: [
          { title: "The Digital Marketing Landscape", duration: "45 min", type: "video" },
          { title: "Setting Marketing Goals", duration: "35 min", type: "video" },
          { title: "Understanding Your Target Audience", duration: "50 min", type: "video" },
          { title: "Marketing Strategy Assessment", duration: "30 min", type: "quiz" }
        ]
      },
      {
        title: "Search Engine Optimization (SEO)",
        lessons: [
          { title: "SEO Fundamentals", duration: "55 min", type: "video" },
          { title: "Keyword Research Techniques", duration: "45 min", type: "video" },
          { title: "On-Page Optimization", duration: "50 min", type: "video" },
          { title: "Link Building Strategies", duration: "40 min", type: "video" },
          { title: "SEO Practical Exercise", duration: "90 min", type: "assignment" }
        ]
      },
      {
        title: "Social Media Marketing",
        lessons: [
          { title: "Social Media Strategy Development", duration: "50 min", type: "video" },
          { title: "Content Creation for Social Media", duration: "45 min", type: "video" },
          { title: "Paid Social Advertising", duration: "55 min", type: "video" },
          { title: "Measuring Social Media Success", duration: "40 min", type: "video" },
          { title: "Social Media Campaign Project", duration: "120 min", type: "assignment" }
        ]
      }
    ],
    instructor: {
      name: "Sarah Mitchell",
      role: "Digital Marketing Director",
      bio: "Sarah has over 12 years of experience in digital marketing, having worked with Fortune 500 companies and startups alike. She specializes in creating holistic marketing strategies that drive measurable results.",
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    }
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    description: "Master full-stack web development with HTML, CSS, JavaScript, React, Node.js, and more.",
    fullDescription: "This intensive bootcamp will take you from beginner to job-ready web developer. You'll learn front-end and back-end technologies, including HTML5, CSS3, JavaScript, React, Node.js, Express, and MongoDB. Through hands-on projects and real-world applications, you'll build a strong portfolio that showcases your skills to potential employers. Our experienced instructors will guide you through each step of the learning process.",
    imageUrl: "https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg",
    price: 299.99,
    category: "Programming",
    level: "Beginner to Advanced",
    duration: "16 weeks",
    studentsEnrolled: 2130,
    featured: true,
    rating: 4.9,
    reviews: 450,
    lastUpdated: "July 2, 2024",
    learningOutcomes: [
      "Build responsive websites using HTML5 and CSS3",
      "Develop interactive web applications with JavaScript",
      "Create dynamic user interfaces with React",
      "Build RESTful APIs with Node.js and Express",
      "Work with databases including MongoDB",
      "Deploy applications to production environments"
    ],
    prerequisites: [
      "Basic computer skills",
      "No prior programming experience required",
      "Access to a computer with internet connection"
    ],
    curriculum: [
      {
        title: "Front-End Fundamentals",
        lessons: [
          { title: "HTML5 Essentials", duration: "60 min", type: "video" },
          { title: "CSS3 Styling and Layout", duration: "75 min", type: "video" },
          { title: "Responsive Design Principles", duration: "55 min", type: "video" },
          { title: "Building Your First Webpage", duration: "120 min", type: "assignment" }
        ]
      },
      {
        title: "JavaScript Programming",
        lessons: [
          { title: "JavaScript Syntax and Variables", duration: "50 min", type: "video" },
          { title: "Functions and Objects", duration: "65 min", type: "video" },
          { title: "DOM Manipulation", duration: "70 min", type: "video" },
          { title: "Event Handling", duration: "45 min", type: "video" },
          { title: "JavaScript Challenge", duration: "60 min", type: "quiz" },
          { title: "Interactive Web App Project", duration: "180 min", type: "assignment" }
        ]
      },
      {
        title: "React Framework",
        lessons: [
          { title: "React Fundamentals", duration: "65 min", type: "video" },
          { title: "Components and Props", duration: "55 min", type: "video" },
          { title: "State Management", duration: "70 min", type: "video" },
          { title: "Hooks and Context API", duration: "60 min", type: "video" },
          { title: "Building a React App", duration: "240 min", type: "assignment" }
        ]
      }
    ],
    instructor: {
      name: "David Rodriguez",
      role: "Senior Software Engineer",
      bio: "David is a full-stack developer with 15 years of experience building web applications for tech startups and enterprises. He's passionate about teaching coding skills and mentoring new developers.",
      imageUrl: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
    }
  },
  {
    id: 3,
    title: "Data Science Fundamentals",
    description: "Learn to analyze and interpret complex data sets using Python, SQL, and visualization tools.",
    fullDescription: "This comprehensive data science course covers the entire data analysis pipeline, from data collection and cleaning to advanced analysis and visualization. You'll learn to work with Python, pandas, NumPy, and SQL to manipulate data, apply statistical methods, and create machine learning models. By completing real-world projects, you'll develop the practical skills needed to extract meaningful insights from data and communicate them effectively.",
    imageUrl: "https://images.pexels.com/photos/4064835/pexels-photo-4064835.jpeg",
    price: 199.99,
    category: "Data Science",
    level: "Intermediate",
    duration: "12 weeks",
    studentsEnrolled: 1890,
    featured: true,
    rating: 4.7,
    reviews: 310,
    lastUpdated: "May 20, 2024",
    learningOutcomes: [
      "Analyze and manipulate data using Python libraries",
      "Create effective data visualizations",
      "Apply statistical methods to interpret data",
      "Build predictive models using machine learning",
      "Extract and transform data with SQL",
      "Present data findings in a clear, compelling manner"
    ],
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of algebra and statistics",
      "Familiarity with spreadsheets"
    ],
    curriculum: [
      {
        title: "Python for Data Analysis",
        lessons: [
          { title: "Python Fundamentals for Data Science", duration: "65 min", type: "video" },
          { title: "Working with NumPy", duration: "55 min", type: "video" },
          { title: "Data Manipulation with Pandas", duration: "75 min", type: "video" },
          { title: "Python Data Analysis Challenge", duration: "90 min", type: "assignment" }
        ]
      },
      {
        title: "Data Visualization",
        lessons: [
          { title: "Visualization Principles", duration: "45 min", type: "video" },
          { title: "Creating Charts with Matplotlib", duration: "65 min", type: "video" },
          { title: "Interactive Visualizations with Plotly", duration: "60 min", type: "video" },
          { title: "Data Storytelling Project", duration: "120 min", type: "assignment" }
        ]
      },
      {
        title: "Machine Learning Basics",
        lessons: [
          { title: "Introduction to Machine Learning", duration: "70 min", type: "video" },
          { title: "Supervised Learning Models", duration: "85 min", type: "video" },
          { title: "Model Evaluation and Validation", duration: "60 min", type: "video" },
          { title: "Machine Learning Quiz", duration: "45 min", type: "quiz" },
          { title: "Predictive Model Project", duration: "180 min", type: "assignment" }
        ]
      }
    ],
    instructor: {
      name: "Emily Zhang",
      role: "Data Scientist",
      bio: "Emily has a Ph.D. in Statistics and has worked as a data scientist for tech giants and research institutions. She specializes in machine learning and has published numerous papers on predictive modeling techniques.",
      imageUrl: "https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg"
    }
  },
  {
    id: 4,
    title: "Business Management Essentials",
    description: "Develop the core management skills needed to lead teams and drive organizational success.",
    imageUrl: "https://images.pexels.com/photos/1181452/pexels-photo-1181452.jpeg",
    price: 179.99,
    category: "Business",
    level: "All Levels",
    duration: "8 weeks",
    studentsEnrolled: 1450,
    featured: false,
    rating: 4.6,
    reviews: 280,
    lastUpdated: "April 10, 2024",
    instructor: {
      name: "Michael Johnson",
      role: "Business Consultant",
      bio: "Michael has 20+ years of experience in corporate leadership and has helped transform numerous businesses through strategic management practices.",
      imageUrl: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
    }
  },
  {
    id: 5,
    title: "Graphic Design Masterclass",
    description: "Master the principles of visual design and learn industry-standard tools like Adobe Creative Suite.",
    imageUrl: "https://images.pexels.com/photos/860000/pexels-photo-860000.jpeg",
    price: 149.99,
    category: "Design",
    level: "Beginner to Intermediate",
    duration: "10 weeks",
    studentsEnrolled: 1720,
    featured: false,
    rating: 4.8,
    reviews: 315,
    lastUpdated: "June 5, 2024",
    instructor: {
      name: "Jessica Williams",
      role: "Senior Graphic Designer",
      bio: "Jessica has worked with global brands as a graphic designer for over 15 years, specializing in brand identity and digital design.",
      imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    }
  },
  {
    id: 6,
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile apps that work on both iOS and Android using React Native.",
    imageUrl: "https://images.pexels.com/photos/14599606/pexels-photo-14599606.jpeg",
    price: 229.99,
    category: "Programming",
    level: "Intermediate",
    duration: "12 weeks",
    studentsEnrolled: 980,
    featured: false,
    rating: 4.7,
    reviews: 210,
    lastUpdated: "May 15, 2024",
    instructor: {
      name: "Alex Chen",
      role: "Mobile Developer",
      bio: "Alex has developed over 20 successful mobile apps and has experience working with startups and established tech companies.",
      imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
    }
  },
  {
    id: 7,
    title: "Financial Planning and Investment",
    description: "Learn how to create effective financial plans and make smart investment decisions.",
    imageUrl: "https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg",
    price: 159.99,
    category: "Finance",
    level: "Beginner",
    duration: "8 weeks",
    studentsEnrolled: 1120,
    featured: false,
    rating: 4.5,
    reviews: 190,
    lastUpdated: "March 25, 2024",
    instructor: {
      name: "Robert Wilson",
      role: "Financial Advisor",
      bio: "Robert is a certified financial planner with over 25 years of experience helping individuals and businesses make sound financial decisions.",
      imageUrl: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
    }
  },
  {
    id: 8,
    title: "Content Marketing Strategy",
    description: "Develop effective content strategies that engage audiences and drive business results.",
    imageUrl: "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg",
    price: 129.99,
    category: "Marketing",
    level: "Intermediate",
    duration: "6 weeks",
    studentsEnrolled: 870,
    featured: false,
    rating: 4.6,
    reviews: 165,
    lastUpdated: "April 18, 2024",
    instructor: {
      name: "Laura Thompson",
      role: "Content Marketing Director",
      bio: "Laura has led content marketing teams for major brands and has a track record of creating strategies that significantly increase engagement and conversions.",
      imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
    }
  },
  {
    id: 9,
    title: "UI/UX Design Principles",
    description: "Learn how to create intuitive, user-friendly interfaces that enhance the user experience.",
    imageUrl: "https://images.pexels.com/photos/4065864/pexels-photo-4065864.jpeg",
    price: 179.99,
    category: "Design",
    level: "Intermediate",
    duration: "10 weeks",
    studentsEnrolled: 1350,
    featured: false,
    rating: 4.8,
    reviews: 275,
    lastUpdated: "June 8, 2024",
    instructor: {
      name: "Daniel Kim",
      role: "UX Design Lead",
      bio: "Daniel has worked as a UX designer for tech giants and specializes in creating user-centered designs that improve product usability and satisfaction.",
      imageUrl: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg"
    }
  }
];