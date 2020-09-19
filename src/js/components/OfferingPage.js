import React from "react";
import HeaderFooter from "./HeaderFooter";
// import routes from "../routes";

// const { seekingRoute } = routes;

import {
  appendTitle,
  curriedFillInStaticTextByLang,
  enAndFrContent,
  imputeNewlinesIntoParagraphTagsAndParseAsJSX,
} from "../utilities";
import { Link } from "react-router-dom";
import { seekingRoute } from "../routes";

const staticText = {
  offeringPageTitle: enAndFrContent("Offering services", "Offrez vos services"),
  offeringContentTitle: enAndFrContent(
    "Offer mental health support services",
    "Offrez vos services de soutien en santé mentale"
  ),
  explanationLinkNotClickableText: enAndFrContent(
    "Looking to find mental health support for yourself or others?",
    "Cherchez vous du soutien pour votre santé mentale ou celle d’une autre personne?"
  ),
  explanationLinkClickableText: enAndFrContent(
    "Go here instead.",
    "Cliquez ici."
  ),
  offeringMainTextWithNewlines: enAndFrContent(
    `Are you a mental health practitioner of colour working in Quebec and looking to offer your services to other people of colour? Sign up here! By joining our list, you are supporting the mental health needs of many people by increasing their access to safer therapeutic spaces. Please fill in the form below and make sure you share with your colleagues! Thank you for being part of this movement!
    Please note that the form should take approximately 15 minutes of your time.`,
    `Êtes-vous un professionnel de la santé mentale racisé travaillant au Québec? Désirez vous offrir vos services à d'autres personnes racisées? Inscrivez-vous ici! En vous inscrivant à notre liste, vous répondez aux besoins de santé mentale de nombreuses personnes en facilitant leur accès à des espaces thérapeutiques plus sécuritaires. Veuillez remplir le formulaire ci-dessous et assurez-vous de le partager avec vos collègues! Merci pour votre participation à ce mouvement!
    Veuillez noter que le formulaire devrait prendre environ 15 minutes de votre temps.`
  ),
};

const OfferingPage = ({ match }) => {
  const lang = match.params.lang || "fr";
  const fillText = curriedFillInStaticTextByLang(lang);
  appendTitle(fillText(staticText.offeringPageTitle));
  return (
    <HeaderFooter lang={lang} className="services">
      <article className="content">
        <div className="offering inner">
          <div className="page-intro">
            <h1 className="page-title">
              {fillText(staticText.offeringContentTitle)}
            </h1>
            {/* parse() is needed because of the <p> tag in the multiline
             string above; not sure its the best approach */}
            <p>
              {fillText(staticText.explanationLinkNotClickableText)}{" "}
              <Link to={seekingRoute(lang)}>
                {fillText(staticText.explanationLinkClickableText)}
              </Link>
            </p>
            {imputeNewlinesIntoParagraphTagsAndParseAsJSX(
              fillText(staticText.offeringMainTextWithNewlines)
            )}
          </div>
          {/* these buttons don't chnge with language switch */}
          <a href="" className="button purple clear-style" id="eng">
            ENGLISH
          </a>
          <a href="" className="button purple clear-style" id="fr">
            FRANÇAIS
          </a>
        </div>
      </article>
    </HeaderFooter>
  );
};

export default OfferingPage;
