import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./assets/Logo.jpeg";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const allSections = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "Courses", path: "#courses" },
      { name: "About", path: "#about" },
      { name: "Contact", path: "#contact" },
      { name: "Blog", path: "#blog" },
      { name: "Gallery", path: "/gallery" },
    ],
    []
  );

  const restrictedSections = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "Gallery", path: "/gallery" },
    ],
    []
  );

  const isRestrictedPage =
    ["/login", "/gallery"].includes(location.pathname) ||
    location.pathname.includes("/coursedetail/");

  const sections = isRestrictedPage ? restrictedSections : allSections;

  const handleNav = () => setNav((prev) => !prev);

  const handleScrollOrNavigate = (e, path) => {
    e.preventDefault();
    setNav(false);

    if (path.startsWith("#")) {
      const section = document.querySelector(path);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: "smooth",
        });
        setActiveLink(path);
      }
    } else {
      if (path === "/") {
        if (location.pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          navigate("/");
          setActiveLink(path);
          setTimeout(
            () => window.scrollTo({ top: 0, behavior: "smooth" }),
            100
          );
        }
      } else {
        navigate(path);
        setActiveLink(path);
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      }
    }
  };

  useEffect(() => {
    document.documentElement.style.overflow = nav ? "hidden" : "auto";

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    if (nav) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [nav]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of allSections) {
        if (section.path.startsWith("#")) {
          const el = document.querySelector(section.path);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveLink(section.path);
          }
        }
      }
    };

    if (!isRestrictedPage) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isRestrictedPage, allSections]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Contact Info and Marquee */}
      <div className="w-full flex flex-col sm:flex-row mt-1">
        <div className="bg-red-600 text-white font-semibold text-sm sm:text-base px-4 flex items-center justify-center sm:justify-start">
          <div className="flex items-center gap-3 whitespace-nowrap text-xs sm:text-sm md:text-base">
            <a
              href="tel:+919599955697"
              className="flex items-center gap-1 hover:text-[#000080] transition-colors duration-200"
              aria-label="Call Techzi Academy at +91 95999 55697"
            >
              <i
                className="fa-solid fa-phone text-xs sm:text-sm md:text-base"
                aria-hidden="true"
              ></i>
              <span className="truncate max-w-[120px] sm:max-w-none">
                +91-9599955697
              </span>
            </a>

            <span className="hidden sm:inline">|</span>

            <a
              href="mailto:techziacademy@gmail.com"
              className="flex items-center gap-1 hover:text-[#000080] transition-colors duration-200"
              aria-label="Email Techzi Academy at techziacademy@gmail.com"
            >
              <i
                className="fa-solid fa-envelope text-xs sm:text-sm md:text-base"
                aria-hidden="true"
              ></i>
              <span className="truncate max-w-[140px] sm:max-w-none">
                techziacademy@gmail.com
              </span>
            </a>
          </div>
        </div>
        <div className="flex-1 bg-[#000080] overflow-hidden relative h-[33px]">
          <div className="w-max flex py-2 animate-marquee text-white text-sm space-x-6">
            {Array(2).fill(
              <>
                <span>
                  📜 ISO 9001:2015 Certified – Accredited by IAF & EGAC
                </span>
                <span>📜 Government Registered – MSME & NCS (India)</span>
                <span>
                  📜 Globally Valid Certification – Recognized Courses
                </span>
                <span>
                  📜 Industry Expert Faculty – Learn from Professionals
                </span>
                <span>📜 Job-Focused Courses – Real-world Skills</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="max-w-[1220px] mx-auto flex items-center justify-between h-[60px] px-4">
        <button onClick={handleNav} className="lg:hidden p-2" aria-label="Menu">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>

        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center"
        >
          <img
            src={Logo}
            alt="Techzi Logo"
            className="h-12 w-[100px] object-contain"
          />
        </Link>

        <ul className="hidden lg:flex items-center space-x-4">
          {sections.map(({ name, path }) => (
            <li key={name}>
              <a
                href={path}
                onClick={(e) => handleScrollOrNavigate(e, path)}
                className={`px-4 py-2 rounded-lg transition font-medium ${
                  (path === "/" &&
                    activeLink === "/" &&
                    location.pathname === "/") ||
                  (path !== "/" && activeLink === path)
                    ? "bg-[#07c4f4] text-white font-bold"
                    : "text-gray-800 hover:bg-[#07c4f4] hover:text-white"
                }`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div
          ref={menuRef}
          className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col items-center py-10"
        >
          <button
            onClick={handleNav}
            className="absolute top-4 right-4 text-2xl"
            aria-label="Close menu"
          >
            ✖
          </button>
          <ul className="flex flex-col items-center space-y-6 mt-10">
            {sections.map(({ name, path }) => (
              <li key={name}>
                <a
                  href={path}
                  onClick={(e) => handleScrollOrNavigate(e, path)}
                  className={`text-lg font-medium ${
                    (path === "/" &&
                      activeLink === "/" &&
                      location.pathname === "/") ||
                    (path !== "/" && activeLink === path)
                      ? "text-blue-700 font-bold"
                      : "text-gray-800"
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
