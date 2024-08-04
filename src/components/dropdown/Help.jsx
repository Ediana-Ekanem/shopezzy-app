import React from "react";
import { Link } from "react-router-dom";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlinePolicy } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";

const Help = () => {
  return (
    <div className="absolute md:-right-20 md:mt-12 w-[250px] bg-gradient-to-r from-gray-50 to-white text-black shadow-xl rounded-lg z-20">
      <ul className="flex flex-col">
        <li className="px-4 py-3 hover:bg-blue-100 hover:text-blue-700 hover:rounded-lg transition-colors duration-300 w-full border-b border-gray-200">
          <Link to="/help" className="flex items-center gap-2 text-md">
            <IoHelpCircleOutline size={20} />
            <span className="font-normal">Help Center</span>
          </Link>
        </li>
        <li className="px-4 py-3 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300 w-full border-b border-gray-200">
          <Link to="/order" className="flex items-center gap-2 text-md">
            <MdOutlineLocalShipping size={20} />
            <span className="font-normal">Track my order</span>
          </Link>
        </li>
        <li className="px-4 py-3 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300 w-full rounded-b-lg">
          <Link to="/policy" className="flex items-center gap-2 text-md">
            <MdOutlinePolicy size={20} />
            <span className="font-normal">ShopEzzy return policy</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Help;
