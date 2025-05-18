import { useRef, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Scrol from "./Pages/Scrol"; // Adjust path as needed
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactSection from "./Pages/Contact"; // Renamed for clarity
import Blog from "./Pages/Blog";
import Footer from "./Footer";
import Main from "./Pages/Main";
import Courses from "./Pages/Courses";
import Gallery from "./Pages/Gallery";
import CourseDetail from "./Pages/CourseDetail";
import Certificate from "./Pages/Certificate";

function App() {
  const location = useLocation();
  const navigate = useNavigate(); // Used for programmatic navigation

  // 🔒 Hide extra sections on these routes:
  const isSpecialPage =
    location.pathname === "/login" ||
    location.pathname === "/gallery" ||
    location.pathname.startsWith("/coursedetail");

  // 🌐 Contact Form State & Submission Logic
  const formRef = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = {
      FullName: formData.get("FullName"),
      Phone: formData.get("Phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Basic Validation
    if (!data.FullName || !data.Phone || !data.email || !data.message) {
      setSuccessMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzCPpxSrleKdRsKjW-VZMoMSpMil0swtS3araz9Nra2xONMkPP7zxPUyOXh8PFZEA_j/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log("Success:", result);
      setSuccessMessage("Form submitted successfully!");
      formRef.current.reset();

      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMessage("Failed to submit. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <Scrol /> {/* 👈 Important */}

      <Routes>
        {/* Gallery Page: Direct access to Gallery, but users can click to go home */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Course Detail Page */}
        <Route path="/coursedetail/:id" element={<CourseDetail />} />

        {/* Other Routes */}
        {/* Add more routes for login, about, etc. */}
      </Routes>

      {/* Conditionally render the sections */}
      {!isSpecialPage && (
        <>
          <Home />
          <Courses />
          <Main />
          {/* <Certificate /> */}
          <About />
          <ContactSection
            formRef={formRef}
            handleSubmit={handleSubmit}
            successMessage={successMessage}
          />
          <Blog />
        </>
      )}

      <Footer />
    </>
  );
}

export default App;
