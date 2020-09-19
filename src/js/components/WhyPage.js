import React from "react";
import GenericContentPage from "./GenericContentPage";
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

const staticText = {
  WhyPageTitle: enAndFrContent("Why does this exist?", "Why does this exist?"),
  WhyPageContentWithNewlines: enAndFrContent(
    `This resource exists to create space for people of colour to have access to safe(r) culturally competent healing environments. 
      SURVEY ANALYSIS
      OUR VALUES
      `,
    `Cette ressource existe pour créer un espace qui permet aux personnes racisées d'avoir accès à des environnements de guérison sains et culturellement compétents.
      ANALYSE DU SONDAGE
      NOS VALEURS
      `
  ),
};

const WhyPage = ({ match }) => {
  const lang = match.params.lang || "fr";
  const fillText = curriedFillInStaticTextByLang(lang);
  return (
    <GenericContentPage lang={lang} title={fillText(staticText.WhyPageTitle)}>
      {imputeNewlinesIntoParagraphTagsAndParseAsJSX(
        fillText(staticText.WhyPageContentWithNewlines)
      )}{" "}
    </GenericContentPage>
  );
};

export default WhyPage;
