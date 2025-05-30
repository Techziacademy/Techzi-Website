import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function Contact() {
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const letters = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz";
    const numbers = "23456789";
    let chars = [];

    for (let i = 0; i < 3; i++) {
      chars.push(letters.charAt(Math.floor(Math.random() * letters.length)));
      chars.push(numbers.charAt(Math.floor(Math.random() * numbers.length)));
    }

    const shuffled = chars.sort(() => 0.5 - Math.random()).join("");
    setCaptcha(shuffled);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userCaptcha !== captcha) {
      alert("Incorrect CAPTCHA. Please try again.");
      generateCaptcha();
      return;
    }

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyWM4Tp-wXyreziDHSjJI4-DlpXOOfm4YBGOm_e3Lbum7V7_GZTAJCxWSjeXbWBZb9B/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert(
          "You've successfully reached Techzi Academy HQ. We’re decoding your message... standby for response😊"
        );
        setFullName("");
        setPhoneNumber("");
        setEmail("");
        setMessage("");
        setUserCaptcha("");
        generateCaptcha();
      } else {
        alert("Submission failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="max-w-screen-lg mx-auto px-5 py-12 font-sans" id="contact">
      {/* <Helmet>
        <title>Contact Techzi Academy | Best Computer Institute in Delhi</title>
        <meta
          name="description"
          content="Contact Techzi Academy, the leading computer institute in Kirari, Delhi offering the best courses in programming, web development, and IT skills."
        />
        <meta
          name="keywords"
          content="Techzi Academy, contact, computer institute Delhi, best programming courses Delhi, coding classes Kirari, IT training"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Techzi Academy" />
        <meta
          property="og:description"
          content="Reach out to Techzi Academy for expert guidance on IT and programming courses. Located in Kirari, New Delhi."
        />
        <meta property="og:url" content="https://techziacademy.in/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Techzi Academy" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Techzi Academy",
              "url": "https://techziacademy.in",
              "logo": "https://techziacademy.in/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "70 Feet Road, Prem Nagar, Kirari",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110086",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9599955697",
                "contactType": "Customer Service",
                "areaServed": "IN"
              }
            }
          `}
        </script>
      </Helmet> */}

      <motion.div
        className="flex flex-col md:flex-row items-stretch justify-center gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Contact Info */}
        <motion.div
          variants={fadeInUp}
          className="md:w-1/2 w-full bg-white/70 backdrop-blur-2xl p-8 rounded-3xl border border-gray-200 shadow-lg flex flex-col justify-between"
        >
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-center text-[#000080] mb-2">
              Contact 
            </h2>
            <p className="text-center text-gray-600 text-lg mb-5">
              We would love to hear from you. Contact us for top computer
              courses in Kirari, Delhi.
            </p>
          </div>

          <div className="space-y-6 text-[#000080] text-[14px] leading-relaxed font-sans">
            <div className="flex items-start gap-4">
              <span className="text-2xl text-[#07c4f4] mt-1">
                <i className="fa-solid fa-phone-volume"></i>
              </span>
              <div>
                <p className="text-sm font-semibold">Phone</p>
                <a
                  href="tel:+919599955697"
                  className="text-black font-medium text-base"
                >
                  +91 9599955697
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl text-[#07c4f4] mt-1">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <div>
                <p className="text-sm font-semibold">Email</p>
                <a
                  href="mailto:Techziacademy@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-medium text-base"
                >
                  Techziacademy@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl text-[#07c4f4] mt-1">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <div>
                <p className="text-sm font-semibold">Address</p>
                <p className="text-base font-medium text-black">
                  Techzi Academy
                  <br />
                  First Floor, Shaheed Bhagat Singh Chowk,
                  <br />
                  70 Feet Road, Prem Nagar, Kirari,
                  <br />
                  New Delhi - 110086
                </p>
              </div>
            </div>
          </div>

          <div className="my-6 border-t border-gray-200"></div>

          <div>
            <h3 className="text-sm text-gray-500 font-semibold mb-2">
              Business Hours
            </h3>
            <p className="text-base font-medium text-[#000080]">
              Mon - Sat: 9 AM – 8 PM
            </p>
            <p className="text-base font-medium text-[#000080]">
              Sunday: Close
            </p>
          </div>
        </motion.div>

        <motion.form
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="glow-border md:w-1/2 w-full bg-gradient-to-br from-[#ffffff70] via-[#ffffff60] to-[#ffffff50] backdrop-blur-xl p-8 rounded-3xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)] space-y-5"
        >
          <h2 className="text-3xl font-bold text-center text-[#000080] mb-2">
            Connect with a Counselor
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => {
              const value = e.target.value;
              if (/^[a-zA-Z\s]*$/.test(value) && value.length <= 30) {
                setFullName(value);
              }
            }}
            className="bg-white/80 border border-gray-300 p-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-[#07c4f4] text-[15px] transition"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => {
              const input = e.target.value;
              if (/^\d{0,10}$/.test(input)) {
                setPhoneNumber(input);
              }
            }}
            pattern="\d{10}"
            maxLength={10}
            inputMode="numeric"
            className="bg-white/80 border border-gray-300 p-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-[#07c4f4] text-[15px] transition"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/80 border border-gray-300 p-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-[#07c4f4] text-[15px] transition"
            required
          />

          <textarea
            placeholder="Your Message (Max 50 words)"
            value={message}
            onChange={(e) => {
              const words = e.target.value.trim().split(/\s+/);
              if (words.length <= 50) {
                setMessage(e.target.value);
              }
            }}
            className="bg-white/80 border border-gray-300 p-3 w-full h-36 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#07c4f4] text-[15px] placeholder-gray-500 transition"
            required
          />

          <div className="flex items-center gap-4">
            <motion.div className="flex items-center gap-2 backdrop-blur-md border px-6 py-3 rounded-2xl text-[#000080] text-lg font-mono tracking-widest select-none">
              {captcha}
              <button
                type="button"
                onClick={generateCaptcha}
                className="ml-3 text-[#07c4f4] hover:text-[#e21d34] transition duration-200 text-xl"
                title="Refresh Captcha"
              >
                🔄
              </button>
            </motion.div>

            <input
              type="text"
              placeholder="Enter CAPTCHA"
              value={userCaptcha}
              onChange={(e) => setUserCaptcha(e.target.value)}
              className="bg-white/80 border border-gray-300 p-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-[#07c4f4] text-[15px] transition"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-[#07c4f4] to-[#000080] hover:from-[#07c4f4] hover:to-[#000080] text-white font-bold py-3 px-6 w-full rounded-xl transition duration-300 shadow-xl"
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
