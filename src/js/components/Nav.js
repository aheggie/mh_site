import React from "react";
import { Link } from "react-router-dom";

import cureLogo from "../../static/img/cure-logo.png";
import {
  aboutRoute,
  homeRoute,
  offeringRoute,
  resourcesRoute,
  seekingRoute,
  whyRoute,
} from "../routes";

// import routes from "../routes";
import { curriedFillInStaticTextByLang, enAndFrContent } from "../utilities";

const staticText = {
  HomeLinkText: enAndFrContent("Home", "Accueil"),
  SeekingLinkText: enAndFrContent("Seeking Services", "Recherche de Services"),
  OfferingLinkText: enAndFrContent("Offering Services", "Offrez Vos Services"),
  WhyLinkText: enAndFrContent(
    "Why Does This Exist?",
    "Pourquoi cette ressource existe-t-elle?"
  ),
  AboutLinkText: enAndFrContent("About Us", "À propos"),
  ResourcesLinkText: enAndFrContent("Resources", "Ressources"),
  //this is reversed on purpose BECAUSE this is the language switcher button
  //i.e.- FR should show up during English site and EN should show up during French site
  SwitcherButtonText: enAndFrContent("FR", "EN"),
};

const NavLink = ({ to, text }) => {
  return (
    <li>
      <Link to={to} className="clear-style">
        {text}
      </Link>
    </li>
  );
};

const Nav = ({ lang }) => {
  //note: lang = match.params.lang || "fr"; is not needed here because
  //this lang is received from a higher component that always provides that
  //from its own route
  const fillText = curriedFillInStaticTextByLang(lang);
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="main-nav sticky">
        <img
          // what is up here?? why won't this image load
          src={cureLogo}
          alt="Cure Concordia Logo"
          id="logo"
        />
        <ul id="nav-links">
          <NavLink
            to={homeRoute(lang)}
            text={fillText(staticText.HomeLinkText)}
          />
          <NavLink
            to={seekingRoute(lang)}
            text={fillText(staticText.SeekingLinkText)}
          />
          <NavLink
            to={offeringRoute(lang)}
            text={fillText(staticText.OfferingLinkText)}
          />
          <NavLink
            to={whyRoute(lang)}
            text={fillText(staticText.WhyLinkText)}
          />
          <NavLink
            to={aboutRoute(lang)}
            text={fillText(staticText.AboutLinkText)}
          />
          <NavLink
            to={resourcesRoute(lang)}
            text={fillText(staticText.ResourcesLinkText)}
          />
          <li id="nav-lang">
            <a href="" className="clear-style">
              {fillText(staticText.SwitcherButtonText)}
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
