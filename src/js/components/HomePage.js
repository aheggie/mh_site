import React from "react";
import HeaderFooter from "./HeaderFooter";
import { Link } from "react-router-dom";

// import routes from "../routes";
import {
  appendTitle,
  enAndFrContent,
  curriedFillInStaticTextByLang,
} from "../utilities";
import { offeringRoute, seekingRoute } from "../routes";
// const { seekingRoute, offeringRoute } = routes;

const staticText = {
  announce: enAndFrContent(
    "Find mental health professionals of colour in Tiotia:ke (Montreal)",
    "Trouver des professionnels racisés de la santé mentale à Tio’tia:ke (Montréal.)"
  ),
  seekingButton: enAndFrContent("Seeking Services", "Recherche de services"),
  offeringButton: enAndFrContent("Offering Services", "Offrez vos services"),
  newsletterButton: enAndFrContent(
    "Join Our Newsletter!",
    "Inscrivez vous à notre infolettre!"
  ),
};

const HomePage = ({ match }) => {
  const lang = match.params.lang || "fr";
  const url = match.url;
  //this returns a function that selects the language correctly from the given route
  const fillInText = curriedFillInStaticTextByLang(lang);
  appendTitle();
  return (
    <HeaderFooter url={url} lang={lang} className="homepage">
      <header className="main-head">
        <div className="inner home">
          <h1 id="announce">{fillInText(staticText.announce)}</h1>
          <Link
            to={seekingRoute(lang)}
            className="button purple clear-style"
            id="seek"
          >
            {fillInText(staticText.seekingButton)}
          </Link>
          <Link
            to={offeringRoute(lang)}
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
