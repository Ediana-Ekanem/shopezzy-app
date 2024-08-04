import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear user data, tokens, etc.)

    // Redirect to the login page or home page after logout
    navigate("/login"); // Change '/login' to your desired route
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4">Log Out</h1>
        <p className="text-gray-700 mb-6">Are you sure you want to log out?</p>
        <div className="flex justify-between">
          <button
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
