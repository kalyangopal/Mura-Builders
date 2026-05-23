import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-[#1f1b1d] text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* ABOUT SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-yellow-500 uppercase tracking-widest text-lg mb-4">
              Welcome To
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              MuRa Builders
            </h1>

            <div className="w-32 h-1 bg-yellow-500 mb-14"></div>

            <h2 className="text-2xl md:text-3xl italic font-light leading-relaxed text-gray-200">
              Since 2022, we have been delivering reliable construction
              solutions with quality craftsmanship and customer satisfaction.
            </h2>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-9 text-gray-200">
              With a passion for excellence and attention to detail, we
              transform ideas into structures that stand the test of time.
              From planning and design to execution and final delivery, our
              team ensures every project is completed with precision, safety,
              and customer satisfaction as the top priority.
              <br />
              <br />
              At Muraa Builders, we believe every building tells a story.
              Our mission is to create spaces that are visually impressive,
              functional, durable, and sustainable.
            </p>
          </motion.div>
        </div>

        {/* WHY CHOOSE US */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-4xl font-bold mb-10 text-center">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "High-Quality Construction Standards",
              "Experienced & Skilled Team",
              "On-Time Project Delivery",
              "Transparent Communication",
              "Customer-Centric Approach",
              "Modern Design & Engineering Solutions",
              "Safety & Sustainability Focused",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="border border-gray-700 p-6 rounded-xl hover:border-yellow-500 transition duration-300 bg-[#2a2527] backdrop-blur-md"
              >
                <p className="text-lg text-gray-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* VISION & MISSION */}
        <div className="grid lg:grid-cols-2 gap-16 mt-24">
          
          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#2a2527] p-8 rounded-2xl"
          >
            <h2 className="text-4xl font-bold mb-8 text-yellow-500">
              Our Vision
            </h2>

            <ul className="space-y-4 text-gray-200 text-lg leading-8 list-disc pl-5">
              <li>To become one of the most trusted construction companies.</li>
              <li>Deliver innovative and sustainable construction solutions.</li>
              <li>Create landmarks with strength and aesthetic excellence.</li>
              <li>Adopt modern engineering and construction technologies.</li>
              <li>Build long-term client relationships through trust.</li>
            </ul>
          </motion.div>

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#2a2527] p-8 rounded-2xl"
          >
            <h2 className="text-4xl font-bold mb-8 text-yellow-500">
              Our Mission
            </h2>

            <ul className="space-y-4 text-gray-200 text-lg leading-8 list-disc pl-5">
              <li>Provide high-quality construction services.</li>
              <li>Complete projects on time with superior workmanship.</li>
              <li>Maintain transparency and professionalism.</li>
              <li>Prioritize customer satisfaction and support.</li>
              <li>Build sustainable and durable structures.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;