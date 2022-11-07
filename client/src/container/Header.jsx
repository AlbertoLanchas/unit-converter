import React from "react";
import { RiArrowLeftRightLine } from "react-icons/ri";
import "../scss/Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <RiArrowLeftRightLine className="Header-icon" />
      <h1 className="Header-text">unit converter</h1>
    </div>
  );
};

export default Header;
