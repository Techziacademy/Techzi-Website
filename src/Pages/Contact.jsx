import React, { useRef, useState } from "react";

function Contact() {
  const formRef = useRef(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    // Phone Validation (Ensures exactly 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(data.Phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Form Submitted", data);

    // Show Success Message
    setSuccessMessage("Your inquiry has been submitted successfully! ✅");

    // Form Reset after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
      formRef.current.reset();
    }, 3000);
  };

  return (
    <div className="max-w-screen-lg mx-auto px-5 py-10" id="contact">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        
        {/* Left Section - Contact Details */}
        <div className="md:w-1/2 w-full bg-white p-6 md:p-[50px] rounded-lg shadow-lg">
          <h1 className="text-4xl py-4 font-bold text-center text-blue-600">
            Contact Us
          </h1>
          <p className="text-center font-extrabold text-xl md:text-2xl py-3">
            Techzi Academy
          </p>

          {/* WhatsApp Clickable Phone Number */}
          <p className="mb-2">
            📞 Phone:{" "}
            <a
              href="https://wa.me/919599955697"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              +91 9599955697 (WhatsApp)
            </a>
          </p>

          <p className="mb-2">
            ✉️ Email:{" "}
            <a
              href="mailto:Techziacademy@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              Techziacademy@gmail.com
            </a>
          </p>
          <p className="mb-2">
            📍 Address: Shaheed Bhagat Singh Chowk, 70 Feet Rd, Kirari Suleman
            Nagar, North West Delhi
          </p>

          {/* Business Hours */}
          <div className="mt-5">
            <h2 className="text-lg font-semibold">Business Hours</h2>
            <p>🕒 Monday - Saturday: 10 AM - 6 PM</p>
            <p>🕒 Sunday: Closed</p>
          </div>

          {/* Call-To-Action Button */}
          <div className="text-center mt-5">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300">
              Join Today Now
            </button>
          </div>
        </div>

        {/* Right Section - Inquiry Form */}
        <div className="md:w-1/2 w-full bg-white p-6 md:p-[50px] rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Get Expert Advice
          </h2>

          {/* Smooth Fade-out Success Message */}
          {successMessage && (
            <p
              className="text-green-600 text-center font-semibold mb-4 transition-opacity duration-1000 ease-in-out opacity-100"
            >
              {successMessage}
            </p>
          )}

          <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name Field (Only Alphabets & Spaces, Max 30 Characters) */}
            <input
              type="text"
              name="FullName"
              placeholder="Full Name"
              maxLength="30"
              pattern="^[A-Za-z\s]{1,30}$"
              title="Only alphabets are allowed (max 30 characters)"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ""))
              }
              required
            />

            {/* Phone Number Field (Only 10 Digits) */}
            <input
              type="text"
              name="Phone"
              placeholder="Phone Number"
              maxLength="10"
              pattern="^[0-9]{10}$"
              inputMode="numeric"
              title="Please enter a valid 10-digit phone number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
              required
            />

            {/* Email Field (Valid Email Format) */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Please enter a valid email address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Message Field (Max 150 Characters) */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              maxLength={150}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
