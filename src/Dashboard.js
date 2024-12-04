import React from "react";
import { auth } from "./firebase"; // Import auth instance
import { signOut } from "firebase/auth";
import { toast } from "react-toastify"; // Import toast for notifications

const Dashboard = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!"); // Toaster notification for logout success
    } catch (error) {
      console.error("Error during logout:", error.message);
      toast.error("Error during logout: " + error.message); // Toaster notification for logout failure
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to the Dashboard!</h1>

        <p className="text-lg text-gray-600 mb-8">
          Hello, I'm Prashanth, a <strong>B.Tech 4th-year student</strong> with a passion for <strong>web development</strong>. I aspire to build dynamic and responsive web applications and continuously improve my skills. Check out my links below for more about me!
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Follow Me</h2>
          <ul className="text-lg text-blue-500">
            <li>
              <a href="https://www.linkedin.com/in/prashanth-chittimalla/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/Prashanth4333" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            </li>
            <li>
              <a href="https://profile-website-4333.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">Personal Portfolio</a>
            </li>
            <li>
              <a href="https://www.instagram.com/Prashanth4333/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            </li>
          </ul>
        </div>

        <button
          onClick={handleLogout}
          className="mt-4 px-6 py-3 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition duration-300"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
