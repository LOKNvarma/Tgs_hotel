import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../assets/rest-bg.jpg";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state
    setLoading(true);

    const apiUrl = "https://hotel-tgs.onrender.com/auth/login";

    try {
        const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        localStorage.setItem("isLoggedIn", "true"); // Set user as logged in
        setIsLoggedIn(true); // Update login state
        navigate("/", { state: { success: true } }); // Redirect to home  
      } else {
        // Handle login errors
        const errorData = await response.json();
        setError(errorData.message || "Invalid login credentials.");
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
          <h2 className="text-2xl text-yellow-300 font-bold mb-6 text-center">Login</h2>
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center" aria-live="assertive">
              {error}
            </p>
          )}
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
