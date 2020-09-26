import React from "react";
import NavLinks from "./NavLinks";

import cureLogo from "../../../static/img/cure-logo.png";

function MainNav({ url, lang }) {
  return (
    <nav className="main-nav sticky">
      <img src={cureLogo} alt="Cure Concordia Logo" id="logo" />
      <NavLinks url={url} lang={lang} />
    </nav>
  );
}

export default MainNav;
