import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../assets/rest-bg.jpg";

const Signup = ({ setIsLoggedIn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook to handle navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    setLoading(true);

    const apiUrl = "https://hotel-tgs.onrender.com/auth/signup";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({ name, email, phoneNumber }),
      });

      if (response.ok) {
        setSuccess(true);
        localStorage.setItem("isLoggedIn", "true"); // Set user as logged in
        setIsLoggedIn(true); // Update login state
        navigate("/", { state: { message: "Signup successful!" } }); // Redirect with success message
      } else {
        const errorData = await response.json();
        setError(errorData.error || "User already exists.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex bg-cover bg-center items-center justify-center min-h-screen bg-gray-800 px-4"
      style={{
        backgroundImage: `url(${back})`,
      }}
    >
      <div className="absolute flex items-center justify-center inset-0 bg-black bg-opacity-50">
        <form
          className="bg-gray-900 shadow-md rounded px-6 sm:px-8 pt-6 pb-8 w-full max-w-sm"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl text-yellow-300 sm:text-3xl font-bold mb-6 text-center">
            Signup
          </h2>
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}
        
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-yellow-200 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              id="username"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-yellow-200 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-yellow-200 text-sm font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            className={`${
              loading ? "bg-gray-300" : "bg-yellow-300 hover:bg-yellow-400"
            } text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-200`}
            disabled={loading}
          >
            {loading ? "Signing up..." : "Signup"}   
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
