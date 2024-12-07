import React from "react";
import restBg from "../assets/rest-bg.jpg"; // Add a restaurant-themed background image in `assets`
import menu from "../assets/menu2.png"
import room from "../assets/room.png"
const Home = () => {
  const handleBooking = () => {
    alert("Booking system coming soon!"); // Replace with actual booking functionality
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
      <div className="relative z-10 text-center p-4">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400">
            Welcome to Grand Saraswati
          </span>
        </h1>
        <p className="text-lg md:text-xl text-yellow-100">
          Experience the perfect blend of taste and luxury.
        </p>
        {/* "Book a Table" Button */}
        <div className="mt-20 ">
          <button
            onClick={handleBooking}
            className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-yellow-300 to-orange-700 text-black rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Book Hotel
          </button>
        </div>
      </div> 
     
    </div>
    <div className="secondPage  px-20 py-20  h-screen flex flex-row items-center justify-center justify-evenly bg-gray-900 text-white">
      <div className="box1 flex flex-col items-center">
      <div className="menu relative bg-cover bg-center h-96 w-96 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl "
        style={
          {backgroundImage : `url(${menu})`}
        }
        ></div>
         <button
            onClick={handleBooking}
            className=" mt-10  px-10 py-2  text-lg font-semibold bg-gradient-to-r from-yellow-300 to-orange-700 text-black rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
           Menu
          </button>
      </div>
       <div className="box2 flex flex-col items-center">
       <div  className="hotel relative bg-cover bg-center h-96 w-96 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
         style={
          {backgroundImage : `url(${room})`}
        }
        ></div>
        <button
            onClick={handleBooking}
            className=" mt-10  px-10 py-2  text-lg font-semibold bg-gradient-to-r from-yellow-300 to-orange-700 text-black rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
           Book Room
          </button>
       </div>
    </div>
    </>
  );
};

export default Home;
