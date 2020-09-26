import React from "react";
import MainNav from "./MainNav";

const Nav = ({ url, lang }) => {
  return (
    <>
      {/* <!-- Navbar --> */}
      {/* this shows up at desktop widths via css mediaquery */}
      <MainNav url={url} lang={lang} />
      {/* this needs to be made to work */}
      <nav className="mobile-nav">
        <i className="fas fa-bars"></i>
      </nav>
    </>
  );
};

export default Nav;
