import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Navigation

function TuitionReview() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ rating: 0, comment: "" });
  const [filter, setFilter] = useState("current");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate(); // ✅ Navigation hook

  // Load reviews and login state from localStorage
  useEffect(() => {
    try {
      const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
      setReviews(storedReviews);
      const storedUser = localStorage.getItem("loggedInUser");
      if (storedUser) {
        setIsLoggedIn(true);
        setUsername(storedUser);
      }
    } catch (error) {
      console.error("Error loading reviews:", error);
    }
  }, []);

  // Update localStorage when reviews change
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleRating = (rating) => setFormData({ ...formData, rating });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert("You must be logged in to submit a review.");
      return;
    }

    const updatedReviews = [...reviews];
    const existingIndex = updatedReviews.findIndex(
      (r) => r.name.toLowerCase() === username.toLowerCase()
    );

    if (existingIndex !== -1) {
      updatedReviews[existingIndex] = {
        ...updatedReviews[existingIndex],
        rating: formData.rating,
        comment: formData.comment.trim(),
        date: new Date().toLocaleDateString(),
      };
      alert("Review updated!");
    } else {
      updatedReviews.unshift({
        name: username,
        rating: formData.rating,
        comment: formData.comment.trim(),
        date: new Date().toLocaleDateString(),
      });
      alert("Review submitted!");
    }

    setReviews(updatedReviews);
    setFormData({ rating: 0, comment: "" });
  };

  const handleLogin = () => navigate("/login");

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    localStorage.removeItem("loggedInUser");
  };

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : "0";

  const displayedReviews = filter === "current" ? reviews.slice(0, 5) : reviews.slice(5);

  return (
    <div className="min-h-screen flex flex-col items-center px-4">
      <h1 className="text-3xl font-bold mb-6">Reviews</h1>

      {/* Login/Logout */}
      <div className="mb-4">
        {isLoggedIn ? (
          <div>
            <p className="text-lg font-semibold">Welcome Back, {username}!</p>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Login
          </button>
        )}
      </div>

      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 w-full max-w-6xl">
        {/* Overall Rating */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/4 text-center">
          <h2 className="text-2xl font-semibold">Overall Rating</h2>
          <div className="text-yellow-500 text-2xl">
            {"★".repeat(Math.round(averageRating)) +
              "☆".repeat(5 - Math.round(averageRating))}
          </div>
          <p className="text-gray-700 text-6xl p-5">{averageRating}</p>
          <p>({reviews.length} reviews)</p>
        </div>

        {/* Leave a Review (Only for logged-in users) */}
        {isLoggedIn && (
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-2 md:mb-4">Leave a Review</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={username}
                readOnly
                className="w-full px-4 py-2 border rounded-lg bg-gray-100"
              />

              <div className="flex gap-1 justify-center cursor-pointer">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRating(star)}
                    className={`text-2xl transition ${
                      star <= formData.rating ? "text-yellow-500 scale-110" : "text-gray-400"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>

              <textarea
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                placeholder="Write your review..."
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                rows="3"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                {reviews.some((r) => r.name.toLowerCase() === username.toLowerCase())
                  ? "Update Review"
                  : "Submit Review"}
              </button>
            </form>
          </div>
        )}

        {/* Reviews Section (Visible to everyone) */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <div className="flex justify-between items-center mb-2 md:mb-4">
            <h2 className="text-xl font-semibold">Reviews</h2>
            <select
              className="p-1 border rounded-lg text-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="current">Latest</option>
              <option value="old">Old</option>
            </select>
          </div>

          <div className="overflow-y-auto h-72 sm:h-64 space-y-4">
            {reviews.length > 0 ? (
              displayedReviews.map((review, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="text-yellow-500 text-xl">
                    {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                  </div>
                  <p className="text-gray-700 mt-2">{review.comment}</p>
                  <p className="text-gray-500 text-sm mt-1">{review.date}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No reviews found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TuitionReview;
