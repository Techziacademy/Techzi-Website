import React from "react";
import Logo from "./assets/Logo.jpeg";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-white text-[#000080] pt-10 pb-6 border-t border-gray-200 mb-20 sm:mb-0">
      <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
        {/* Google Map */}
        <section className="w-full m-10 flex justify-center items-center">
          <div className="w-[1000px] h-[400px] rounded-none overflow-hidden">
            <iframe
              title="Techzi Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448206.49563206476!2d76.83729572656588!3d28.69812060540026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d051c60594b5b%3A0x9bce383f73ec8c87!2sTechzi%20Academy!5e0!3m2!1sen!2sin!4v1685963769450!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Logo & Name */}
        <a href="/" className="mb-2">
          <img
            src={Logo}
            alt="Techzi Logo"
            className="h-20 w-auto object-contain"
          />
        </a>

        {/* Social Media Links */}
        <nav className="flex space-x-6 m-4">
          <motion.a
            href="https://www.facebook.com/share/1Fo9xGanjb/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="relative group text-[#1877F2] transition"
            whileHover={{ scale: 1.2 }}
          >
            <i className="fa-brands fa-facebook fa-2xl"></i>
            <span className="absolute left-1/2 -top-6 transform -translate-x-1/2 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:block">
              Facebook
            </span>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/techziacademy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="relative group text-[#E1306C] transition"
            whileHover={{ scale: 1.2 }}
          >
            <i className="fa-brands fa-instagram fa-2xl"></i>
            <span className="absolute left-1/2 -top-6 transform -translate-x-1/2 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:block">
              Instagram
            </span>
          </motion.a>

          <motion.a
            href="https://youtube.com/@techziacademy-v2f7o"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="relative group text-[#FF0000] transition"
            whileHover={{ scale: 1.2 }}
          >
            <i className="fa-brands fa-youtube fa-2xl"></i>
            <span className="absolute left-1/2 -top-6 transform -translate-x-1/2 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:block">
              YouTube
            </span>
          </motion.a>
        </nav>

        {/* Developer Credit */}
        <motion.p
          className="text-sm text-gray-600 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Website developed by{" "}
          <span className="font-semibold text-[#000080]">Harsh Kumar</span>
        </motion.p>

        {/* Copyright */}
        <p className="text-sm text-gray-600 font-light text-center">
          <span className="text-black">Copyright ©</span>{" "}
          <span className="font-bold text-transparent bg-black bg-clip-text">
            Techzi Academy
          </span>{" "}
          {new Date().getFullYear()} - All rights reserved.
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        Best Computer Institute in Delhi, Best Computer Institute in Kirari, ISO
        Certified Computer Institute, Government Registered Computer Institute,
        MSME Registered Computer Institute, NCS Registered Institute, Government
        Approved Computer Courses, Recognized Computer Institute, Govt. Job
        Computer Training, Job-Oriented Computer Courses, Computer Institute
        Near Me, Computer Coaching Near Me, Government Computer Institute Near
        Me, Best Computer Classes Near Me, Best Computer Training Institute Near
        Me, Govt. Computer Coaching Center, Govt. Computer Classes in Delhi,
        Tally with GST Training in Delhi, Best Tally Course in Delhi,
        E-Accounting Course Delhi, Advanced Excel Training Near Me, GST and
        Accounting Institute Delhi, Python Programming Institute Near Me, Java
        Classes in Delhi, Best C Language Classes Near Me, C++ Programming
        Institute Near Me, Full Stack Web Development Institute, HTML CSS
        JavaScript Training, Bootstrap Course in Delhi, Angular Course Near Me,
        MVC Programming Institute Delhi, Power BI Training Delhi, Data Science
        Institute Near Me, Oracle SQL Classes in Delhi, Data Analytics Course
        Near Me, ADCA Course Delhi, DCA Computer Course Near Me, Diploma in
        Computer Applications, Advanced Diploma in Computer Applications,
        Computer Courses After 10th, Computer Courses After 12th, Best Computer
        Academy in Delhi, Top 10 Computer Institutes in Delhi, Government
        Coaching for Computer, Affordable Computer Classes, Computer Institute
        for Govt Job, Techzi Academy Computer Institute, Government Registered
        Coaching, Government Certified Courses, IT Training Institute Near Me,
        Best Programming Classes Near Me, Coding Classes for Students, Online
        Computer Classes with Certificate, Government Computer Course List, Low
        Fees Computer Classes Near Me, Government Job Preparation with Computer
        Courses, Basic to Advance Computer Courses, Best Computer Courses to Get
        a Job, Best Coaching for Python Java Tally Excel, Best Institute for Web
        Designing, Website Development Classes Near Me, Computer Certification
        Course Near Me, Free Computer Courses Delhi, Free Demo Computer Classes,
        Government Computer Institute in Delhi, Govt. Recognized Computer
        Institute, ISO 9001:2015 Certified Computer Institute, Government
        Computer Training Center, Best Computer Institute for Govt. Jobs,
        Computer Courses with Placement Assistance, Government Computer Coaching
        Near Me, Certified Computer Institute Near Me, Affordable Computer
        Courses in Delhi, Techzi Academy Kirari Suleman Nagar, Top Computer
        Institute in North West Delhi, Computer Classes for Beginners, Advanced
        Computer Training Institute, Government Computer Certification Courses,
        Computer Institute with Job Guarantee, Best Computer Institute for
        Programming, Government Approved IT Courses, Free Computer Training in
        Delhi, Computer Institute with Government Certification, Online Computer
        Courses with Government Recognition, Best Computer Institute for
        E-Accounting, Government Computer Institute with Placement, Computer
        Coaching for Government Exams, Recognized Computer Institute in Delhi,
        Govt. Certified Computer Training Center, Computer Institute Offering
        Free Courses, Government Computer Institute with ISO Certification, Best
        Computer Institute Near Nangloi, Computer Training Center Near
        Mangolpuri, Government Computer Institute Near Rohini, Techzi Academy
        Computer Courses, Government Computer Institute with Affordable Fees,
        Certified Computer Institute with Job Assistance, Best Computer
        Institute for Data Science, Government Approved Programming Courses,
        Computer Institute with Government Recognition in Delhi, Affordable
        Computer Coaching Center, Government Computer Institute with Experienced
        Faculty, Techzi Academy Government Certified Courses, Best Computer
        Institute for Web Development, Government Computer Institute Offering
        Free Demo Classes, Computer Institute with Government Registration, ISO
        Certified Computer Coaching Center, Government Recognized Computer
        Institute Near Me, Best Computer Institute for Advanced Excel,
        Government Computer Institute with Latest Curriculum, Techzi Academy
        Government Registered Institute, Computer Institute with Government
        Affiliation, Government Computer Institute with Real-World Projects,
        Best Computer Institute for Job-Oriented Courses, Government Computer
        Institute with Modern Infrastructure, Techzi Academy ISO Certified
        Institute, Government Computer Institute with Industry Experts, Best
        Computer Institute for Programming Languages, Government Computer
        Institute with Practical Training, Techzi Academy Government Approved
        Courses, Computer Institute with Government Accreditation, Government
        Computer Institute with Placement Support, Best Computer Institute for
        Data Analytics, Government Computer Institute with Flexible Timings,
        Techzi Academy Government Certified Training, Computer Institute with
        Government Recognition and Low Fees, Government Computer Institute with
        Comprehensive Curriculum, Best Computer Institute for Software
        Development, Government Computer Institute with Hands-On Experience,
        Techzi Academy Government Registered Computer Institute, Computer
        Institute with Government Certification and Placement, Government
        Computer Institute with Experienced Trainers, Best Computer Institute
        for IT Courses, Government Computer Institute with Affordable Pricing,
        Techzi Academy Government Certified Computer Courses, Computer Institute
        with Government Approval and Job Assistance, Government Computer
        Institute with Updated Syllabus, Best Computer Institute for Career
        Advancement, Government Computer Institute with Skilled Instructors,
        Techzi Academy Government Recognized Training Center, Computer Institute
        with Government Certification and Practical Training, Government
        Computer Institute with Modern Facilities, Best Computer Institute for
        Skill Development, Government Computer Institute with Comprehensive
        Training Programs, Techzi Academy Government Certified Educational
        Institute, Computer Institute with Government Recognition and
        Industry-Relevant Courses, Government Computer Institute with
        Personalized Coaching, Best Computer Institute for Professional Growth,
        Government Computer Institute with Interactive Learning, Techzi Academy
        Government Approved Educational Center, Computer Institute with
        Government Certification and Career Support, Government Computer
        Institute with Student-Centric Approach, Best Computer Institute for
        Technical Education, Government Computer Institute with Experienced
        Mentors, Techzi Academy Government Registered Learning Institute,
        Computer Institute with Government Recognition and Advanced Curriculum,
        Government Computer Institute with Practical Skill Development, Best
        Computer Institute for Employment Opportunities, Government Computer
        Institute with Industry Partnerships, Techzi Academy Government
        Certified Skill Development Center, Computer Institute with Government
        Approval and Real-World Applications, Government Computer Institute with
        Career-Oriented Training, Best Computer Institute for Future-Ready
        Skills, Government Computer Institute with Comprehensive Learning
        Modules, Techzi Academy Government Recognized Career Institute, Computer
        Institute with Government Certification and Job Placement, Government
        Computer Institute with Innovative Teaching Methods, Best Computer
        Institute for Comprehensive Education, Government Computer Institute
        with Hands-On Learning, Techzi Academy Government Registered Training
        Center, Computer Institute with Government Recognition and Affordable
        Education, Government Computer Institute with Expert Faculty, Best
        Computer Institute for In-Demand Skills, Government Computer Institute
        with Student Support Services, Techzi Academy Government Certified
        Learning Hub, Computer Institute with Government Approval and
        Industry-Relevant Training, Government Computer Institute with Career
        Guidance, Best Computer Institute for Skill Enhancement, Government
        Computer Institute with Practical Workshops, Techzi Academy Government
        Recognized Educational Hub, Computer Institute with Government
        Certification and Career Advancement, Government Computer Institute with
        Modern Teaching Techniques, Best Computer Institute for Professional
        Development, Government Computer Institute with Real-World Experience,
        Techzi Academy Government Registered Educational Center, Computer
        Institute with Government Recognition and Job-Oriented Programs,
        Government Computer Institute with Experienced Educators, Best Computer
        Institute for Technical Skills, Government Computer Institute with
        Comprehensive Curriculum, Techzi Academy Government Certified Training
        Hub, Computer Institute with Government Approval and Practical Learning,
        Government Computer Institute with Career Support Services, Best
        Computer Institute for IT Training, Government Computer Institute with
        Industry-Relevant Courses, Techzi Academy Government Recognized Learning
        Center, Computer Institute with Government Certification and Employment
        Assistance, Government Computer Institute with Skilled Trainers, Best
        Computer Institute for Software Training, Government Computer Institute
        with Updated Course Material, Techzi Academy Government Registered Skill
        Development Center, Computer Institute with Government Recognition and
        Career-Oriented Education, Government Computer Institute with Practical
        Skill Application, Best Computer Institute for Job Readiness, Government
        Computer Institute with Industry Collaboration, Techzi Academy
        Government Certified Educational Facility, Computer Institute with
        Government Approval and Comprehensive Training, Government Computer
        Institute with Career-Focused Programs, Best Computer Institute for
        Technical Proficiency, Government Computer Institute with Hands-On
        Projects, Techzi Academy Government Recognized Training Facility,
        Computer Institute with Government Certification and Industry
        Connections, Government Computer Institute with Personalized Learning,
        Best Computer Institute for Career Success, Government Computer
        Institute with Modern Learning Environment, Techzi Academy Government
        Registered Educational Institution, Computer Institute with Government
        Recognition and Skill-Based Training, Government Computer Institute with
        Practical Experience, Best Computer Institute for Professional Skills,
        Government Computer Institute with Industry-Standard Curriculum, Techzi
        Academy Government Certified Learning Institution, Computer Institute
        with Government Approval and Career-Oriented Courses, Government
        Computer Institute with Student-Centered Approach, Best Computer
        Institute for Technical Excellence, Government Computer Institute with
        Real-World Applications, Techzi Academy Government Recognized
        Educational Institution, Computer Institute with Government
        Certification and Career Development, Government Computer Institute with
        Innovative Learning Methods, Best Computer Institute for Future Skills,
        Government Computer Institute with Comprehensive Training Modules,
        Techzi Academy Government Registered Career Development Center, Computer
        Institute with Government Recognition and Practical Training, Government
        Computer Institute with Experienced Instructors, Best Computer Institute
        for Skill Acquisition, Government Computer Institute with
        Industry-Relevant Education, Techzi Academy Government Certified
        Professional Training Center, Computer Institute with Government
        Approval and Job-Oriented Learning, Government Computer Institute with
        Career Advancement Opportunities, Best Computer Institute for Technical
        Training, Government Computer Institute with Practical Learning
        Environment, Techzi Academy Government Recognized Skill Enhancement
        Center, Computer Institute with Government Certification and Career
        Support, Government Computer Institute with Modern Teaching Facilities,
        Best Computer Institute for Professional Growth, Government Computer
        Institute with Hands-On Learning Experience, Techzi Academy Government
        Registered Educational Hub, Computer Institute with Government
        Recognition and Industry-Focused Training, Government Computer Institute
        with Personalized Coaching, Best Computer Institute for Career-Oriented
        Education, Government Computer Institute with Practical Skill
        Development, Techzi Academy Government Certified Learning Center,
        Computer Institute with Government Approval and Comprehensive
        Curriculum, Government Computer Institute with Career Services, Best
        Computer Institute for Technical Skill Building, Government Computer
        Institute with Real-World Training, Techzi Academy Government Recognized
        Educational Facility, Computer Institute with Government Certification
        and Career Pathways, Government Computer Institute with Innovative
        Teaching Strategies, Best Computer Institute for Skill Development
        Programs, Government Computer Institute with Practical Application,
        Techzi Academy Government Registered Training Institution, Computer
        Institute with Government Recognition and Career-Focused Learning,
        Government Computer Institute with Experienced Faculty, Best Computer
        Institute for Professional Training, Government Computer Institute with
        Industry-Relevant Curriculum, Techzi Academy Government Certified
        Educational Hub, Computer Institute with Government Approval and
        Practical Skill Training, Government Computer Institute with Career
        Development Services, Best Computer Institute for Technical Education
        Programs, Government Computer Institute with Hands-On Experience, Techzi
        Academy Government Recognized Learning Institution, Computer Institute
        with Government Certification and Career Advancement Opportunities,
        Government Computer Institute with Modern Teaching Methods, Best
        Computer Institute for Skill Enhancement Courses, Government Computer
        Institute with Practical Learning Modules, Techzi Academy Government
        Registered Educational Center, Computer Institute with Government
        Recognition and Career-Oriented Programs, Government Computer Institute
        with Experienced Trainers, Best Computer Institute for Technical Skill
        Acquisition, Government Computer Institute with Industry-Relevant
        Training, Techzi Academy Government Certified Professional Development
        Center, Computer Institute with Government Approval and Practical
        Learning Opportunities, Government Computer Institute with Career
        Support Services, Best Computer Institute for Technical Training
        Programs, Government Computer Institute with Hands-On Learning Modules,
        Techzi Academy Government Recognized Educational Facility, Computer
        Institute with Government Certification and Career-Oriented Education,
        Government Computer Institute with Innovative Teaching Techniques, Best
        Computer Institute for Skill Development Training, Government Computer
        Institute with Practical Application Opportunities, Techzi Academy
        Government Registered Training Hub, Computer Institute with Government
        Recognition and Career-Focused Learning, Government Computer Institute
        with Experienced Faculty, Best Computer Institute for Professional
        Development, Government Computer Institute with Industry-Relevant
        Curriculum, Techzi Academy Government Certified Educational Hub,
        Computer Institute with Government Approval and Practical Skill
        Training, Government Computer Institute with Career Development
        Services, Best Computer Institute for Technical Education Programs,
        Government Computer Institute with Hands-On Experience, Techzi Academy
        Government Recognized Learning Institution, Computer Institute with
        Government Certification and Career Advancement Opportunities,
        Government Computer Institute with Modern Teaching Methods, Best
        Computer Institute for Skill Enhancement Courses, Government Computer
        Institute with Practical Learning Modules, Techzi Academy Government
        Registered Educational Center, Computer Institute with Government
        Recognition and Career-Oriented Programs, Government Computer Institute
        with Experienced Trainers, Best Computer Institute for Technical Skill
        Acquisition, Government Computer Institute with Industry-Relevant
        Training, Techzi Academy Government Certified Professional Development
        Center, Computer Institute with Government Approval and Practical
        Learning Opportunities, Government Computer Institute with Career
        Support Services, Best Computer Institute for Technical Training
        Programs, Government Computer Institute with Hands-On Learning Modules,
        Techzi Academy Government Recognized Educational Facility, Computer
        Institute with Government Certification and Career-Oriented Education,
        Government Computer Institute with Innovative Teaching Techniques, Best
        Computer Institute for Skill Development Training, Government Computer
        Institute with Practical Application Opportunities, Techzi Academy
        Government Registered Training Hub, Computer Institute with Government
        Recognition and Career-Focused Learning, Government Computer Institute
        with Experienced Faculty, Best Computer Institute for Professional
        Development, Government Computer Institute with Industry-Relevant
        Curriculum, Techzi Academy Government Certified Educational Hub,
        Computer Institute with Government Approval and Practical Skill
        Training, Government Computer Institute with Career Development
        Services, Best Computer Institute for Technical Education Programs,
        Government Computer Institute with Hands-On Experience, Techzi Academy
        Government Recognized Learning Institution, Computer Institute with
        Government Certification and Career Advancement Opportunities,
        Government Computer Institute with Modern Teaching Methods, Best
        Computer Institute for Skill Enhancement Courses
      </div>
    </footer>
  );
}

export default Footer;
