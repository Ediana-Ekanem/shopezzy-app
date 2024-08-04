import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaShoppingCart } from "react-icons/fa";
import { MdOutlineHelp } from "react-icons/md";
import logo from "/assets/icons/logo.svg";
// import SearchBar from "../searchbar/SearchBar";
import AccountDropdown from "../dropdown/AccountDropdown";
import Help from "../dropdown/Help";
import { useRecoilValue } from "recoil";
import { cartCountState } from "../../atoms/cartState";
import SearchComponent from "../searchbar/SearchComponent";

const Desktop = ({
  isAccountDropdownVisible,
  isHelpDropdownVisible,
  toggleAccountDropdown,
  toggleHelpDropdown,
  closeDropdowns,
}) => {
  const cartCount = useRecoilValue(cartCountState);

  return (
    <nav className="hidden md:flex text-lg items-center justify-between">
      <div className="flex gap-5 items-center">
        <div className="w-32">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <SearchComponent />
        </div>
      </div>
      <ul className="flex gap-5 items-center text-[16px]">
        <li className="hover:text-blue-500 transition-all">
          <Link to="/">Home</Link>
        </li>
        <div className="relative">
          <li
            onClick={toggleAccountDropdown}
            className="cursor-pointer flex items-center gap-1 hover:text-blue-500 transition-all"
          >
            <span>Account</span>
            <FaChevronDown
              className={`transform transition-transform duration-300 ${
                isAccountDropdownVisible ? "rotate-180" : "rotate-0"
              }`}
            />
          </li>
          {isAccountDropdownVisible && (
            <div className="relative z-10">
              <AccountDropdown />
              <div className="fixed inset-0" onClick={closeDropdowns}></div>
            </div>
          )}
        </div>
        <div className="relative">
          <li
            onClick={toggleHelpDropdown}
            className="cursor-pointer flex items-center gap-1 hover:text-blue-500 transition-all"
          >
            <MdOutlineHelp size={25} />
            <FaChevronDown
              className={`transform transition-transform duration-300 ${
                isHelpDropdownVisible ? "rotate-180" : "rotate-0"
              }`}
            />
          </li>
          {isHelpDropdownVisible && (
            <div className="relative z-10">
              <Help />
              <div className="fixed inset-0" onClick={closeDropdowns}></div>
            </div>
          )}
        </div>
        <li className="relative hover:text-blue-500 transition-all">
          <Link to="/cart">
            <FaShoppingCart size={25} />
            {cartCount > 0 && (
              <span className="absolute bottom-2 left-5 inline-flex items-center justify-center px-2 py-1 text-md font-bold leading-none text-blue-500 ">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Desktop;
