import React from "react";
import { Link } from "react-router-dom";
import {
  FaCcVisa,
  FaCcMastercard,
  FaWallet,
  FaCcDiscover,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "/assets/icons/logo.svg";

const Footer = () => {
  return (
    <div className="text-white bg-gradient-to-b from-gray-800 to-gray-900 py-10 font-Montserrat">
      <div className="container mx-auto flex flex-wrap justify-between px-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">
            <div className="w-32">
              <img src={logo} alt="logo" className="w-full" />
            </div>
          </h2>
          <p className="text-gray-400">
            400 Broadway Avenue, Suite 200 Coral <br /> Gables,
            <br /> Lagos Nigeria
          </p>
        </div>
        <div className="mb-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">Links</h3>
          <nav className="list-none">
            <li className="mb-2">
              <Link
                className="text-white hover:text-[#FEAB3A] transition duration-300"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-white hover:text-[#FEAB3A] transition duration-300"
                to="/account"
              >
                Account
              </Link>
            </li>
          </nav>
        </div>
        <div className="mb-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">Categories</h3>
          <nav className="list-none">
            <li className="mb-2">
              <Link
                className="text-white hover:text-[#FEAB3A] transition duration-300"
                to="/electronics"
              >
                Electronics
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-white hover:text-[#FEAB3A] transition duration-300"
                to="/fashion"
              >
                Fashion
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-white hover:text-[#FEAB3A] transition duration-300"
                to="/groceries"
              >
                Groceries
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-white hover:text-[#FEAB3A] transition duration-300"
                to="/sports"
              >
                Sports
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-white hover:text-[#FEAB3A] transition duration-300"
                to="/toy"
              >
                Toys
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-white hover:text-[#FEAB3A] transition duration-300"
                to="/babies"
              >
                Babies
              </Link>
            </li>
          </nav>
        </div>
        <div className="mb-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">Help</h3>
          <nav className="list-none">
            <li className="mb-2">
              <Link
                className="text-white hover:text-[#FEAB3A] transition duration-300"
                to="/help"
              >
                Help Center
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-white hover:text-[#FEAB3A] transition duration-300"
                to="/payment"
              >
                Payment Option
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-white hover:text-[#FEAB3A] transition duration-300"
                to="/order"
              >
                Track Order
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-white hover:text-[#FEAB3A] transition duration-300"
                to="/policy"
              >
                Policy
              </Link>
            </li>
          </nav>
        </div>
        <div className="mb-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">Payment</h3>
          <div className="flex space-x-4 mb-6">
            <FaCcVisa
              size={30}
              className="text-white hover:text-[#FEAB3A] transition duration-300"
            />
            <FaCcMastercard
              size={30}
              className="text-white hover:text-[#FEAB3A] transition duration-300"
            />
            <FaWallet
              size={30}
              className="text-white hover:text-[#FEAB3A] transition duration-300"
            />
            <FaCcDiscover
              size={30}
              className="text-white hover:text-[#FEAB3A] transition duration-300"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <div className="flex space-x-4">
            <FaFacebook
              size={30}
              className="text-white hover:text-[#FEAB3A] transition duration-300"
            />
            <FaInstagram
              size={30}
              className="text-white hover:text-[#FEAB3A] transition duration-300"
            />
            <FaTwitter
              size={30}
              className="text-white hover:text-[#FEAB3A] transition duration-300"
            />
            <FaWhatsapp
              size={30}
              className="text-white hover:text-[#FEAB3A] transition duration-300"
            />
          </div>
        </div>
      </div>
      <hr className="border-gray-700 my-4" />
      <p className="text-center text-sm text-gray-300">
        &copy; 2024 ShopEzzy. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
