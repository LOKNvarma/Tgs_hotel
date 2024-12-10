import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo1.png";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
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
        >
          <motion.div>
            <Link
              to="/"
              className={`block md:inline text-sm ${
                location.pathname === "/" ? "font-extrabold " : "hover:underline"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </motion.div>

          {!isLoggedIn ? (
            <>
              <motion.div>
                <Link
                  to="/login"
                  className={`block md:inline text-sm ${
                    location.pathname === "/login" ? "font-extrabold " : "hover:underline"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              </motion.div>
              <motion.div>
                <Link
                  to="/signup"
                  className={`block md:inline text-sm ${
                    location.pathname === "/signup" ? "font-extrabold " : "hover:underline"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Signup
                </Link>
              </motion.div>
            </>
          ) : (
            <motion.div>
              <Link
                to="/"
                onClick={handleLogout}
                className="block md:inline text-sm hover:underline"
              >
                Logout
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
