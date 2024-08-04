import React, { useState } from "react";
import Container from "../container/Container";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Navbar = () => {
  const [isAccountDropdownVisible, setAccountDropdownVisible] = useState(false);
  const [isHelpDropdownVisible, setHelpDropdownVisible] = useState(false);

  const toggleAccountDropdown = () => {
    setAccountDropdownVisible(!isAccountDropdownVisible);
    if (isHelpDropdownVisible) {
      setHelpDropdownVisible(false);
    }
  };

  const toggleHelpDropdown = () => {
    setHelpDropdownVisible(!isHelpDropdownVisible);
    if (isAccountDropdownVisible) {
      setAccountDropdownVisible(false);
    }
  };

  const closeDropdowns = () => {
    setAccountDropdownVisible(false);
    setHelpDropdownVisible(false);
  };

  // bg-slate-700 text-white

  return (
    <div className="bg-[#FEAB3A] text-white shadow-2xl py-10 font-Montserrat sticky z-50 top-0 w-full">
      <nav className="text-shadow-xl font-bold ">
        <Container>
          <Desktop
            isAccountDropdownVisible={isAccountDropdownVisible}
            isHelpDropdownVisible={isHelpDropdownVisible}
            toggleAccountDropdown={toggleAccountDropdown}
            toggleHelpDropdown={toggleHelpDropdown}
            closeDropdowns={closeDropdowns}
          />
          <Mobile
            isAccountDropdownVisible={isAccountDropdownVisible}
            isHelpDropdownVisible={isHelpDropdownVisible}
            toggleAccountDropdown={toggleAccountDropdown}
            toggleHelpDropdown={toggleHelpDropdown}
            closeDropdowns={closeDropdowns}
          />
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
