import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      // Perform logout logic here (e.g., clear user data, tokens, etc.)
      // For example: await authService.logout();

      // Redirect to the login page or home page after logout
      navigate("/login"); // Change '/login' to your desired route
    } catch (error) {
      console.error("Logout error:", error);
      // Optionally show an error message to the user
    } finally {
      setLoading(false);
    }
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
            aria-label="Cancel Logout"
          >
            Cancel
          </button>
          <button
            className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleLogout}
            disabled={loading}
            aria-label="Log Out"
          >
            {loading ? "Logging out..." : "Log Out"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
