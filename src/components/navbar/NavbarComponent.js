import React from "react";
import { Link } from "react-router-dom";
import breakingbadlogo from "../../img/breaking-bad-logo.svg";
import bettercallsaul from "../../img/saul-logo.png";
import hamburgericon from "../../img/icon-hamburger.svg";
import closeIcon from "../../img/icon-close.svg";
import NavbarStyle from "./NavbarStyles";

const NavbarComponent = () => {
  const mobileDisplay = () => {
    const navLinks = document.querySelector(".nav-links");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      hamburgerIcon.src = closeIcon;
    } else {
      hamburgerIcon.src = hamburgericon;
    }
  };

  return (
    <NavbarStyle>
      <div className="logo">
        <img src={breakingbadlogo} alt="Breaking Bad Logo" />
        <img
          src={bettercallsaul}
          alt="Better Call Saul Logo"
          className="saul-logo"
        />
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={mobileDisplay}>
        <img
          src={hamburgericon}
          alt="Hamburger Icon"
          className="hamburger-icon"
        />
      </div>
    </NavbarStyle>
  );
};

export default NavbarComponent;
