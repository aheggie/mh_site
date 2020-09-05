import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const HeaderFooter = ({ className, children }) => {
  return (
    <div className={`wrapper ${className} main-wrapper`}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default HeaderFooter;
