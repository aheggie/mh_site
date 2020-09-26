import React from "react";
import { MobileNavContext } from "../../providers/MobileNavActiveStateProvider";
import NavLinks from "./NavLinks";

function MobileNav({ url, lang }) {
  return (
    <MobileNavContext.Consumer>
      {({ isActive, toggleActive }) => (
        <nav
          className={isActive ? "mobile-nav mobile-nav-active" : "mobile-nav"}
        >
          <i className="fas fa-bars" onClick={toggleActive}></i>
          <NavLinks url={url} lang={lang} id={"mobile-nav-links"} />
        </nav>
      )}
    </MobileNavContext.Consumer>
  );
}

export default MobileNav;
