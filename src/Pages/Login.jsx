import React, { useState, useEffect } from "react";
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";

const ADMIN_CREDENTIALS = {
  email: "admin@example.com",
  password: "admin123",
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    const storedAdmin = localStorage.getItem("isAdmin") === "true";

    if (storedUser) {
      setIsLoggedIn(true);
      setUserEmail(storedUser);
      setIsAdmin(storedAdmin);
    }
  }, []);

  // Validate Form
  const validateForm = () => {
    let newErrors = {};
    if (!isLogin && !formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required!";
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Only alphabets are allowed!";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format!";
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters!";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Login/Signup
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const isAdminLogin =
      formData.email === ADMIN_CREDENTIALS.email &&
      formData.password === ADMIN_CREDENTIALS.password;

    if (isLogin) {
      if (isAdminLogin) {
        localStorage.setItem("isAdmin", "true");
        setIsAdmin(true);
        alert("Admin Logged in Successfully!");
      } else {
        alert("Invalid Email or Password!");
        return;
      }
    } else {
      alert("Signed up successfully!");
    }

    localStorage.setItem("loggedInUser", formData.email);
    setIsLoggedIn(true);
    setUserEmail(formData.email);
    setFormData({ fullName: "", email: "", password: "" });
    setErrors({});
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUserEmail("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl transform transition-all duration-500 hover:scale-105">
        {isLoggedIn ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Welcome {isAdmin ? "Admin" : "User"}!
            </h2>
            <div className="mb-6 flex flex-col items-center">
              <FaUser className="text-6xl text-gray-600 mb-2" />
              <p className="text-lg text-gray-700 font-semibold">{userEmail}</p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              {isLogin ? "Login" : "Sign Up"}
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="relative">
                  <FaUser className="absolute top-3 left-3 text-gray-500" />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    maxLength="30"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>
              )}
              <div className="relative">
                <FaEnvelope className="absolute top-3 left-3 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="relative">
                <FaLock className="absolute top-3 left-3 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
            <p className="mt-4 text-center text-gray-700">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-600 font-bold hover:underline"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
