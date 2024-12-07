import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-yellow-100 p-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Restaurant Logo"
            className="h-12 w-12 rounded-full mr-3"
          />
          <h1 className="text-xl font-bold">TGS HoTeL</h1>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="text-2xl">&#9776;</span> {/* Hamburger Icon */}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-gray-800 md:bg-transparent md:static md:w-auto md:flex gap-6 p-4 md:p-0`}
        >
          <Link
            to="/"
            className={`block md:inline hover:underline ${
              location.pathname === "/" ? "font-semibold underline" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/login"
            className={`block md:inline hover:underline ${
              location.pathname === "/login" ? "font-semibold underline" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className={`block md:inline hover:underline ${
              location.pathname === "/signup" ? "font-semibold underline" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
