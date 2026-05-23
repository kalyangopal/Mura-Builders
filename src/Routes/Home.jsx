import React from "react";
import { motion } from "framer-motion";

import homeimg from "../assets/images/homeimg.jpg";

const Home = () => {

  // SCROLL FUNCTION
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src={homeimg}
        alt="Construction"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-20">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="
              text-white
              font-extrabold
              leading-tight
              uppercase
              text-5xl
              sm:text-6xl
              md:text-7xl
            "
          >
            We Will <br />
            Build Your <br />
            Dream
          </motion.h1>

          {/* YELLOW LINE */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-2 bg-yellow-500 mt-8 mb-8"
          ></motion.div>

          {/* PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="
              text-white
              text-lg
              md:text-2xl
              leading-9
              max-w-xl
            "
          >
            Modern construction solutions crafted with quality,
            innovation, and trust since 2022.
          </motion.p>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="
              mt-10
              bg-yellow-500
              hover:bg-yellow-400
              text-black
              font-bold
              px-8
              py-4
              rounded-xl
              transition
              duration-300
            "
          >
            GET FREE CONSULTATION CALL
          </motion.button>

        </motion.div>
      </div>
    </section>
  );
};

export default Home;