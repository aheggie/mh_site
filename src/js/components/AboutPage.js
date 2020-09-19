import React from "react";

import {
  curriedFillInStaticTextByLang,
  enAndFrContent,
  imputeNewlinesIntoParagraphTagsAndParseAsJSX,
} from "../utilities";
//see GenericContentPage.js for a longer comment about
//the (fairly strict) limitations these generic pages can contain
//
//Basically - they can receive a title as a prop and <p> tags as
//children and that's it
//
//For more complex content a custom component and new css will be needed
import GenericContentPage from "./GenericContentPage";

const staticText = {
  AboutPageTitle: enAndFrContent("About us", "À propos"),
  AboutPageContentWithNewlines: enAndFrContent(
    `CURE MANDATE
    CONTACT INFORMATION
    MINI BIOS OF JODIE-ANN,  AYAN & DORIS
    `,
    `MANDAT DE CURE
    POUR NOUS CONTACTER
    MINI BIOGRAPHIE DE JODIE-ANN, AYAN & DORIS
    `
  ),
};

const AboutPage = ({ match }) => {
  const lang = match.params.lang || "fr";
  const fillText = curriedFillInStaticTextByLang(lang);
  return (
    <GenericContentPage
      url={match.url}
      lang={lang}
      title={fillText(staticText.AboutPageTitle)}
    >
      {imputeNewlinesIntoParagraphTagsAndParseAsJSX(
        fillText(staticText.AboutPageContentWithNewlines)
      )}
    </GenericContentPage>
  );
};

export default AboutPage;
