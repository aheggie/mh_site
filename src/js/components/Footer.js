import React from "react";
import { Link } from "react-router-dom";

import routes from "../routes";

const FooterNavLink = ({ to, linkText }) => {
  return (
    <li>
      <Link to={to}>{linkText}</Link>
    </li>
  );
};

const Footer = ({ lang }) => {
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
          <FooterNavLink
            to={routes.seekingRoute()}
            linkText="Seeking Services"
          />
          <FooterNavLink
            to={routes.offeringRoute()}
            linkText="Offering Services"
          />
          <FooterNavLink
            to={routes.whyRoute()}
            linkText="Why Does This Exist?"
          />
          <FooterNavLink to={routes.aboutRoute()} linkText="About Us" />
          <FooterNavLink to={routes.resourcesRoute()} linkText="Resources" />
        </ul>
      </div>
      <div className="copyright">
        Copyright © CURE Concordia 2019, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
