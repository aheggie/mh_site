import React from "react";
import HeaderFooter from "../HeaderFooter";
import ProfessionCard from "./ProfessionCard";
import { Link } from "react-router-dom";
import routes from "../../routes";
import {
  appendTitle,
  curriedFillInStaticTextByLang,
  enAndFrContent,
} from "../../utilities";
import { professionCodes } from "../../professionCodes";

const { offeringRoute } = routes;

const staticText = {
  seekingPageTitle: enAndFrContent("Seeking services", "Recherche de services"),
  seekingContentTitle: enAndFrContent(
    "Find mental health support for yourself and others",
    "Trouvez du soutien en santé mentale pour vous ou une autre personne"
  ),
  explanationLinkNotClickableText: enAndFrContent(
    "Looking to offer professional mental health services? ",
    "Cherchez-vous à offrir des services de santé mentale professionnels? "
  ),
  explanationLinkClickableText: enAndFrContent(
    "Go here instead",
    "Cliquez ici"
  ),
  explanationParagraph: enAndFrContent(
    ` Mental health work is a large field and there are many kinds of professionals to explore! Not sure who to reach out to? Read through the explanations below and see what best matches up with your needs. If you or someone else you know are currently in danger of hurting yourself or others, please call 911 or quickly check out the resource page for other options. `,
    ` Le secteur de santé mentale est un domaine très vaste et il existe de nombreux types de professionnels à découvrir! Vous ne savez pas lequel contacter? Lisez les descriptions ci-dessous et voyez ce qui correspond le mieux à vos besoins. Si vous êtes présentement en danger de vous blesser ou de blesser d’autres personnes ou quelqu’un que vous connaissez est à risque, veuillez appeler le 911 ou consulter rapidement la page des ressources disponible pour trouver d’autres options.`
  ),
};

const SeekingPage = ({ match }) => {
  const lang = match.params.lang || "fr";
  const fillText = curriedFillInStaticTextByLang(lang);
  appendTitle(fillText(staticText.seekingPageTitle));
  return (
    <HeaderFooter lang={lang} className="services">
      <article className="content">
        <div className="professional-filter inner">
          <div className="page-intro">
            <h1 className="page-title">
              {fillText(staticText.seekingContentTitle)}
            </h1>
            <p>
              {fillText(staticText.explanationLinkNotClickableText)}{" "}
              <Link to={offeringRoute()}>
                {fillText(staticText.explanationLinkClickableText)}
              </Link>
              . <br />
              {fillText(staticText.explanationParagraph)}
            </p>
          </div>
          <div className="category-container">
            {Object.values(professionCodes).map((professionCode) => (
              <ProfessionCard
                key={professionCode}
                lang={lang}
                professionCode={professionCode}
              />
            ))}
          </div>
        </div>
      </article>
    </HeaderFooter>
  );
};

export default SeekingPage;
