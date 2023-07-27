import React from "react";
import "./Header.css";
import Logo from "../images/logo.png";
const Header = () => {
  return (
    <header>
      {/*    <div className="navbar clear nav-top">
        <div className="row content">
          <img className="logo" src={Logo} alt="Logo" />

          <a
            className="right"
            style={{ textDecoration: "none" }}
            href="tel:05815457424"
          >
            <i className="fas fa-phone"></i>&nbsp; (058154) 57424
          </a>
          <a
            className="right"
            style={{ textDecoration: "none" }}
            href="tel:03400596665"
          >
            <i className="fas fa-phone"></i>&nbsp; 0340-0596665
          </a>
          <a
            className="right"
            href="mailto:info@rinor.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-paper-plane"></i>&nbsp; info@rinor.com
          </a>
        </div>
      </div>*/}
      <div className="navbar clear nav-top">
        <div className="row content">
          <img className="logo" src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
