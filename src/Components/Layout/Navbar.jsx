import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        sticky
          ? "bg-black/80 backdrop-blur-md shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-5 md:px-16">

        {/* LOGO */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-bold text-2xl md:text-4xl text-white cursor-pointer"
        >
          MuRa{" "}
          <span className="text-yellow-500">
            Builders
          </span>
        </motion.h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-white font-semibold">
          {navLinks.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-yellow-500 transition duration-300"
            >
              <Link to={item.path}>{item.name}</Link>
            </motion.li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-black/95 backdrop-blur-xl px-6 pb-8"
          >
            <ul className="flex flex-col gap-5 text-white text-lg font-semibold">
              {navLinks.map((item, index) => (
                <motion.li
                  key={index}
                  whileTap={{ scale: 0.95 }}
                  className="border-b border-gray-700 pb-3"
                >
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="hover:text-yellow-500 transition duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;