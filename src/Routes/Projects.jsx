import React from "react";
import { motion } from "framer-motion";

import Arasarkulam from "../assets/images/arasarkulam-project.jpeg";
import Interior from "../assets/images/arasarkulam-interior.jpeg";
import Roof from "../assets/images/arasarkulam-roof.jpeg";
import Future from "../assets/images/future-project.jpg";
import Front from "../assets/images/front-view.jpg";
import Living from "../assets/images/living-space.jpg";
import Moden from "../assets/images/modern-living.jpg";

function Projects() {
  const projects = [
    {
      image: Arasarkulam,
      title: "Arasarkulam Project",
      location: "Arasarkulam, Pudukkottai, Tamil Nadu",
    },
    {
      image: Interior,
      title: "Interior Renovation",
      location: "Villupuram, Tamil Nadu",
    },
    {
      image: Roof,
      title: "Roofing Project",
      location: "Karaikudi, Tamil Nadu",
    },
    {
      image: Front,
      title: "Modern House Project",
      location: "Erode, Tamil Nadu",
    },
    {
      image: Living,
      title: "Living Room Design",
      location: "Trichy, Tamil Nadu",
    },
    {
      image: Moden,
      title: "Modern Living Space",
      location: "Pudukkottai, Tamil Nadu",
    },
  ];

  return (
    <section className="bg-[#1f1b1d] py-20 text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-yellow-500 text-lg mb-4">
            Our Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            FUTURE PROJECTS
          </h2>

          <div className="w-40 h-1 bg-yellow-500 mx-auto mb-8"></div>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-9 md:leading-10">
            To fulfill your dream is our future project. We build spaces
            with trust, quality, innovation, and excellence for modern
            living.
          </p>
        </motion.div>

        {/* FEATURED PROJECT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-20 group"
        >
          {/* IMAGE */}
          <motion.img
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            src={Future}
            alt="Featured Project"
            className="w-full h-[400px] md:h-[600px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-yellow-500 uppercase tracking-[4px] mb-4"
            >
              Featured Project
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6"
            >
              Dream Home Construction
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-base md:text-xl text-gray-200 max-w-2xl leading-8 md:leading-10"
            >
              Building modern and elegant living spaces designed for
              comfort, durability, and timeless beauty.
            </motion.p>
          </div>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#2a2527] rounded-2xl overflow-hidden shadow-xl group backdrop-blur-md"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-lg leading-8">
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;