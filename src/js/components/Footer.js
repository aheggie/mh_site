import React from "react";
import { Link } from "react-router-dom";
import {
  aboutRoute,
  offeringRoute,
  resourcesRoute,
  seekingRoute,
  whyRoute,
} from "../routes";

// import routes from "../routes";
import { curriedFillInStaticTextByLang, enAndFrContent } from "../utilities";

const staticText = {
  EmailSignUpText: enAndFrContent(
    "Sign up for email updates",
    "S'abonner aux courriels mise à jour "
  ),
  SeekingText: enAndFrContent("Seeking Services", "Recherche de Services"),
  OfferingText: enAndFrContent("Offering Services", "Offrez Vos Services"),
  WhyText: enAndFrContent(
    "Why Does This Exist?",
    "Pourquoi cette ressource existe-t-elle?"
  ),
  AboutText: enAndFrContent("About Us", "À propos"),
  ResourcesText: enAndFrContent("Resources", "Ressources"),
  CopyrightText: enAndFrContent(
    "Copyright © CURE Concordia 2020, Inc. All rights reserved.",
    "Droit d'auteur © CURE Concordia 2020, Inc. Tous droits réservés."
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
            to={seekingRoute()}
            linkText={fillText(staticText.SeekingText)}
          />
          <FooterNavLink
            to={offeringRoute()}
            linkText={fillText(staticText.OfferingText)}
          />
          <FooterNavLink
            to={whyRoute()}
            linkText={fillText(staticText.WhyText)}
          />
          <FooterNavLink
            to={aboutRoute()}
            linkText={fillText(staticText.AboutText)}
          />
          <FooterNavLink
            to={resourcesRoute()}
            linkText={fillText(staticText.ResourcesText)}
          />
        </ul>
      </div>
      <div className="copyright">{fillText(staticText.CopyrightText)}</div>
    </footer>
  );
};

export default Footer;
