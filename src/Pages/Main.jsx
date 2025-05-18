import React from "react";
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaServer,
  FaAward,
  FaGraduationCap,
  FaUserTie,
} from "react-icons/fa";

// Features data
const features = [
  {
    icon: FaChalkboardTeacher,
    title: "Live Classroom Learning",
    description:
      "Attend face-to-face classes with industry professionals, ensuring personalized attention and instant doubt resolution.",
  },
  {
    icon: FaLaptopCode,
    title: "Hands-On Training",
    description:
      "Gain practical experience with real-world projects, interactive sessions, and expert-led guidance.",
  },
  {
    icon: FaServer,
    title: "State-of-the-Art Infrastructure",
    description:
      "Learn in a well-equipped computer lab with the latest software and tools for a seamless learning experience.",
  },
  {
    icon: FaAward,
    title: "Certification & Job Assistance",
    description:
      "Earn industry-recognized certifications and receive career guidance to land your dream job.",
  },
  {
    icon: FaGraduationCap,
    title: "Diploma & Short-Term Courses",
    description:
      "Choose from a variety of diploma and skill-based programs designed to meet industry demands.",
  },
  {
    icon: FaUserTie,
    title: "Degree Coaching & Mentorship",
    description:
      "Expert coaching for BCA, MCA, and B.Tech students with structured curriculum and career support.",
  },
];

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-4 h-[180px] bg-[#07c4f4] hover:bg-[#000080] rounded-xl shadow-glass transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-2 flex flex-col items-center text-white text-center animate-fadeInUp">
    <Icon
      className="text-4xl mb-4 transform transition-transform duration-300 hover:scale-110"
      aria-label={title}
    />
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-sm text-softWhite">{description}</p>
  </div>
);

// Main Features Component with updated compact layout and animations
function Features() {
  return (
    <section className="w-full bg-gradient-to-r from-[#f1f5f9] to-[#e2e8f0] py-12 px-6 animate-fadeIn">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading with fade-in and slide-up animation */}
        <div className="text-center mb-8 animate-fadeInUp">
          <h1 className="text-4xl font-extrabold text-[#000080] leading-tight tracking-wide">
            Awesome Features
          </h1>
          <p className="text-lg text-gray-600 mt-3 max-w-xl mx-auto">
            Explore features that make learning more effective, engaging, and transformative.
          </p>
        </div>

        {/* Features Grid with fade-in animation for each card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {features.map((feature, index) => (
            <div className="animate-fadeInUp" key={index}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
