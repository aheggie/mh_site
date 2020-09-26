import React, { useState } from "react";
import NavLinks from "./NavLinks";

function MobileNav({ url, lang }) {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => setIsActive(!isActive);
  return (
    <nav className="mobile-nav">
      <i className="fas fa-bars" onClick={toggleActive}></i>
      <NavLinks url={url} lang={lang} id={"mobile-nav-links"} />
    </nav>
  );
}

export default MobileNav;
