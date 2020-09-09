import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const HeaderFooter = ({ className, children }) => {
  //because we are not actually loading new .html pages when sent
  //to new routes by <Link /> (from React Router DOM)
  //the page stays scrolled to its previous scroll point
  //
  //this restores expected behaviour of a page starting at the top
  window.scrollTo(0, 0);
  return (
    <div className={`wrapper ${className} main-wrapper`}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default HeaderFooter;
