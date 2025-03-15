import React from "react";

import Slides from "../Slides";

const features = [
  {
    icon: "fa-graduation-cap",
    title: "Scholarship Facility",
    description:
      "One make creepeth, man bearing their firmament won't great heaven.",
  },
  {
    icon: "fa-earth-americas",
    title: "Online Course",
    description:
      "One make creepeth, man bearing their firmament won't great heaven.",
  },
  {
    icon: "fa-user-graduate",
    title: "Global Certification",
    description:
      "One make creepeth, man bearing their firmament won't great heaven.",
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="card bg-blue-200 w-80 md:w-96 mx-auto text-center p-6 rounded-lg shadow-md">
    <i className={`fa-solid ${icon} fa-3x py-4`}></i>
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);

const CourseCard = ({ img, title, }) => (
  <div className="card bg-base-100 w-80 md:w-96 shadow-sm mx-5 rounded-lg overflow-hidden">
    <figure>
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
    </figure>
    <div className="p-4 text-center">
      <h2 className="text-lg font-bold">{title}</h2>
    </div>
  </div>
);

function Home() {
  return (
    <div className="max-w-full" id="home">
      {/* Hero Section */}
      <div>
        <Slides />
        
      </div>
    </div>
  );
}

export default Home;
