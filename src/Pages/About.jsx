export default function AboutTechzi() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 md:p-10 m-0 bg-gradient-to-r from-blue-400 to-blue-800"
      id="about"
    >
      <h1 className="text-5xl pt-0 pb-5 font-bold text-gray-100">About Us</h1>

      {/* Founder Info Section */}
      <div className="flex flex-col md:flex-row gap-6 mt-0 max-w-5xl p-2 md:p-6">
        <div className="w-full">
          <p className="text-lg leading-relaxed text-gray-200">
            Welcome to <strong>Techzi Academy</strong>, a premier computer
            education institute founded by
            <span className="text-white font-semibold"> Preeti </span> and
            <span className="text-white font-semibold"> Poonam</span>, seasoned
            technology professionals with extensive expertise in computer
            applications, programming, data science, AI, and machine learning.
            <br />
            <br />
            With a strong background in IT education, they are dedicated to
            equipping learners with the
            <strong> practical skills and industry knowledge</strong> needed to
            excel in today’s rapidly evolving tech landscape.
            <br />
            <br />
            At Techzi Academy, we believe that technology-driven education
            creates limitless career opportunities. Our mission is to provide
            <strong> hands-on, job-oriented training</strong> that bridges the
            gap between academic learning and real-world applications.
            <br />
            <br />
            Whether you're a student building a solid foundation in computer
            science or a professional looking to upgrade your skills, our
            industry-relevant courses ensure that you stay ahead in today’s
            competitive job market.
          </p>
        </div>
      </div>
    </div>
  );
}
