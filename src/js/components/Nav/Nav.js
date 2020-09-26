import React from "react";

import cureLogo from "../../../static/img/cure-logo.png";
import NavLinks from "./NavLinks";

const Nav = ({ url, lang }) => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="main-nav sticky">
        <img src={cureLogo} alt="Cure Concordia Logo" id="logo" />
        <NavLinks url={url} lang={lang} />
      </nav>
      {/* this needs to be made to work */}
      <nav className="mobile-nav">
        <i className="fas fa-bars"></i>
      </nav>
    </>
  );
};

export default Nav;
