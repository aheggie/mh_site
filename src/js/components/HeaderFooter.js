import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const HeaderFooter = ({ classes, children }) => {
  return (
    <div className={classes}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default HeaderFooter;
