import React from "react";
import HeaderFooter from "./HeaderFooter";
import { Link } from "react-router-dom";

import routes from "../routes";
import {
  appendTitle,
  enAndFrContent,
  curriedFillInStaticTextByLang,
} from "../utilities";
const { seekingRoute, offeringRoute } = routes;

const staticText = {
  announce: enAndFrContent(
    "Find mental health professionals of colour in Tiotia:ke (Montreal)",
    "Find mental health professionals of colour in Tiotia:ke (Montreal)"
  ),
  seekingButton: enAndFrContent("Seeking Services", "Seeking Services"),
  offeringButton: enAndFrContent("Offering Services", "Offering Services"),
  newsletterButton: enAndFrContent(
    "Join Our Newsletter",
    "Join Our Newsletter"
  ),
};

const HomePage = ({ match }) => {
  const lang = match.params.lang || "fr";
  //this returns a function that selects the language correctly from the given route
  const fillInText = curriedFillInStaticTextByLang(lang);
  appendTitle();
  return (
    <HeaderFooter lang={lang} className="homepage">
      <header className="main-head">
        <div className="inner home">
          <h1 id="announce">{fillInText(staticText.announce)}</h1>
          <Link
            to={seekingRoute()}
            className="button purple clear-style"
            id="seek"
          >
            {fillInText(staticText.seekingButton)}
          </Link>
          <Link
            to={offeringRoute()}
            className="button purple clear-style"
            id="offer"
          >
            {fillInText(staticText.offeringButton)}
          </Link>
          <a href="" className="button yellow clear-style" id="newsletter">
            {fillInText(staticText.newsletterButton)}
          </a>
        </div>
      </header>
    </HeaderFooter>
  );
};

export default HomePage;
