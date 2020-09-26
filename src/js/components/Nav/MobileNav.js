import React from "react";
import NavLinks from "./NavLinks";

function MobileNav({ url, lang }) {
  return (
    <nav className="mobile-nav">
      <i className="fas fa-bars"></i>
      <NavLinks url={url} lang={lang} id={"mobile-nav-links"} />
    </nav>
  );
}

export default MobileNav;
