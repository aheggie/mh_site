import React from "react";

const NavLink = ({ href, text }) => {
  return (
    <li>
      <a href={href} className="clear-style">
        {text}
      </a>
    </li>
  );
};

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
          <NavLink href="index.html" text="Home" />
          <NavLink href="seeking-services.html" text="Seeking Services" />
          <NavLink href="offering-services.html" text="Offering Services" />
          <NavLink href="" text="Why Does This Exist?" />
          <NavLink href="" text="About Us" />
          <NavLink href="" text="Resources" />
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
