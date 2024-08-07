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
import Container from "../container/Container";

const FooterSection = ({ title, items }) => (
  <div className="mb-6 flex flex-col">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <nav className="list-none">
      {items.map((item) => (
        <li key={item.text} className="mb-2">
          <Link
            className="text-white hover:text-[#FEAB3A] transition duration-300"
            to={item.link}
          >
            {item.text}
          </Link>
        </li>
      ))}
    </nav>
  </div>
);

const Footer = () => {
  const links = [
    { text: "Home", link: "/" },
    { text: "Account", link: "/account" },
  ];

  const categories = [
    { text: "Electronics", link: "/electronics" },
    { text: "Fashion", link: "/fashion" },
    { text: "Groceries", link: "/groceries" },
    { text: "Sports", link: "/sports" },
    { text: "Toys", link: "/toy" },
    { text: "Babies", link: "/babies" },
  ];

  const helpLinks = [
    { text: "Help Center", link: "/help" },
    { text: "Payment Option", link: "/payment" },
    { text: "Track Order", link: "/order" },
    { text: "Policy", link: "/policy" },
  ];

  const paymentIcons = [FaCcVisa, FaCcMastercard, FaWallet, FaCcDiscover];

  const socialIcons = [FaFacebook, FaInstagram, FaTwitter, FaWhatsapp];

  return (
    <div className="text-white bg-gradient-to-b from-gray-800 to-gray-900 py-10 font-Montserrat">
      <Container>
        <div className="container mx-auto md:flex flex-wrap justify-between px-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">
              <div className="w-32">
                <img src={logo} alt="ShopEzzy logo" className="w-full" />
              </div>
            </h2>
            <p className="text-gray-400">
              400 Broadway Avenue, Suite 200 Coral <br /> Gables,
              <br /> Lagos Nigeria
            </p>
          </div>

          <FooterSection title="Links" items={links} />
          <FooterSection title="Categories" items={categories} />
          <FooterSection title="Help" items={helpLinks} />

          <div className="mb-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Payment</h3>
            <div className="flex space-x-4 mb-6">
              {paymentIcons.map((Icon, index) => (
                <Icon
                  key={index}
                  size={30}
                  className="text-white hover:text-[#FEAB3A] transition duration-300"
                />
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <div className="flex space-x-4">
              {socialIcons.map((Icon, index) => (
                <Icon
                  key={index}
                  size={30}
                  className="text-white hover:text-[#FEAB3A] transition duration-300"
                />
              ))}
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-4" />
        <p className="text-center text-sm text-gray-300">
          &copy; 2024 ShopEzzy. All rights reserved.
        </p>
      </Container>
    </div>
  );
};

export default Footer;
