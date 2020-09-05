import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, text }) => {
  return (
    <li>
      <Link to={to} className="clear-style">
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
          <NavLink to="/" text="Home" />
          <NavLink to="/seeking-services" text="Seeking Services" />
          <NavLink to="/offering-services" text="Offering Services" />
          <NavLink to="/why" text="Why Does This Exist?" />
          <NavLink to="/about" text="About Us" />
          <NavLink to="/resources" text="Resources" />
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
