import React from "react";
import { Link } from "react-router-dom";
import { TbCategoryFilled } from "react-icons/tb";

const Category = () => {
  return (
    <div className="bg-white py-10 shadow px-10 md:rounded-lg mt-10 md:mt-0">
      <nav className="text-slate-950 font-Montserrat">
        <div className="flex items-center gap-2 mb-10">
          <TbCategoryFilled />
          <h3 className="font-bold">CATEGORIES</h3>
        </div>
        <ul className="list-none space-y-3">
          <li className=" hover:text-yellow-600 transition-all duration-300 border border-gray-200 ps-5 py-2 px-20 shadow hover:transform hover:scale-110">
            <Link to="/electronic">Electronic</Link>
          </li>
          <li className="hover:text-yellow-600 transition-all duration-300 border border-gray-200  ps-5 p-2 shadow hover:transform hover:scale-110">
            <Link to="/fashion">Fashion</Link>
          </li>
          <li className="hover:text-yellow-600 transition-all duration-300 border border-gray-200  ps-5 p-2 shadow hover:transform hover:scale-110">
            <Link to="/health">Health and Beauty</Link>
          </li>
          <li className="hover:text-yellow-600 transition-all duration-300 border border-gray-200  ps-5 p-2 shadow hover:transform hover:scale-110">
            <Link to="/sports">Sports & Outdoors</Link>
          </li>
          <li className="hover:text-yellow-600 transition-all duration-300 border border-gray-200  ps-5 p-2 shadow hover:transform hover:scale-110">
            <Link to="/toys">Toys & Games</Link>
          </li>
          <li className="hover:text-yellow-600 transition-all duration-300 border border-gray-200  ps-5 p-2 shadow hover:transform hover:scale-110">
            <Link to="/books">Books & Media</Link>
          </li>
          <li className="hover:text-yellow-600 transition-all duration-300 border border-gray-200  ps-5 p-2 shadow hover:transform hover:scale-110">
            <Link to="/groceries">Groceries</Link>
          </li>
          <li className="hover:text-yellow-600 transition-all duration-300 border border-gray-200  ps-5 p-2 shadow hover:transform hover:scale-110">
            <Link to="/babies">Babies & Kids</Link>
          </li>
          <li className="hover:text-yellow-600 transition-all duration-300 border border-gray-200  ps-5 p-2 shadow hover:transform hover:scale-110">
            <Link to="/pet">Pet Supplies</Link>
          </li>
          <li className="hover:text-yellow-600 transition-all duration-300 border border-gray-200  ps-5 p-2 shadow hover:transform hover:scale-110">
            <Link to="/office">Office Supplies</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Category;
