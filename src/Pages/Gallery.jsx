import React, { useState, useEffect } from "react";

const initialMedia = [
  {
    id: 1,
    url: "https://via.placeholder.com/200",
    type: "image",
    timestamp: 1670000000000,
  },
  {
    id: 2,
    url: "https://sample-videos.com/video123/mp4/480/asdasdas.mp4",
    type: "video",
    timestamp: 1670500000000,
  },
];

function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [gallery, setGallery] = useState([]);

  // Check if user is logged in as an admin
  const isAdminLoggedIn =
    localStorage.getItem("isAdmin") === "true" &&
    localStorage.getItem("userToken");

  // Load gallery from localStorage
  useEffect(() => {
    const savedGallery = JSON.parse(localStorage.getItem("gallery")) || [];
    setGallery([...new Map([...initialMedia, ...savedGallery].map(item => [item.id, item])).values()].slice(0, 30));
  }, []);

  // Save gallery to localStorage
  useEffect(() => {
    if (gallery.length > initialMedia.length) {
      localStorage.setItem("gallery", JSON.stringify(gallery));
    }
  }, [gallery]);

  const handleFileUpload = (event) => {
    if (!isAdminLoggedIn) {
      alert("You must be logged in as an admin to upload media!");
      return;
    }

    const selectedFiles = event.target.files;
    const newFiles = Array.from(selectedFiles).map((file, index) => {
      const objectURL = URL.createObjectURL(file);

      return {
        id: Date.now() + index,
        url: objectURL,
        type: file.type.startsWith("video") ? "video" : "image",
        timestamp: Date.now(),
      };
    });

    setGallery((prevGallery) => {
      const updatedGallery = [...newFiles, ...prevGallery].slice(0, 30);
      localStorage.setItem("gallery", JSON.stringify(updatedGallery));
      return updatedGallery;
    });

    // Cleanup object URLs
    return () => {
      newFiles.forEach((file) => URL.revokeObjectURL(file.url));
    };
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    setGallery((prevGallery) => {
      const updatedGallery = prevGallery.filter((item) => item.id !== id);
      localStorage.setItem("gallery", JSON.stringify(updatedGallery));
      return updatedGallery;
    });
  };

  const sortedGallery = [...gallery].sort((a, b) => b.timestamp - a.timestamp);

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Gallery</h2>

        {sortedGallery.length === 0 ? (
          <p className="text-lg text-gray-500">No media available.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center">
            {sortedGallery
              .slice(0, showAll ? sortedGallery.length : 6)
              .map((item) => (
                <div
                  key={item.id}
                  className="relative overflow-hidden rounded-lg shadow-md"
                >
                  {item.type === "image" ? (
                    <img
                      src={item.url}
                      alt="Gallery Item"
                      className="w-[200px] h-[200px] object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <video
                      src={item.url}
                      controls
                      className="w-[200px] h-[200px] object-cover hover:scale-105 transition-transform duration-300"
                    />
                  )}

                  {isAdminLoggedIn && (
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm rounded-full hover:bg-red-700"
                    >
                      ✖
                    </button>
                  )}
                </div>
              ))}
          </div>
        )}

        <div className="mt-6">
          {sortedGallery.length > 6 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className={`px-6 py-2 text-white font-semibold rounded-md transition duration-300 ${
                showAll ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {showAll ? "Show Less" : "More Media"}
            </button>
          )}
        </div>

        {/* Admin upload section */}
        {isAdminLoggedIn && (
          <div className="mt-8">
            <h3 className="text-lg font-bold text-green-600">
              Admin Access Granted
            </h3>
            <div className="mt-4">
              <label className="block mb-2 text-lg font-medium text-gray-700">
                Upload Images/Videos (Max: 30)
              </label>
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handleFileUpload}
                className="border p-2 rounded-md"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
