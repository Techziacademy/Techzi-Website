import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Footer from "./Footer";
import Main from "./Pages/Main";
import Review from "./Pages/Review";
import Courses from "./Pages/Courses";
import Gallery from "./Pages/Gallery";
import Login from "./Pages/Login";
import CourseDetail from "./Pages/CourseDetail";

function App() {
  const location = useLocation(); // Get the current route

  // Hide extra sections on specific pages
  const isSpecialPage =
    location.pathname === "/login" ||
    location.pathname === "/gallery" ||
    location.pathname.startsWith("/coursedetail"); // ✅ Matches "/coursedetail/:id"

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/coursedetail/:id" element={<CourseDetail />} /> {/* ✅ FIXED */}
      </Routes>

      {!isSpecialPage && ( // ✅ Hide extra sections correctly
        <>
          <Home />
          <Main />
          <Courses />
          <About />
          <Contact />
          <Review />
          <Blog />
        </>
      )}

      <Footer />
    </>
  );
}

export default App;
