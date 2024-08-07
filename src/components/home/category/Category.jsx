import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbCategoryFilled } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  FaTshirt,
  FaHeartbeat,
  FaFutbol,
  FaGamepad,
  FaBook,
  FaShoppingCart,
  FaBaby,
  FaPaw,
  FaBriefcase,
} from "react-icons/fa";
import { GiElectricalResistance } from "react-icons/gi";

const categories = [
  { name: "Electronic", icon: <GiElectricalResistance /> },
  { name: "Fashion", icon: <FaTshirt /> },
  { name: "Health and Beauty", icon: <FaHeartbeat /> },
  { name: "Sports & Outdoors", icon: <FaFutbol /> },
  { name: "Toys & Games", icon: <FaGamepad /> },
  { name: "Books & Media", icon: <FaBook /> },
  { name: "Groceries", icon: <FaShoppingCart /> },
  { name: "Babies & Kids", icon: <FaBaby /> },
  { name: "Pet Supplies", icon: <FaPaw /> },
  { name: "Office Supplies", icon: <FaBriefcase /> },
];

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white py-10 md:py-10 md:shadow px-10 md:px-7 md:rounded-lg mt-10 md:mt-0">
      <nav className="text-slate-950 font-Montserrat">
        <div className="flex items-center gap-2 mb-4 md:mb-10">
          <TbCategoryFilled size={24} />
          <h3 className="font-bold">CATEGORIES</h3>
          <button
            className="ml-auto md:hidden text-slate-950"
            onClick={toggleDropdown}
          >
            {isOpen ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
          </button>
        </div>
        <ul
          className={`list-none space-y-3 ${
            isOpen ? "block" : "hidden"
          }  md:block`}
        >
          {categories.map((category) => (
            <li
              key={category.name}
              className="flex items-center md:w-44  p-2 md:border md:border-gray-200 md:shadow hover:text-yellow-600 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="md:hidden">{category.icon}</div>
              <Link
                to={`/${category.name
                  .toLowerCase()
                  .replace(/ & /g, "-")
                  .replace(/ /g, "")}`}
                className="ml-2"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Category;
