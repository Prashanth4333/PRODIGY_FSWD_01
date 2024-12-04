import React, { useState } from "react";
import { auth } from "./firebase"; // Import auth instance
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { toast } from "react-toastify"; // Import toast

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!"); // Toaster notification
    } catch (error) {
      console.error("Error during password reset:", error.message);
      toast.error("Error: " + error.message); // Toaster notification
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Forgot Password</h1>
        <p className="text-center text-gray-600 mb-6">
          Enter your email below to reset your password.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        
        <button
          onClick={handlePasswordReset}
          className="w-full py-3 bg-indigo-600 text-white rounded-md shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          Send Reset Link
        </button>

        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={() => navigate("/login")}
            className="w-full py-3 bg-gray-600 text-white rounded-md shadow-lg hover:bg-gray-700 transition duration-300"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
