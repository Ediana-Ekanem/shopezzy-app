import React from "react";
import { Link } from "react-router-dom";
import { SlUser, SlLogin, SlLogout } from "react-icons/sl";

const AccountDropdown = () => {
  return (
    <div className="absolute left-0 md:mt-12 w-48 bg-gradient-to-r from-gray-100 to-white text-black shadow-2xl rounded-lg z-20">
      <ul className="flex flex-col">
        <li className="w-full border-b border-gray-300 rounded-t-lg">
          <Link
            to="/profile"
            className="flex items-center space-x-3 py-3 px-4 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300 rounded-t-lg"
          >
            <SlUser size={20} />
            <span className="text-md font-normal">Profile</span>
          </Link>
        </li>
        <li className="w-full border-b border-gray-300">
          <Link
            to="/login"
            className="flex items-center space-x-3 py-3 px-4 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
          >
            <SlLogin size={20} />
            <span className="text-md font-normal">Sign In</span>
          </Link>
        </li>
        <li className="w-full rounded-b-lg">
          <Link
            to="/logout"
            className="flex items-center space-x-3 py-3 px-4 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300 rounded-b-lg"
          >
            <SlLogout size={20} />
            <span className="text-md font-normal">Log Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountDropdown;
