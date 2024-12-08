import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Framer Motion Variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 0 20px rgba(255, 223, 107, 0.8)",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const navLinkContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const navLinkVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.1,
      color: "#facc15", // Soft golden color on hover
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-yellow-100 p-1 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <motion.div
          className="flex items-center cursor-pointer"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={logoVariants}
        >
          <motion.img
            src={logo}
            alt="Restaurant Logo"
            className="h-12 w-12 rounded-full mr-3"
          />
          <h1 className="text-xl font-bold tracking-wide">TGS HoTeL</h1>
        </motion.div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="text-2xl">&#9776;</span> {/* Hamburger Icon */}
        </button>

        {/* Navigation Links */}
        <motion.div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-gray-800 md:bg-transparent md:static md:w-auto md:flex gap-6 p-4 md:p-0`}
          initial="hidden"
          animate="visible"
          variants={navLinkContainerVariants}
        >
          {[
            { to: "/", label: "Home" },
            { to: "/login", label: "Login" },
            { to: "/signup", label: "Signup" },
          ].map((link, index) => (
            <motion.div key={index} variants={navLinkVariants}>
              <Link
                to={link.to}
                className={`block md:inline text-sm ${
                  location.pathname === link.to
                    ? "font-semibold underline"
                    : "hover:underline"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
