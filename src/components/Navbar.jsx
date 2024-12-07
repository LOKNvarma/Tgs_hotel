import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo1.png"; // Add a logo that matches your home background style in `assets`

const Navbar = () => {
  const location = useLocation(); // Get the current route for active link highlighting

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-yellow-100 p-1">
      <div className="flex justify-between items-center max-w-7xl mx-auto ">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Restaurant Logo"
            className="h-12 w-12 rounded-full mr-3"
          />
          <h1 className="text-xl font-bold">TGS HoTeL</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link
            to="/"
            className={`hover:underline ${
              location.pathname === "/" ? "font-semibold underline" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/login"
            className={`hover:underline ${
              location.pathname === "/login" ? "font-semibold underline" : ""
            }`}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className={`hover:underline ${
              location.pathname === "/signup" ? "font-semibold underline" : ""
            }`}
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
