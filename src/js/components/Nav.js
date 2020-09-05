import React from "react";

const Nav = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="main-nav sticky">
        <img
          // what is up here?? why won't this image load
          src="../../static/img/cure-logo.png"
          alt="Cure Concordia Logo"
          id="logo"
        />
        <ul id="nav-links">
          <li>
            <a href="index.html" className="clear-style">
              Home
            </a>
          </li>
          <li>
            <a href="seeking-services.html" className="clear-style">
              Seeking Services
            </a>
          </li>
          <li>
            <a href="offering-services.html" className="clear-style">
              Offering Services
            </a>
          </li>
          <li>
            <a href="" className="clear-style">
              Why Does This Exist?
            </a>
          </li>
          <li>
            <a href="" className="clear-style">
              About Us
            </a>
          </li>
          <li>
            <a href="" className="clear-style">
              Resources
            </a>
          </li>
          <li id="nav-lang">
            <a href="" className="clear-style">
              FR
            </a>
          </li>
        </ul>
      </nav>
      {/* this needs to be made to work */}
      <nav className="mobile-nav">
        <i className="fas fa-bars"></i>
      </nav>
    </>
  );
};

export default Nav;
