import React, { useState } from "react";
import { auth } from "./firebase"; // Import Firebase auth instance
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { toast } from "react-toastify"; // Import toast

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful! Redirecting to dashboard..."); // Toaster notification
      navigate("/dashboard"); // Redirect to the dashboard
    } catch (error) {
      console.error("Error during login:", error.message);
      toast.error("Login failed: " + error.message); // Toaster notification
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-blue-400 via-teal-500 to-indigo-600 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96 max-w-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h1>
        <p className="text-center text-gray-600 mb-6">
          Welcome back! Please log in to your account.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 bg-indigo-600 text-white rounded-md shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          Login
        </button>

        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={() => navigate("/forgot-password")}
            className="text-blue-500 hover:underline transition duration-300"
          >
            Forgot Password?
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-500 hover:underline transition duration-300"
          >
            Back to Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
