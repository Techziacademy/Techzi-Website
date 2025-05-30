import React from "react";
import { Helmet } from "react-helmet";
import Slides from "../Slides";

function Home() {
  return (
    <>
      <Helmet>
        <title>Techzi Academy | Best Computer Institute in Delhi</title>
        <meta
          name="description"
          content="Techzi Academy offers top-notch programming, web development, and IT courses in Delhi. Explore our popular courses, meet our expert faculty, view our gallery, read insightful blogs, and contact us for career guidance. ISO certified, government registered, and globally recognized."
        />
        <meta
          name="keywords"
          content="Techzi Academy, Best Computer Courses in Delhi, Programming Courses, Web Development, IT Courses, Computer Institute, Kirari, About Techzi, Gallery, Blogs, Contact, ISO Certified, Government Registered, Diploma, Certificate, Short Term Courses"
        />
        <meta name="author" content="Techzi Academy" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Techzi Academy | Best Computer Institute in Delhi" />
        <meta
          property="og:description"
          content="Join Techzi Academy for the best programming, web development, and IT courses in Delhi. Explore our gallery, read our blogs, and contact us for more information."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techziacademy.in" />
        <meta property="og:image" content="https://techziacademy.in/src/assets/preview-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Techzi Academy | Best Computer Institute in Delhi" />
        <meta
          name="twitter:description"
          content="Join Techzi Academy for top-rated programming, web development, and IT courses in Delhi. Explore our gallery, blogs, and contact us for more."
        />
        <meta name="twitter:image" content="https://techziacademy.in/src/assets/preview-image.png" />

        {/* Extra for local SEO */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Kirari, Delhi, India" />
        <meta name="geo.position" content="28.7354;77.0689" />
        <meta name="ICBM" content="28.7354, 77.0689" />

        {/* Canonical */}
        <link rel="canonical" href="https://techziacademy.in" />
      </Helmet>
      <div className="max-w-full" id="home">
        {/* Hero Section */}
        <div>
          <Slides />
        </div>
      </div>
    </>
  );
}

export default Home;