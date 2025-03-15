import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Hero1 from "./assets/hero1.jpg";
import Hero2 from "./assets/hero2.jpg";
import Hero3 from "./assets/hero3.jpg";
import Hero4 from "./assets/hero4.jpg";
import Hero5 from "./assets/hero5.jpg";

function Slides() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const slides = [
    {
      image: Hero1,
      title: "Transform Your Future with Job-Oriented IT Training",
      descriptions: [
        "Learn In-Demand Tech Skills & Get Industry-Ready!",
        "Enroll Today & Take the First Step Toward a Successful Career!",
      ],
      btn1: { text: "Enroll Now", link: "#contact" },
      btn2: { text: "Explore Courses", link: "#courses" },
    },
    {
      image: Hero2,
      title: "Master Programming & Software Skills",
      descriptions: [
        "Learn Basic to Advanced Computer, Python, Java, Web Development & More!",
        "Start Your Journey to Becoming a Tech Expert!",
      ],
      btn1: { text: "Enroll Now", link: "#contact" },
      btn2: { text: "Explore Courses", link: "#courses" },
    },
    {
      image: Hero3,
      title: "Practical Learning with Expert-Led Courses",
      descriptions: ["Take the next step in your career with us.",
        "Gain Real-World Experience & Excel in Your Career",
      ],
      btn1: { text: "Enroll Now", link: "#contact" },
      btn2: { text: "Explore Courses", link: "#courses" },
    },
    {
      image: Hero4,
      title: "Build Your Career with Professional IT Training",
      descriptions: ["Explore a wide range of educational content.",
        "Future-Proof Your Skills in a Tech-Driven World",
      ],
      btn1: { text: "Enroll Now", link: "#contact" },
      btn2: { text: "Explore Courses", link: "#courses" },
    },
    {
      image: Hero5,
      title: "Upskill & Open New Career Opportunities",
      descriptions: ["Education that fits your life and schedule.",
        " Future-proof your career with tech-driven training and globally recognized certifications.",
      ],
      btn1: { text: "Enroll Now", link: "#contact" },
      btn2: { text: "Explore Courses", link: "#courses" },
    },
  ];

  return (
    <div className="max-w-[1150px] w-full mx-auto pt-[80px] px-4">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[300px] md:h-[500px]">
            {/* Background Image */}
            <img
              src={slide.image}
              className="w-full h-full object-cover rounded-lg"
              alt="Slide"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4 md:px-10">
              <h2 className="text-lg md:text-4xl font-bold">{slide.title}</h2>
              {slide.descriptions?.map((desc, i) => (
                <p
                  key={i}
                  className={`mt-2 ${
                    i === 0 ? "font-bold text-2xl md:text-2xl" : "italic"
                  } text-sm md:text-lg`}
                >
                  {desc}
                </p>
              ))}
              <div className="mt-4 space-x-2 md:space-x-4 flex flex-wrap justify-center">
                <a
                  href={slide.btn1.link}
                  className="bg-blue-500 text-white px-4 py-2 text-sm md:text-base rounded-lg hover:bg-blue-600 transition"
                >
                  {slide.btn1.text}
                </a>
                <a
                  href={slide.btn2.link}
                  className="bg-gray-200 text-gray-900 px-4 py-2 text-sm md:text-base rounded-lg hover:bg-gray-300 transition"
                >
                  {slide.btn2.text}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slides;
