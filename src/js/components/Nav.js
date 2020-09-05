import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ href, text }) => {
  return (
    <li>
      <Link to={href} className="clear-style">
        {text}
      </Link>
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
          <NavLink href="/" text="Home" />
          <NavLink href="/seeking-services" text="Seeking Services" />
          <NavLink href="/offering-services" text="Offering Services" />
          <NavLink href="/why-does-this-exist" text="Why Does This Exist?" />
          <NavLink href="/about-us" text="About Us" />
          <NavLink href="/resources" text="Resources" />
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
