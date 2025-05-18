import React from "react";
import Slides from "../Slides";

function Home() {
  return (
    <>
      <head>
        {/* Title Tag for SEO */}
        <title>Techzi Academy | Best Computer Institute in Delhi</title>

        {/* Meta Description Tag */}
        <meta
          name="description"
          content="Techzi Academy offers top-notch programming, web development, and IT courses in Delhi. Learn from industry experts and advance your career with the best courses in Prem Nagar Kirari."
        />

        {/* Meta Keywords Tag */}
        <meta
          name="keywords"
          content="Best Computer Courses in Delhi, Techzi Academy, Programming Courses, Web Development Courses, IT Courses, Computer Institute in Delhi, Learn Programming in Delhi"
        />

        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta property="og:title" content="Techzi Academy | Best Computer Institute in Delhi" />
        <meta
          property="og:description"
          content="Join Techzi Academy and get the best programming, web development, and IT courses in Delhi. Learn from experts in Prem Nagar Kirari."
        />
        <meta property="og:image" content="/src/assets/preview-image.png" />
        <meta property="og:url" content="https://techziacademy.in" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Techzi Academy | Best Computer Institute in Delhi" />
        <meta
          name="twitter:description"
          content="Join Techzi Academy for top-rated programming, web development, and IT courses in Delhi. Learn from industry experts in Prem Nagar Kirari."
        />
        <meta name="twitter:image" content="/src/assets/preview-image.png" />
      </head>

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
