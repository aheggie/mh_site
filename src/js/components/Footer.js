import React from "react";
import { Link } from "react-router-dom";

import routes from "../routes";
import { curriedFillInStaticTextByLang, enAndFrContent } from "../utilities";

const staticText = {
  EmailSignUpText: enAndFrContent(
    "Sign up for email updates",
    "Sign up for email updates"
  ),
  SeekingText: enAndFrContent("Seeking Services", "Seeking Services"),
  OfferingText: enAndFrContent("Offering Services", "Offering Services"),
  WhyText: enAndFrContent("Why Does This Exist?", "Why Does This Exist?"),
  AboutText: enAndFrContent("About Us", "About Us"),
  ResourcesText: enAndFrContent("Resources", "Resources"),
  CopyrightText: enAndFrContent(
    "Copyright © CURE Concordia 2019, Inc. All rights reserved.",
    "Copyright © CURE Concordia 2019, Inc. All rights reserved."
  ),
};

const FooterNavLink = ({ to, linkText }) => {
  return (
    <li>
      <Link to={to}>{linkText}</Link>
    </li>
  );
};

const Footer = ({ lang }) => {
  const fillText = curriedFillInStaticTextByLang(lang);
  return (
    <footer className="main-foot">
      <div className="wrapper footer">
        <ul className="footer-social">
          <li>
            <a href="" className="clear-style" id="email">
              {fillText(staticText.EmailSignUpText)}
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
            linkText={fillText(staticText.SeekingText)}
          />
          <FooterNavLink
            to={routes.offeringRoute()}
            linkText={fillText(staticText.SeekingText)}
          />
          <FooterNavLink
            to={routes.whyRoute()}
            linkText={fillText(staticText.WhyText)}
          />
          <FooterNavLink
            to={routes.aboutRoute()}
            linkText={fillText(staticText.AboutText)}
          />
          <FooterNavLink
            to={routes.resourcesRoute()}
            linkText={fillText(staticText.ResourcesText)}
          />
        </ul>
      </div>
      <div className="copyright">{fillText(staticText.CopyrightText)}</div>
    </footer>
  );
};

export default Footer;
