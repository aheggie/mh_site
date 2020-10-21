import React from "react";
import { Link } from "react-router-dom";
import {
  aboutRoute,
  homeRoute,
  offeringRoute,
  resourcesRoute,
  seekingRoute,
  whyRoute,
} from "../../routes";
import { curriedFillInStaticTextByLang, enAndFrContent } from "../../utilities";

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

//this is based on the "url" property of match object sent by React Route
//this strips the base off the url and give the complete route
//i.e. www.example.com/fr/subroute would give match = {url: "/fr/subroute" ... }
const urlLangSwitcher = (lang, matchUrl) =>
  `/${switchLang(lang)}${matchUrl.slice(3)}`;
const switchLang = (lang) => {
  switch (lang) {
    case "en":
      return "fr";
    case "fr":
      return "en";
  }
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

function NavLinks({ url, lang, id }) {
  //note: lang = match.params.lang || "fr"; is not needed here because
  //this lang is received from a higher component that always provides that
  //from its own route
  const fillText = curriedFillInStaticTextByLang(lang);
  return (
    <ul id={id}>
      <NavLink to={homeRoute(lang)} text={fillText(staticText.HomeLinkText)} />
      <NavLink
        to={seekingRoute(lang)}
        text={fillText(staticText.SeekingLinkText)}
      />
      <NavLink
        to={offeringRoute(lang)}
        text={fillText(staticText.OfferingLinkText)}
      />
      <NavLink to={whyRoute(lang)} text={fillText(staticText.WhyLinkText)} />
      <NavLink
        to={aboutRoute(lang)}
        text={fillText(staticText.AboutLinkText)}
      />
      <NavLink
        to={resourcesRoute(lang)}
        text={fillText(staticText.ResourcesLinkText)}
      />
      <li id="nav-lang">
        <Link to={urlLangSwitcher(lang, url)} className="clear-style">
          {fillText(staticText.SwitcherButtonText)}
        </Link>
      </li>
    </ul>
  );
}

export default NavLinks;
