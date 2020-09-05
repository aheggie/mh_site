import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const HeaderFooter = ({ className, children }) => {
  return (
    <div className={className}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default HeaderFooter;
