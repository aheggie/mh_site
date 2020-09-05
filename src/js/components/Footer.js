import React from "react";
import { Link } from "react-router-dom";

const FooterNavLink = ({ to, linkText }) => {
  return (
    <li>
      <Link to={to}>{linkText}</Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="main-foot">
      <div className="wrapper footer">
        <ul className="footer-social">
          <li>
            <a href="" className="clear-style" id="email">
              Sign up for email updates
            </a>
          </li>
          <li>
            <a href="" className="fb clear-style">
              <span className="fb">f</span>
            </a>
          </li>
        </ul>
        <ul className="footer-nav">
          <FooterNavLink to="seeking-services" linkText="Seeking Services" />
          <li>
            <a href="offering-services">Offering Services</a>
          </li>
          <li>
            <a href="">Why Does This Exist?</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        Copyright © CURE Concordia 2019, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
