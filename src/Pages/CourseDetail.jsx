import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const courses = [
  {
    id: "1",
    title: "ADCA - Adv. Diploma in Computer Application (ADCA)",
    description:
      "Semester 1 Fundamentals of Computer, Windows (Paint WordPad), MS-Office (Word - Complete Documentation Work), Ms Excel - (Basic to Advance Spreadsheet), Ms PowerPoint (Presentation Work), Ms Access (Database Application), Corel Draw (Create Logo Banner Card etc.), Photoshop (Photo Editing), Advanced Tally (All types of Vouchers - Payment Receipt Contra Journal Credit Note Debit Note Inventory Management - Purchase Sale, Payroll BOM BRS Interest Calculation Taxation (e.g. Company Transactions) Semester 2 C Language, C++ Language, Web Designing & Development (Frontend), HTML, CSS, JavaScript, Bootstrap, Internet Outlook Email Management Digital Communication, Database Management System (MySQL), Project Work, Real-world Application Development, Final Project Submission & Viva.",
    duration: "12 Months",
  },
  {
    id: "2",
    title: "DAFAB - Diploma in Adv. Financial Accounting & Banking",
    description:
      "Semester 1 Fundamental of Computer Windows, Paint Wordpad, MS-Office, MS- Word (Complete Documentation Work), MS-Excel+AdvanceExcel, MS- Power Point (Presentation Work), MS- Access (Database Application) Semester 2 E-Accounting, AdvanceTally, Accounting, All type of Vouchers- Payment, Receipt, Contra, Journal, Credit Note, DebitNote,Inventory Management-Purchase,Sale, Payroll (Salary Management)-Pay Head Employee Head Emp. Group Attendance Unit, Maintain Attendance Register, Salary Sheet, Pay Slip, Over time, Production Wages, Export Data-Excel Word PDF, BOM, BRS Interest Cal, Taxation-GST TDS TCS (Eg.CompanyTransaction) ,Busy, Administration, Configuration, FeatureOption, MIS Reporting, Inventory Management, Purchase and Sale, Bom(Bill of Materials), Transaction, Taxation & E-Filling of ITRs GST Filling, Online Banking, Internet Outlook Email Management Digital Communication",
    duration: "12 Months",
  },
  {
    id: "3",
    title: "DIT - Diploma in Information Technology",
    description:
      "Semester 1 Fundamentals of Computer, Windows (Paint WordPad), MS-Office (Word - Complete Documentation Work), Ms Excel - (Spreadsheet Work), Ms-PowerPoint Presentation Work, Ms Access (Database Application), D.T.P (Desktop Publishing), Corel Draw (Create Logo Banner Card etc.), Photoshop (Photo Editing), PageMaker, Tally Semester 2 Programming Languages - C Language, C++ Language, Core Java, Web Designing & Development, HTML, CSS, Internet, Outlook, Email Management, Digital Communication, Project Work, Final Project Submission & Viva.",
    duration: "12 Months",
  },
  {
    id: "4",
    title: "DCA - Diploma in Computer Applications",
    description:
      "Semester 1 Fundamentals of Computer, Windows (Paint WordPad), MS Office: MS Word (Complete Documentation Work), MS Excel (Spreadsheet Work), MS Access (Database Application), Programming Language, C language, C ++ Proggramming Semester 2 Web Designing & Development, (HTML CSS JavaScript), Database Management System (SQL), Python Programming, Project Work, Final Project Submission & Viva.",
    duration: "12 Months",
  },
  {
    id: "5",
    title: "DWD - Diploma in Web Designing",
    description:
      "Semester 1 Fundamentals of Computer, Windows: (Paint WordPad), MS-Word (Complete Documentation Work), Excel  (Spreadsheet Work), Ms Access (Database Application), D.T.P (Desk Top Publishing), Corel Draw (Create Logo Banner Card etc.), Photoshop (Photo Editing), HTML (HyperText Markup Language) Semester 2 CSS Java Script, Frame work (Bootstarp), WordPress (Customization and Theme Development ), Internet, Outlook, Email Management, Digital Communication, Final Project Submission & Viva.",
    duration: "12 Months",
  },
  {
    id: "6",
    title: "DOM - Diploma in Office Management",
    description:
      "Semester 1 Fundamental of Computer, Windows (Paint WordPad), MS Office (Word - Complete Documentation Work), MS-Excel + Advance Excel, MS-Power Point (Presentation Work), MS-Access Semester 2 Advance Tally, Accounting, All type of Vouchers- Payment Receipt Contra Journal Credit Note DebitNote Inventory Management-Purchase Sale, Payroll (Salary Management)-Pay Head, Employee Head, Emp. Group Attendance Unit, Maintain Attendance Register SalarySheet PaySlip, Overtime Production Wages, Export Data- Excel Word PDF BOM BRS InterestCal. Taxation-GST TDS TCS Comp.Transaction, Web Designing Using HTML, Photoshop (BasicS oft Skill), Computer Typing, Internet Outlook Email Management Digital Communication  ",
    duration: "12 Months",
  },
  {
    id: "7",
    title: "DACS - Diploma in Advanced Computer Software",
    description:
      "Semester 1 Fundamental of Computer, Windows (Paint Word Pad), MS Office (Word - Complete Documentation Work, Excel - Spreadsheet Work, PowerPoint - Presentation Work, Access - Database Application), HTML (HyperText Markup Language) Semester 2  Tally, Desktop Publishing (DTP), CorelDraw, PageMaker, Photoshop, Introduction to internet , Outlook, Email Management, Digital Communication,",
    duration: "12 Months",
  },
  {
    id: "8",
    title: "O Level - DOEACC 'O' Level Certification",
    description:
      "Semester 1 Information Technology Tools and Network Basics, Web Designing & Publishing Semester 2 Programming and Problem Solving through Python, Internet of Things and its Applications, Project ",
    duration: "12 Months",
  },
  {
    id: "9",
    title: "Data Science - Professional Course",
    description:
      "Python for Data Science, Data Visualization (Tableau Power BI), Machine Learning Basics, Statistical Analysis, Big Data Concepts",
    duration: "6 Months",
  },
  {
    id: "10",
    title: "Data Analysis - Professional Course",
    description:
      "Excel for Data Analysis, SQL for Data Management, Python for Data Processing, Business Intelligence with Power BI, Report Automation",
    duration: "6 Months",
  },
  {
    id: "11",
    title: "CTT - Computer Teacher Training",
    description:
      "Semester 1 Computer Fundamentals & Teaching Basics, Fundamental of Computer & Operating System, MS Office (Word Excel PowerPoint Access), Internet & Email Management, Digital Communication & Online Teaching Tools, Computer Typing & Documentation, Classroom Management & Teaching Methodologies Semester 2 Advanced IT & Teaching Techniques, Programming Basics Python C, Web Designing (HTML CSS JavaScript Basics), Database Management System (DBMS & SQL Basics), Educational Technology & E-Learning Platforms, Cyber Security & Safe Internet Practices, Lesson Planning & Student Evaluation Techniques",
    duration: "12 Months",
  },
  {
    id: "12",
    title: "Coming Soon",
    description: " ",
    duration: " ",
  },
  {
    id: "13",
    title: "CFA - Certificate in Financial Accounting",
    description:
      "Fundamental of Computer,Windows: (Paint Word pad), MS-Office, MS- Word (Complete Documentation Work), MS- Excel (Spreadsheet Work), MS- Power Point (Presentation Work), MS- Access (Database Application),Computer Typing,Tally",
    duration: "6 Months",
  },
  {
    id: "14",
    title: "OM - Office Management",
    description:
      "Fundamental of Computer,Windows(Paint Word pad),MS-Office, MS- Word (Complete Documentation Work), MS- Excel, MS- Power Point (Presentation Work), MS- Access (Database Application),Accounting with Tally, Computer Typing,Web Designing Using HTML,Photoshop (Basic Soft Skill),Internet, Outlook, Email Management, Digital Communication",
    duration: "6 Months",
  },
  {
    id: "15",
    title: "(e-A/C) - E-Accounting",
    description:
      "Fundamental of Computer,Windows:(Paint Word pad),MS-Ofce:, MS- Word (Complete Documentation Work), MS- Excel + Advance Excel, MS- Power Point (Presentation Work), MS- Access (Database Application), Advance Tally, Taxation & E-Filling of ITRs, GST Filling, Online Banking ",
    duration: "6 Months",
  },
  {
    id: "16",
    title: "CWD - Certificate in Web Desinging",
    description:
      "HTML, CSS,Java Script,Frame Work (Bootstrap),WordPress (Customization and Theme Development),Project Work on Website,",
    duration: "6 Months",
  },
  {
    id: "17",
    title: "CACS - Certificate in Adv. Computer Software",
    description:
      "Fundamental of Computer,Windows (Paint Word pad), MS-Office,MS- Word (Complete Documentation Work), MS- Excel (Spreadsheet Work), MS- Power Point (Presentation Work), MS- Access (Database Application),HTML (Hyper Text Markup Language)",
    duration: "6 Months",
  },
  {
    id: "18",
    title: "CDP - Certificate in Desktop Publishing",
    description:
      "Fundamentals of Computer:, Windows:, Paint, Notepad, WordPad, MS-Office, MS Word: Complete Documentation Work, MS Excel: Spreadsheet Work, MS PowerPoint: Presentation Work, Designing, Corel Draw: (Create Logo Banner Card etc.), Photoshop: Photo Editing,PageMaker",
    duration: "6 Months",
  },
  {
    id: "19",
    title: "ECT - English Computer Typing",
    description:
      "Typing Mastery, Keyboard Shortcuts, Document Formatting, Professional Typing Skills",
    duration: "3 Months",
  },
  {
    id: "20",
    title: "CCO - Certificate in Computer Operation",
    description:
      "Fundamental of Computer, Windows, Paint, Word pad, MS-Ofce, MS- Word (Complete Documentation Work), MS- Excel (Spreadsheet Work), MS- Power Point (Presentation Work),Internet & Email Management, Introduction to Internet, Composing, Sending & Managing Emails",
    duration: "3 Months",
  },
  {
    id: "21",
    title: "CCC - Course in Computer Concept",
    description:
      "Social Networking, Social Governance and E-mail, WWW and Web Browsers, Spreadsheets, Overview of Future Skills & Cyber Security, Digital Financial Tools and Applications, Introduction to GUI-Based Operating System, Communication and Collaboration, Making Small Presentations, Elements of Word Processing",
    duration: "6 Months",
  },
  {
    id: "22",
    title: "MIS - Management Information System",
    description:
      "MS- Excel (Basic to Adv. Spreadsheet Work), Advance Excel, Visual Basic (VBA), SQL, Introduction to Internet, Outlook, Email Management",
    duration: "6 Months",
  },
  {
    id: "23",
    title: "SE - Spoken English",
    description:
      "Grammar, Vocabulary, Pronunciation, Public Speaking, Email Writing, Business Communication",
    duration: "3 Months",
  },
  {
    id: "24",
    title: "Coming Soon",
    description: " ",
    duration: " ",
  },
  {
    id: "25",
    title: "Microsoft Office",
    description:
      "MS Word, Excel, PowerPoint, Access, Outlook, Office Automation",
    duration: "3 Months",
  },
  {
    id: "26",
    title: "Ms-Word",
    description: "Document formatting, Templates, Mail Merge, Advanced Editing",
    duration: "2 Months",
  },
  {
    id: "27",
    title: "Ms-Excel",
    description: "Formulas, Functions, Pivot Tables, Charts, Data Analysis",
    duration: "3 Months",
  },
  {
    id: "28",
    title: "Advance Excel",
    description: "Macros, VBA, Power Query, Advanced Data Analysis",
    duration: "3 Months",
  },
  {
    id: "29",
    title: "Ms-PowerPoint",
    description:
      "Presentation Design, Animations, Slide Master, Professional Templates",
    duration: "2 Months",
  },
  {
    id: "30",
    title: "Ms-Access",
    description: "Database Creation, Forms, Queries, Reports, VBA Integration",
    duration: "3 Months",
  },
  {
    id: "31",
    title: "Corel-Draw",
    description: "Vector Design, Logo Making, Brochure Design, Layouts",
    duration: "3 Months",
  },
  {
    id: "32",
    title: "Photoshop",
    description: "Photo Editing, Retouching, Digital Art, Poster Making",
    duration: "3 Months",
  },
  {
    id: "33",
    title: "Tally",
    description: "Basic Accounting, Ledger Management, Inventory Control",
    duration: "3 Months",
  },
  {
    id: "34",
    title: "Professional Tally",
    description: "GST, Taxation, Payroll, Banking, Financial Reports",
    duration: "4 Months",
  },
  {
    id: "35",
    title: "Busy",
    description: "Business Accounting, Invoice Management, Tax Compliance",
    duration: "3 Months",
  },
  {
    id: "36",
    title: "C Programming",
    description: "Syntax, Functions, Pointers, File Handling, Data Structures",
    duration: "3 Months",
  },
  {
    id: "37",
    title: "C++",
    description: "OOP Concepts, STL, Exception Handling, File Operations",
    duration: "3 Months",
  },
  {
    id: "38",
    title: "Core Java",
    description: "OOP, Multi-threading, Collections, Exception Handling",
    duration: "4 Months",
  },
  {
    id: "39",
    title: "JavaScript",
    description: "ES6, DOM Manipulation, Async JS, API Integration",
    duration: "3 Months",
  },
  {
    id: "40",
    title: "Visual Basic",
    description: "Forms, Controls, Data Access, Event-Driven Programming",
    duration: "3 Months",
  },
  {
    id: "41",
    title: "Oracle (SQL)",
    description: "Database Queries, Joins, Stored Procedures, PL/SQL",
    duration: "3 Months",
  },
  {
    id: "42",
    title: "Dot Net",
    description: "ASP.NET, C#, MVC, Entity Framework, Web API",
    duration: "4 Months",
  },
  {
    id: "43",
    title: "JQuery",
    description: "Selectors, Events, AJAX, Plugins, Animations",
    duration: "2 Months",
  },
  {
    id: "44",
    title: "React JS",
    description: "JSX, Components, State, Hooks, Redux, API Integration",
    duration: "3 Months",
  },
  {
    id: "45",
    title: "Angular",
    description: "Components, Services, Directives, RxJS, API Handling",
    duration: "3 Months",
  },
  {
    id: "46",
    title: "MVC",
    description: "Model-View-Controller Architecture, ASP.NET MVC",
    duration: "3 Months",
  },
  {
    id: "47",
    title: "HTML",
    description: "HTML5, Forms, Semantic Elements, Webpage Structuring",
    duration: "2 Months",
  },
  {
    id: "48",
    title: "CSS",
    description: "CSS3, Flexbox, Grid, Animations, Responsive Design",
    duration: "2 Months",
  },
  {
    id: "49",
    title: "Python",
    description: "Basics, Loops, Functions, File Handling, Data Science",
    duration: "3 Months",
  },
  {
    id: "50",
    title: "Pandas",
    description: "DataFrames, Series, Data Cleaning, Data Wrangling",
    duration: "3 Months",
  },
  {
    id: "51",
    title: "Numpy",
    description: "Arrays, Indexing, Vectorized Computation, Linear Algebra",
    duration: "2 Months",
  },
  {
    id: "52",
    title: "Matplotlib",
    description: "Visualization, Plots, Customization, Interactive Charts",
    duration: "2 Months",
  },
  {
    id: "53",
    title: "Power BI",
    description: "Data Modeling, Reports, DAX, Dashboard Design",
    duration: "3 Months",
  },
  {
    id: "54",
    title: "R Programming",
    description: "Data Analysis, Statistical Computing, Data Visualization",
    duration: "3 Months",
  },
];

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) return <p>Course not found</p>;

  const parts = course.description
    .split(/(Semester 1|Semester 2)/)
    .map((part) => part.trim())
    .filter((part) => part); // Removes empty values

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex items-center justify-center py-4 sm:py-6 md:py-10 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="w-full max-w-4xl h-auto bg-white bg-opacity-90 border-2 border-blue-300 rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
        {/* Course Title */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-800 via-indigo-600 to-teal-500 bg-clip-text text-center drop-shadow-2xl mb-6 sm:mb-8 mt-24 sm:mt-16 md:mt-12 max-w-full break-words p-3"
        >
          {course.title}
        </motion.h1>

        {/* Course Duration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="text-sm sm:text-base md:text-lg text-gray-800 font-semibold text-center tracking-wide"
        >
          Duration:{" "}
          <span className="text-indigo-700 font-bold">{course.duration}</span>
        </motion.div>

        {/* Description (optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-center text-sm sm:text-base text-gray-700 mt-4 sm:mt-6 mb-8 sm:mb-10"
        >
          {/* Optional content can go here */}
        </motion.div>

        {/* Semester Details */}
        {parts.map((part, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 + index * 0.3, duration: 0.9 }}
            className="w-full px-2 sm:px-4 md:px-8"
          >
            {part === "Semester 1" || part === "Semester 2" ? (
              <motion.h2
                id={part.toLowerCase().replace(" ", "")} // Set id for scrolling
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 border-l-4 border-indigo-500 pl-4 py-3 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg shadow-2xl my-5 mb-6"
              >
                {part}
              </motion.h2>
            ) : (
              <ul className="list-none space-y-4 sm:space-y-5 mt-4 sm:mt-6">
                {part
                  .split(",")
                  .filter((point) => point.trim() !== "")
                  .map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.6 }}
                      className="flex items-start gap-3 bg-white border border-gray-300 rounded-xl p-4 shadow-md hover:bg-indigo-50 hover:shadow-xl transition-all duration-300"
                    >
                      <span className="text-indigo-600 text-lg sm:text-xl mt-1">
                        ✔
                      </span>
                      <span className="text-gray-800 font-medium text-sm sm:text-base">
                        {point.trim()}
                      </span>
                    </motion.li>
                  ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;

