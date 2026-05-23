import React from "react";
import { motion } from "framer-motion";

import {
  Building2,
  PencilRuler,
  FileText,
  Headset,
  Hammer,
  Wrench,
  ClipboardList,
  Paintbrush,
  CheckCircle2,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Building2 size={40} />,
      title: "BUILDING RENOVATION",
      desc: "Modern renovation solutions with quality craftsmanship.",
    },
    {
      icon: <Hammer size={40} />,
      title: "CONSTRUCTION SERVICES",
      desc: "Reliable construction services for all project sizes.",
    },
    {
      icon: <PencilRuler size={40} />,
      title: "DESIGN & PLANNING",
      desc: "Creative planning and smart architectural designs.",
    },
    {
      icon: <FileText size={40} />,
      title: "DOCUMENTATION",
      desc: "Complete project documentation with transparency.",
    },
    {
      icon: <Paintbrush size={40} />,
      title: "INTERIOR DESIGN",
      desc: "Stylish and functional interior design solutions.",
    },
    {
      icon: <Headset size={40} />,
      title: "CUSTOMER SUPPORT",
      desc: "Dedicated support for smooth project communication.",
    },
  ];

  const process = [
    {
      icon: <ClipboardList size={45} />,
      title: "PLANNING",
      desc: "Understanding your vision and project requirements.",
    },
    {
      icon: <Wrench size={45} />,
      title: "DESIGN",
      desc: "Creating innovative and practical construction designs.",
    },
    {
      icon: <Building2 size={45} />,
      title: "BUILDING",
      desc: "Executing projects with quality workmanship and safety.",
    },
    {
      icon: <CheckCircle2 size={45} />,
      title: "FINISH",
      desc: "Delivering completed projects with perfection and care.",
    },
  ];

  return (
    <section className="bg-[#f3f3f3] py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">

        {/* TOP TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="w-28 h-1 bg-yellow-500 mx-auto mb-6"></div>

          <p className="uppercase tracking-[5px] text-yellow-600 text-lg mb-4">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            WHAT WE OFFER
          </h2>

          <div className="w-40 h-1 bg-yellow-500 mx-auto mt-8"></div>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 mb-28">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg group hover:shadow-2xl transition duration-500"
            >
              {/* ICON */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="border-2 border-yellow-500 rounded-2xl p-5 w-fit text-black group-hover:bg-yellow-500 transition duration-300 mb-6"
              >
                {service.icon}
              </motion.div>

              {/* CONTENT */}
              <h3 className="text-2xl font-bold mb-4 text-black leading-snug">
                {service.title}
              </h3>

              <p className="text-gray-700 text-lg leading-9">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* PROCESS TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-yellow-600 text-lg mb-4">
            Step By Step Process
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            HOW IT'S WORKING
          </h2>

          <div className="w-40 h-1 bg-yellow-500 mx-auto mt-8"></div>
        </motion.div>

        {/* PROCESS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -12 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="border-2 border-yellow-500 rounded-2xl p-10 text-center bg-white shadow-lg hover:shadow-2xl transition duration-500"
            >
              {/* ICON CIRCLE */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.05 }}
                className="w-28 h-28 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 text-black"
              >
                {item.icon}
              </motion.div>

              {/* TITLE */}
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 text-lg leading-8">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;