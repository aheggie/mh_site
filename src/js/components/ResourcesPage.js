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
  ResourcesPageTitle: enAndFrContent("Resources", "Resources"),
  ResourcesPageContentWithNewlines: enAndFrContent(
    `Find other mental health resources to meet your needs
    Some emergency/crisis resources are listed here, however if you are in immediate danger, please call 911. 
    `,
    `Trouvez d'autres ressources de santé mentale pour répondre à vos besoins
    Certaines ressources d'urgence/de crise sont répertoriées ici, mais si vous êtes en danger immédiat, veuillez appeler le 911.
    `
  ),
};

const ResourcesPage = ({ match }) => {
  const lang = match.params.lang || "fr";
  const fillText = curriedFillInStaticTextByLang(lang);
  return (
    <GenericContentPage
      lang={lang}
      title={fillText(staticText.ResourcesPageTitle)}
    >
      {imputeNewlinesIntoParagraphTagsAndParseAsJSX(
        fillText(staticText.ResourcesPageContentWithNewlines)
      )}
    </GenericContentPage>
  );
};

export default ResourcesPage;
