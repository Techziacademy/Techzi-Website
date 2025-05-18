import { Helmet } from "react-helmet";
import Techzi from "../assets/techzilogo.PNG";

export default function AboutTechzi() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-12 py-16 bg-gradient-to-br from-[#000080] to-[#07c4f4] text-white relative overflow-hidden"
    >
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Techzi Academy – Best Computer Institute in Kirari, Delhi</title>
        <meta
          name="description"
          content="Learn about Techzi Academy – an ISO certified, government-registered computer institute in Kirari, Delhi. Explore our career-focused courses in programming, AI, data science, Excel, Tally, and more."
        />
      </Helmet>

      {/* Glow Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e21d34] via-[#07c4f4] to-transparent pointer-events-none animate-pulse" />

      {/* About Us Heading */}
      <h1 className="text-5xl font-extrabold mb-10 animate-fadeInUp text-white animate-gradient-text">
        About Us
      </h1>

      <div className="relative z-10 max-w-6xl w-full bg-white text-black/90 backdrop-blur-lg rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] p-6 md:p-10 animate-slideInUp duration-1000 space-y-6">
        {/* Image and first paragraph */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <img
              src={Techzi}
              alt="Techzi Academy - Best Computer Institute in Kirari, Delhi"
              className="rounded-xl shadow-lg w-full h-[200px] object-contain"
            />
          </div>

          {/* Introduction */}
          <div className="w-full md:w-2/3 flex items-center">
            <p className="text-lg leading-relaxed text-black tracking-wide text-justify">
              Welcome to <strong>Techzi Academy</strong>, the <strong>best computer institute in Delhi</strong>,
              known for delivering high-quality, career-oriented computer education. Founded by seasoned
              tech professionals Preeti and Poonam, we specialize in basic to advanced computer courses,
              advanced Excel, Tally, programming, data science, AI, ML, web development, and more.
            </p>
          </div>
        </div>

        {/* Full-width content */}
        <div className="w-full space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">ISO & Government Certification</h2>
            <p className="text-lg leading-relaxed text-black tracking-wide text-justify">
              We are proud to be an <strong>ISO 9001:2015 Certified Institute</strong>, accredited by the International Accreditation Forum (IAF)
              and EGAC, Egypt, ensuring global standards in quality education. Techzi Academy is also
              <strong> Government Registered</strong> under the Ministry of MSME and the National Career Service (NCS), Ministry of Labour,
              Government of India.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Global Certifications</h2>
            <p className="text-lg leading-relaxed text-black tracking-wide text-justify">
              At Techzi Academy, we offer globally recognized certification courses, valid both in India and abroad,
              giving our students a competitive edge in the job market.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Expert Faculty</h2>
            <p className="text-lg leading-relaxed text-black tracking-wide text-justify">
              Our expert faculty comprises industry professionals with vast experience, dedicated to providing
              easy and effective teaching methods that make learning simple, enjoyable, and impactful.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Career-Focused Courses</h2>
            <p className="text-lg leading-relaxed text-black tracking-wide text-justify">
              We offer a wide range of job-oriented courses with a focus on real-world skills, using an industry-aligned curriculum that helps
              students, job seekers, and professionals build successful careers in the IT and computer field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
