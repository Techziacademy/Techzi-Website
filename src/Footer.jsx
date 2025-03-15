import React from "react";
import Logo from "./assets/Logo.jpeg";

function Footer() {
  return (
    <footer className="text-black py-8">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        
        {/* Logo & Name */}
        <a href="/">
          <img src={Logo} alt="Techzi Logo" className="h-16 w-auto object-contain mb-2"/>
        </a>
        <p className="font-bold text-white">Techzi Academy</p>
        <p className="text-sm text-gray-600">
          Copyright © {new Date().getFullYear()} - All rights reserved.
        </p>

        {/* Social Media Links */}
        <nav className="flex space-x-6 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-700"
          >
            <i className="fa-brands fa-facebook fa-2xl text-blue-700"></i>
          </a>
          <a
            href="https://www.instagram.com/techziacademy?igsh=NmN6c2M2eDZ4NHY5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-600"
          >
            <i className="fa-brands fa-instagram fa-2xl text-pink-600"></i>
          </a>
          <a
            href="https://youtube.com/@techziacademy-v2f7o?si=XJtZTd1i8CCKm1zX"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-600"
          >
            <i className="fa-brands fa-youtube fa-2xl text-red-600"></i>
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
