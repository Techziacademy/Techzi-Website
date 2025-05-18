import React from 'react';
import { motion } from 'framer-motion';

const registrations = [
  { name: "Ministry of Electronics and Information Technology (MeitY)", status: "Registered", country: "Government of India" },
  { name: "Quality Council of India (QCI)", status: "Registered", country: "Government of India" },
  { name: "Ministry of Health and Family Welfare", status: "Registered", country: "Government of India" },
  { name: "Ministry of Youth Affairs and Sports", status: "Registered", country: "Government of India" },
  { name: "Ministry of Earth Sciences", status: "Registered", country: "Government of India" },
  { name: "BOSSE Board", status: "Accredited", country: "Government of India" },
  { name: "Directorate General of Employment & Training (DGE&T)", status: "Accredited", country: "Government of India" },
  { name: "Central Vigilance Commission", status: "Registered", country: "Government of India" },
  { name: "National Human Rights Commission", status: "Registered", country: "India" },
  { name: "UNESCO-UNEVOC Organisation", status: "Registered", country: "Global" },
];

function Registrations() {
  return (
    <section id="Registrations" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recognized & Registered Organizations
        </motion.h2>
        <p className="text-gray-600 mb-10">
          Our organization is proudly registered and accredited by various esteemed government bodies.
        </p>

        <div className="space-y-6">
          {registrations.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Left side: Text and Description */}
              <div className="lg:w-1/2 text-left">
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="text-gray-500">{item.status} - {item.country}</p>
              </div>
              
              {/* Right side: Optional Logo or Icon */}
              <div className="lg:w-1/2 flex justify-center items-center">
                <i className="fas fa-check-circle text-6xl text-green-500"></i> {/* Replace with an actual logo/icon */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Registrations;
