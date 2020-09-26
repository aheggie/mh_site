import React from "react";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Nav = ({ url, lang }) => {
  return (
    <>
      {/* <!-- Navbar --> */}
      {/* this shows up at desktop widths via css mediaquery */}
      <MainNav url={url} lang={lang} />
      {/* this needs to be made to work */}
      <MobileNav url={url} lang={lang} />
    </>
  );
};

export default Nav;
