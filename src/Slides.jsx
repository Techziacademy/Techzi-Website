import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Hero1 from "./assets/hero1.jpg";
import Hero2 from "./assets/hero2.jpg";
import Hero3 from "./assets/hero3.jpg";

function Slides() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    appendDots: (dots) => (
      <div className="mt-4">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-blue-500 transition-all duration-300" />
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, dots: true } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const slides = [
    {
      image: Hero1,
      btn1: {
        text: "Join Now",
        link: "#contact",
        bgColor: "bg-blue-600 hover:bg-blue-700",
      },
      btn2: {
        text: "Explore Courses",
        link: "#courses",
        bgColor: "bg-pink-600 hover:bg-pink-700",
      },
    },
    {
      image: Hero2,
      btn1: {
        text: "Join Now",
        link: "#contact",
        bgColor: "bg-blue-600 hover:bg-blue-700",
      },
      btn2: {
        text: "Explore Courses",
        link: "#courses",
        bgColor: "bg-pink-600 hover:bg-pink-700",
      },
    },
    {
      image: Hero3,
      btn1: {
        text: "Join Now",
        link: "#contact",
        bgColor: "bg-blue-600 hover:bg-blue-700",
      },
      btn2: {
        text: "Explore Courses",
        link: "#courses",
        bgColor: "bg-pink-600 hover:bg-pink-700",
      },
    },
  ];

  return (
    <div className="w-full mx-auto pt-[100px] sm:pt-[100px] relative font-sans">
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full flex flex-col justify-center items-center"
          >
            {/* Image container with aspect ratio and overflow-hidden */}
            <div
              className="
    w-full overflow-hidden rounded-lg
    aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5]
    max-h-[400px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px]
    shadow-md
    pt-10 sm:pt-0
  "
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-contain"
                decoding="async"
                loading="eager"
              />
            </div>

            {/* Buttons outside image container */}
            <div
              className="
    w-full flex justify-center gap-3 sm:gap-5 px-4 mt-3
    z-20
  "
            >
              <a
                href={slide.btn1.link}
                className={`text-white font-semibold text-base px-6 py-3 rounded-md transition-transform duration-300 text-center ${slide.btn1.bgColor} shadow-lg hover:scale-105`}
                style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)" }}
              >
                {slide.btn1.text}
              </a>
              <a
                href={slide.btn2.link}
                className={`text-white font-semibold text-base px-6 py-3 rounded-md transition-transform duration-300 text-center ${slide.btn2.bgColor} shadow-lg hover:scale-105`}
                style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)" }}
              >
                {slide.btn2.text}
              </a>
            </div>
          </div>
        ))}
      </Slider>

      {/* Left Ribbon Button - Call Now */}
      {/* Left Call Now Button */}
      <div className="fixed bottom-8 sm:bottom-4 left-3 sm:left-4 z-50 flex flex-col">
        <a
          href="tel:+919599955697"
          className="
      relative bg-gradient-to-r from-blue-500 to-blue-700
      text-white text-sm sm:text-base font-semibold
      px-4 sm:px-6 py-3 sm:py-4 rounded-r-lg shadow-lg
      flex items-center justify-center space-x-2 sm:space-x-3 overflow-hidden

      transition-transform duration-300 ease-in-out
      hover:scale-110
    "
          style={{
            writingMode: "horizontal-tb",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <span className="text-xl sm:text-2xl z-10">
            <i className="fa-solid fa-phone"></i>
          </span>
          <span className="z-10">Call Now</span>
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
        </a>
      </div>

      {/* Right WhatsApp Button */}
      <div className="fixed bottom-8 sm:bottom-4 right-3 sm:right-4 z-50 flex flex-col">
        <a
          href="https://wa.me/919599955697"
          target="_blank"
          rel="noopener noreferrer"
          className="
      relative bg-gradient-to-r from-green-500 to-green-700
      text-white text-sm sm:text-base font-semibold
      px-4 sm:px-6 py-3 sm:py-4 rounded-l-lg shadow-lg
      flex items-center justify-center space-x-2 sm:space-x-3 overflow-hidden

      transition-transform duration-300 ease-in-out
      hover:scale-110
    "
          style={{
            writingMode: "horizontal-tb",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          <i className="fa-brands fa-whatsapp text-xl sm:text-2xl z-10"></i>
          <span className="z-10">WhatsApp</span>
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-green-500 to-green-700 opacity-0 hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
        </a>
      </div>
    </div>
  );
}

export default Slides;
