import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import restBg from "../assets/rest-bg.jpg";
import menu from "../assets/menu.png";
import room from "../assets/room.png";

const Home = () => {
  const handleBooking = () => {
    alert("Booking system coming soon!");
  };

  // Animation Variants
  const greetingVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const shimmerVariants = {
    shimmer: {
      backgroundPosition: ["0% 50%", "100% 50%"],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, delay: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, delay: 1.2, ease: "easeOut" },
    },
  };

  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${restBg})`,
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Greeting Section */}
        <motion.div
          className="relative z-10 text-center p-4"
          initial="hidden"
          animate="visible"
          variants={greetingVariants}
        >
          {/* Shimmering Gradient Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600"
            variants={shimmerVariants}
            style={{
              backgroundSize: "200% 200%",
              animation: "luxuryShimmer 4s infinite alternate",
            }}
          >
            Welcome to Grand Saraswati
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-yellow-200 mt-4 font-light "
            variants={textVariants}
          >
            A destination where elegance meets indulgence.
          </motion.p>

          {/* Animated Button */}
          <motion.div className="mt-10" variants={buttonVariants}>
          
           <button
              onClick={handleBooking}
              className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-gold-400 to-yellow-600 text-yellow-200 rounded-full shadow-2xl transition transform hover:scale-105 hover:shadow-gold-700"
              style={{
                boxShadow:
                  "0 0 20px rgba(255, 223, 107, 0.6), 0 0 40px rgba(255, 223, 107, 0.4)",
              }}
            >
              Book Hotel
            </button>
        
          </motion.div>
        </motion.div>
      </div>

      {/* Second Page */}
      <div className="secondPage px-6 sm:px-10 lg:px-20 py-10 md:py-20 flex flex-col md:flex-row items-center justify-center md:justify-evenly bg-gray-900 text-white">
        {/* Menu Section */}
        <div className="box1 flex flex-col items-center mb-10 md:mb-0">
          <motion.div
            className="menu bg-cover bg-center h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundImage: `url(${menu})`,
            }}
            initial="hidden"
            animate="visible"
            variants={greetingVariants}
          ></motion.div>
         <Link to="/menu">
         <motion.button
            
            className="mt-6 sm:mt-10 px-6 sm:px-10 py-2 text-sm sm:text-lg 
             font-semibold bg-gradient-to-r from-yellow-300 to-orange-700
             text-black rounded-lg shadow-lg transform transition-all duration-300
              hover:scale-105 hover:shadow-2xl"
            variants={buttonVariants}
          >
            Menu
          </motion.button>
         </Link>
        </div>

        {/* Room Section */}
        <div className="box2 flex flex-col items-center">
          <motion.div
            className="hotel bg-cover bg-center h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundImage: `url(${room})`,
            }}
            initial="hidden"
            animate="visible"
            variants={greetingVariants}
          ></motion.div>
          <motion.button
            onClick={handleBooking}
            className="mt-6 sm:mt-10 px-6 sm:px-10 py-2 text-sm sm:text-lg font-semibold bg-gradient-to-r from-yellow-300 to-orange-700 text-black rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            variants={buttonVariants}
          >
            Book Room
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Home;
