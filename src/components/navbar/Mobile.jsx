import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaShoppingCart, FaTimes, FaBars } from "react-icons/fa";
import { MdOutlineHelp } from "react-icons/md";
import logo from "/assets/icons/logo.svg";
// import SearchBar from "../searchbar/SearchBar";
import AccountDropdown from "../dropdown/AccountDropdown";
import Help from "../dropdown/Help";
import { useRecoilValue } from "recoil";
import { cartCountState } from "../../atoms/cartState";
import Container from "../container/Container";
import SearchComponent from "../searchbar/SearchComponent";

const Mobile = ({
  isAccountDropdownVisible,
  isHelpDropdownVisible,
  toggleAccountDropdown,
  toggleHelpDropdown,
  closeDropdowns,
}) => {
  const [nav, setNav] = useState(false);
  const cartCount = useRecoilValue(cartCountState);

  const handleClick = () => setNav(!nav);

  return (
    <div className="md:hidden">
      <div className="flex justify-between items-center py-2">
        <div className="w-32">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div onClick={handleClick}>
          {nav ? <FaTimes size={29} /> : <FaBars size={29} />}
        </div>
      </div>

      {nav && (
        <div className="flex flex-col items-center bg-[#FEAB3A] text-white text-lg space-y-5 mt-2">
          <div className="w-full flex justify-center py-2">
            <Container>
              <SearchComponent />
            </Container>
          </div>
          <ul className="flex flex-col gap-3 md:gap-5 items-center text-[16px]">
            <li className="hover:text-blue-500 transition-all">
              <Link to="/" onClick={handleClick}>
                Home
              </Link>
            </li>
            <div className="relative w-full">
              <li
                onClick={toggleAccountDropdown}
                className="cursor-pointer flex items-center gap-1 justify-between px-5 py-3 hover:text-blue-500 transition-all w-full"
              >
                <span>Account</span>
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    isAccountDropdownVisible ? "rotate-180" : "rotate-0"
                  }`}
                />
              </li>
              {isAccountDropdownVisible && <AccountDropdown isMobile={true} />}
            </div>
            <div className="relative w-full">
              <li
                onClick={toggleHelpDropdown}
                className="cursor-pointer flex items-center gap-1 justify-between px-5 py-3 hover:text-blue-500 transition-all w-full"
              >
                <MdOutlineHelp size={25} />
                <span>Help</span>
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    isHelpDropdownVisible ? "rotate-180" : "rotate-0"
                  }`}
                />
              </li>
              {isHelpDropdownVisible && <Help isMobile={true} />}
            </div>
            <li className="relative hover:text-blue-500 transition-all">
              <Link
                to="/cart"
                onClick={handleClick}
                className="flex items-center"
              >
                <FaShoppingCart size={25} />
                {cartCount > 0 && (
                  <span className="absolute bottom-2 left-4  inline-flex items-center justify-center px-2 py-1 text-md font-bold leading-none text-blue-500 ">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Mobile;
