import React, { useState } from "react";
import { FaEdit, FaSave, FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Ediana Ekanem",
    email: "ed123@gmail.com",
    phone: "+123 456 7890",
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Implement save logic here (e.g., API call)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
        <div className="relative mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-gray-200"
          />
          <button
            onClick={handleEdit}
            className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-lg"
          >
            <FaEdit />
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">{profile.name}</h2>
        <div className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-gray-600 flex items-center">
                <FaEnvelope className="mr-2" /> {profile.email}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-gray-600 flex items-center">
                <FaPhone className="mr-2" /> {profile.phone}
              </p>
            )}
          </div>
          {isEditing && (
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              <FaSave className="inline mr-2" /> Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
