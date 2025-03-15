import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./assets/Logo.jpeg";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Define full menu sections
  const allSections = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "About", path: "#about" },
      { name: "Contact", path: "#contact" },
      { name: "Blog", path: "#blog" },
      { name: "Courses", path: "#courses" },
      { name: "Gallery", path: "/gallery" },
      { name: "Login", path: "/login" },
    ],
    []
  );

  // Define sections for restricted pages (Login, Gallery, Course Detail)
  const restrictedSections = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "Gallery", path: "/gallery" },
      { name: "Login", path: "/login" },
    ],
    []
  );

  // Determine which menu to show
  const isRestrictedPage =
    ["/login", "/gallery"].includes(location.pathname) || location.pathname.includes("/coursedetail/");
  const sections = isRestrictedPage ? restrictedSections : allSections;

  const handleNav = () => setNav((prev) => !prev);

  // Handle navigation and scrolling
  const handleScrollOrNavigate = (e, path) => {
    e.preventDefault();
    setNav(false);

    if (path.startsWith("#")) {
      const section = document.querySelector(path);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveLink(path);
      }
    } else {
      navigate(path);
      setActiveLink(path);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  };

  useEffect(() => {
    document.documentElement.style.overflow = nav ? "hidden" : "auto";

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setNav(false);
    };

    if (nav) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [nav]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[60px] px-6 py-4">
        {/* Mobile Menu Button */}
        <button onClick={handleNav} className="lg:hidden p-2" aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Techzi Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {sections.map(({ name, path }) => (
              <li key={name}>
                <a
                  href={path}
                  onClick={(e) => handleScrollOrNavigate(e, path)}
                  className={`transition duration-300 font-medium ${
                    activeLink === path ? "font-bold text-blue-700" : "text-gray-800 hover:text-blue-900"
                  }`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div ref={menuRef} className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col items-center py-10">
          <button onClick={handleNav} className="absolute top-4 right-4 text-2xl" aria-label="Close menu">
            ✖
          </button>
          <ul className="flex flex-col items-center space-y-6 mt-10">
            {sections.map(({ name, path }) => (
              <li key={name}>
                <a
                  href={path}
                  onClick={(e) => handleScrollOrNavigate(e, path)}
                  className={`text-lg font-medium transition duration-300 ${
                    activeLink === path ? "font-bold text-blue-700" : "text-gray-800 hover:text-blue-900"
                  }`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
