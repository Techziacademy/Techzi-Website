import React from "react";
import { useNavigate } from "react-router-dom";

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
      <article className="bg-white rounded-2xl shadow-lg p-4 text-center transition-transform duration-300 hover:shadow-xl flex flex-col h-[200px] cursor-default">
      <img
        src={image}
        alt={title}
        className="w-full h-[120px] object-cover rounded-lg"
        loading="lazy"
        onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/300')}
      />
      <p
        className="text-sm font-semibold text-gray-800 flex-grow p-2 line-clamp-1 cursor-pointer hover:text-blue-600"
        onClick={handleCourseClick}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && handleCourseClick()}
      >
        {title}
      </p>
    </article>
    
    );
  };

  return (
    <div className="px-10">
      {/* Header */}
      <div className="text-center" id="courses">
        <h1 className="text-5xl py-8 font-bold text-blue-800">
          Our Popular Courses
        </h1>
        <p className="text-xl pb-5 text-gray-600">
          Learn from the best with our top-rated courses.
        </p>
      </div>

      {/* Diploma Courses Section */}
      <div className="ml-10 mt-6">
        <p className="text-2xl font-bold text-gray-700 border-b-2 border-gray-300 inline-block pb-2">
          Diploma Courses (12 Months)
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {diplomaCourses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>

      {/* Certificate Courses Section */}
      <div className="ml-10 mt-6">
        <p className="text-2xl font-bold text-gray-700 border-b-2 border-gray-300 inline-block pb-2">
          Certificate Courses (3 or 6 Months)
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {certificateCourses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>

      {/* Short-Term Courses Section */}
      <div className="ml-10 mt-6">
        <p className="text-2xl font-bold text-gray-700 border-b-2 border-gray-300 inline-block pb-2">
          Short-Term Courses (1-6 Months)
        </p>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {shortTermCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
