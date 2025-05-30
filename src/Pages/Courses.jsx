import React from "react";
// import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Adca from "../assets/ADCA.jpg";
import Dafab from "../assets/DAFAB.png";
import Dca from "../assets/DCA.jpg";
import Dit from "../assets/DIT.jpg";
import Dwd from "../assets/DWD.jpg";
import Dom from "../assets/DOM.jpg";
import Dacs from "../assets/DACS.jpg";
import Olevel from "../assets/OLEVEL.jpg";
import Data from "../assets/DATA.jpg";
import Da from "../assets/DA.jpg";
import Ctt from "../assets/CTT.jpg";
import Cca from "../assets/CCA.jpg";
import Cfa from "../assets/CFA.jpg";
import Om from "../assets/OM.jpg";
import Eaccounting from "../assets/Accounting.jpg";
import Cwd from "../assets/CWD.jpg";
import Cacs from "../assets/CACS.jpg";
import Cdp from "../assets/CDP.png";
import Ect from "../assets/ECT.jpg";
import Cco from "../assets/CCO.jpg";
import Ccc from "../assets/CCC.jpg";
import Mis from "../assets/MIS.jpg";
import Se from "../assets/SE.jpg";
import St1 from "../assets/ST1.jpg";
import St2 from "../assets/ST2.jpg";
import St3 from "../assets/ST3.png";
import St4 from "../assets/ST4.jpg";
import St5 from "../assets/ST5.jpg";
import St6 from "../assets/ST6.png";
import St7 from "../assets/ST7.png";
import St8 from "../assets/ST8.png";
import St9 from "../assets/ST9.png";
import St10 from "../assets/ST10.png";
import St11 from "../assets/ST11.png";
import St12 from "../assets/ST12.png";
import St13 from "../assets/ST13.png";
import St14 from "../assets/ST14.png";
import St15 from "../assets/ST15.jpg";
import St16 from "../assets/ST16.png";
import St17 from "../assets/ST17.jpg";
import St18 from "../assets/ST18.png";
import St19 from "../assets/ST19.png";
import St20 from "../assets/ST20.jpg";
import St21 from "../assets/ST21.jpg";
import St22 from "../assets/ST22.png";
import St23 from "../assets/ST23.jpg";
import St24 from "../assets/ST24.jpg";
import St25 from "../assets/ST25.png";
import St26 from "../assets/ST26.png";
import St27 from "../assets/ST27.png";
import St28 from "../assets/ST28.jpg";
import St29 from "../assets/ST29.jpg";
import St30 from "../assets/ST30.png";

// Courses Component
function Courses() {
  const diplomaCourses = [
    {
      id: "1",
      title: "ADCA - Adv. Diploma in Computer Application (ADCA)",
      image: Adca,
    },
    {
      id: "2",
      title: "DAFAB - Diploma in Adv. Financial Accounting & Banking",
      image: Dafab,
    },
    { id: "3", title: "DIT - Diploma in Information Technolgy", image: Dit },
    { id: "4", title: "DCA - Diploma in Computer Applications", image: Dca },
    { id: "5", title: "DWD - Diploma in Web Designing", image: Dwd },
    { id: "6", title: "DOM - Diploma in Office Management", image: Dom },
    {
      id: "7",
      title: "DACS - Diploma in Advanced Computer Software",
      image: Dacs,
    },
    {
      id: "8",
      title: "O Level - DOEACC 'O' Level Certification",
      image: Olevel,
    },
    { id: "9", title: "Data Science - Professional Course", image: Data },
    { id: "10", title: "Data Analysis - Professional Course", image: Da },
    { id: "11", title: "CTT - Computer Teacher Training", image: Ctt },
    { id: "12", title: "Coming-Soon", image: Cca },
  ];

  const certificateCourses = [
    {
      id: "13",
      title: "CFA - Certificate in Financial Accounting",
      image: Cco,
    },
    { id: "14", title: "OM - Office Management", image: Om },
    { id: "15", title: "(e-A/C) - E-Accounting", image: Eaccounting },
    { id: "16", title: "CWD - Certificate in Web Desinging", image: Cwd },
    {
      id: "17",
      title: "CACS - Certificate in Adv. Computer Software",
      image: Cacs,
    },
    { id: "18", title: "CDP - Certificate in Desktop Publishing", image: Cdp },
    { id: "19", title: "ECT - English Computer Typing", image: Ect },
    { id: "20", title: "CCO - Certificate in Computer Operation", image: Cco },
    { id: "21", title: "CCC - Course in Computer Conncept", image: Ccc },
    { id: "22", title: "MIS - Managemnet Information System", image: Mis },
    { id: "23", title: "SE - Spoken  English", image: Se },
    { id: "24", title: "Coming Soon", image: Cca },
  ];

  const shortTermCourses = [
    { id: 25, title: "Microsoft Office", image: St1 },
    { id: 26, title: "Ms-Word", image: St2 },
    { id: 27, title: "Ms-Excel", image: St3 },
    { id: 28, title: "Advance Excel", image: St4 },
    { id: 29, title: "Ms-PowerPoint", image: St5 },
    { id: 30, title: "Ms-Access", image: St6 },
    { id: 31, title: "Corel-Draw", image: St7 },
    { id: 32, title: "Photoshop", image: St8 },
    { id: 33, title: "Tally", image: St9 },
    { id: 34, title: "Professional Tally", image: St10 },
    { id: 35, title: "Busy", image: St11 },
    { id: 36, title: "C", image: St12 },
    { id: 37, title: "C++", image: St13 },
    { id: 38, title: "Core Java", image: St14 },
    { id: 39, title: "Java Script", image: St24 },
    { id: 40, title: "Visual Basic", image: St15 },
    { id: 41, title: "Oracle (SQL)", image: St16 },
    { id: 42, title: "Dot Net", image: St17 },
    { id: 43, title: "JQuery", image: St18 },
    { id: 44, title: "React Js", image: St19 },
    { id: 45, title: "Angular", image: St20 },
    { id: 46, title: "MVC", image: St21 },
    { id: 47, title: "HTML", image: St22 },
    { id: 48, title: "CSS", image: St23 },
    { id: 49, title: "Python", image: St25 },
    { id: 50, title: "Pandas", image: St26 },
    { id: 51, title: "Numpy", image: St27 },
    { id: 52, title: "Matplotlib", image: St28 },
    { id: 53, title: "Powerbi", image: St29 },
    { id: 54, title: "R Programming", image: St30 },
  ];

  const CourseCard = ({ id, title, image }) => {
    const navigate = useNavigate();

    const handleCourseClick = () => {
      navigate(`/coursedetail/${id}`);
    };

    return (
      <article
        className="
    bg-white rounded-2xl shadow-lg p-4 text-center
    transition-transform duration-300 hover:shadow-xl
    flex flex-col
    h-auto min-h-[300px] sm:min-h-[320px] cursor-pointer
  "
      >
        <img
          src={image}
          alt={title}
          className="w-full h-40 sm:h-44 md:h-48 lg:h-52 object-contain rounded-xl bg-white"
          loading="lazy"
          onError={(e) =>
            (e.currentTarget.src = "https://via.placeholder.com/300")
          }
        />
        <p
          className="text-sm font-semibold text-gray-800 flex-grow p-2 line-clamp-3 sm:line-clamp-2 cursor-pointer hover:text-blue-600"
          onClick={handleCourseClick}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === "Enter" && handleCourseClick()}
        >
          {title}
        </p>
      </article>
    );
  };

  return (
    <>
      {/* <Helmet>
        <title>Popular Courses | Techzi Academy</title>
        <meta
          name="description"
          content="Explore the most popular computer, programming, and IT courses at Techzi Academy. Find diploma, certificate, and short-term courses in Delhi to boost your career."
        />
        <meta
          name="keywords"
          content="Techzi Academy Courses, Computer Courses Delhi, Programming Courses, Diploma Courses, Certificate Courses, Short Term IT Courses"
        />
        <meta property="og:title" content="Popular Courses | Techzi Academy" />
        <meta property="og:description" content="Explore the most popular computer, programming, and IT courses at Techzi Academy in Delhi." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techziacademy.in/#courses" />
        <meta property="og:image" content="https://techziacademy.in/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Popular Courses | Techzi Academy" />
        <meta name="twitter:description" content="Explore the most popular computer, programming, and IT courses at Techzi Academy in Delhi." />
        <meta name="twitter:image" content="https://techziacademy.in/logo.png" />
      </Helmet> */}

      <div className="bg-gray-50">
        {/* Header */}
        <div className="text-center max-w-6xl mx-auto px-4" id="courses">
          <h1 className="text-3xl sm:text-4xl md:text-5xl pb-6 pt-16 font-bold text-blue-800">
            Popular Courses
          </h1>
          <p className="text-base sm:text-lg md:text-xl pb-2 text-gray-600">
            Learn from the best with our top-rated courses.
          </p>
        </div>

        {/* Diploma and Certificate Courses stacked vertically on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-16 lg:flex-row"
        >
          {/* Left: Diploma Courses */}
          <div className="w-full border-l-4 border-[#000080] bg-gradient-to-br from-[#e0f7ff] to-white p-6 rounded-2xl">
            <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-[#000080] to-[#07c4f4] bg-clip-text text-transparent tracking-tight text-center lg:text-left">
              Diploma Courses (12 Months)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {diplomaCourses.map((course, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/60 backdrop-blur-lg p-5 rounded-2xl shadow-xl transition-all border-2 animate-borderPulse"
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Certificate Courses */}
          <div className="w-full border-r-4 border-[#e21d34] bg-gradient-to-br from-[#ffecec] to-white p-6 rounded-2xl">
            <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-[#000080] to-[#e21d34] bg-clip-text text-transparent tracking-tight text-center lg:text-left">
              Certificate Courses (3 or 6 Months)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certificateCourses.map((course, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/60 backdrop-blur-lg p-5 rounded-2xl shadow-xl transition-all border border-[#000080] hover:border-[#e21d34]"
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Short-Term Courses */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-gradient-to-r from-[#000080] to-[#07c4f4] bg-clip-text border-b-4 border-[#e21d34] inline-block pb-2 tracking-wide mb-6">
            Short-Term Courses (1–6 Months)
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
            {shortTermCourses.map((course, index) => (
              <div
                key={index}
                className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-[#000080] rounded-2xl p-2 hover:border-[#07c4f4] bg-white"
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>        
  );
}

export default Courses;
