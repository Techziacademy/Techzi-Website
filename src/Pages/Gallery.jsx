import React, { useState, useEffect } from "react";
import Ig1 from "../assets/Ig1.jpg";
import Ig2 from "../assets/Ig2.jpg";
import Ig3 from "../assets/IG3.jpg";
import Ig4 from "../assets/Ig4.jpg";
import Ig5 from "../assets/Ig5.jpg";
import Ig6 from "../assets/Ig6.jpg";
import Ig7 from "../assets/Ig7.jpg";
import Ig8 from "../assets/Ig8.jpg";
import Ig9 from "../assets/Ig9.jpg";
import Ig10 from "../assets/Ig10.jpg";
import Ig11 from "../assets/Ig11.jpg";
import Ig12 from "../assets/Ig12.jpg";
import Ig13 from "../assets/Ig13.jpg";
import Ig14 from "../assets/Ig14.jpg";

const initialMedia = [
  { id: 1, src: Ig1, alt: "Image 1" },
  { id: 2, src: Ig2, alt: "Image 2" },
  { id: 3, src: Ig3, alt: "Image 3" },
  { id: 4, src: Ig4, alt: "Image 4" },
  { id: 5, src: Ig5, alt: "Image 5" },
  { id: 6, src: Ig6, alt: "Image 6" },
  { id: 7, src: Ig7, alt: "Image 7" },
  { id: 8, src: Ig8, alt: "Image 8" },
  { id: 9, src: Ig9, alt: "Image 9" },
  { id: 10, src: Ig10, alt: "Image 10" },
  { id: 11, src: Ig11, alt: "Image 11" },
  { id: 12, src: Ig12, alt: "Image 12" },
  { id: 13, src: Ig13, alt: "Image 13" },
  { id: 14, src: Ig14, alt: "Image 14" },
];

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setGallery(initialMedia);
  }, []);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-10">
      <div className="max-w-6xl mx-auto px-4 text-center mt-[80px]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Gallery
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4 justify-center">
          {gallery.map((item, index) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-md group"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox (Full-screen Image Viewer) */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-full text-xl font-semibold shadow-xl hover:bg-red-600 active:bg-red-700 transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-red-300 flex items-center gap-2"
            onClick={handleCloseLightbox}
            aria-label="Close lightbox"
          >
            <i className="fa-solid fa-square-xmark"></i>
            Close
          </button>

          <button
            className="absolute left-4 text-white text-3xl px-4 py-2 rounded-md hover:bg-black/50 transition"
            onClick={handlePrev}
          >
            ◀️
          </button>

          <img
            src={gallery[selectedIndex].src}
            alt={gallery[selectedIndex].alt}
            className="max-w-[90%] max-h-[80vh] rounded-lg shadow-lg transition-all ease-in-out"
          />

          <button
            className="absolute right-4 text-white text-3xl px-4 py-2 rounded-md hover:bg-black/50 transition"
            onClick={handleNext}
          >
            ▶️
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;
