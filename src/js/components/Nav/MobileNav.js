import React, { useContext } from "react";
import { MobileNavContext } from "../../providers/MobileNavActiveStateProvider";
import NavLinks from "./NavLinks";

function MobileNav({ url, lang }) {
  const { isActive, toggleActive } = useContext(MobileNavContext);
  return (
    <nav className={isActive ? "mobile-nav mobile-nav-active" : "mobile-nav"}>
      <i className="fas fa-bars" onClick={toggleActive}></i>
      <NavLinks url={url} lang={lang} id={"mobile-nav-links"} />
    </nav>
  );
}

export default MobileNav;
