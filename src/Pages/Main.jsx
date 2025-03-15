import React from "react";

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center text-white text-center">
    <i className={`fa-solid ${icon} fa-3x mb-4`} aria-hidden="true"></i>
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-sm mt-2 text-gray-200">{description}</p>
  </div>
);

const features = [
  {
    icon: "fa-chalkboard-teacher", // Represents teaching & live classes
    title: "Live Classroom Learning",
    description: "Attend face-to-face classes with industry professionals, ensuring personalized attention and instant doubt resolution.",
  },
  {
    icon: "fa-laptop-code", // Represents coding & hands-on experience
    title: "Hands-On Training",
    description: "Gain practical experience with real-world projects, interactive sessions, and expert-led guidance.",
  },
  {
    icon: "fa-server", // Represents advanced infrastructure & labs
    title: "State-of-the-Art Infrastructure",
    description: "Learn in a well-equipped computer lab with the latest software and tools for a seamless learning experience.",
  },
  {
    icon: "fa-award", // Represents certification & achievement
    title: "Certification & Job Assistance",
    description: "Earn industry-recognized certifications and receive career guidance to land your dream job.",
  },
  {
    icon: "fa-graduation-cap", // Represents diplomas & education
    title: "Diploma & Short-Term Courses",
    description: "Choose from a variety of diploma and skill-based programs designed to meet industry demands.",
  },
  {
    icon: "fa-user-tie", // Represents mentorship & career coaching
    title: "Degree Coaching & Mentorship",
    description: "Expert coaching for BCA, MCA, and B.Tech students with structured curriculum and career support.",
  },
];



function Features() {
  return (
    <section className="px-10 py-12">
      {/* Features Section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-blue-800">Awesome Features</h1>
        <p className="text-xl text-gray-600">Explore features that make learning effective & engaging.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default Features;
