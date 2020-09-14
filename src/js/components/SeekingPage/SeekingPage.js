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
import professionCodes from "../../professionCodes";

const { offeringRoute } = routes;

const staticText = {
  seekingPageTitle: enAndFrContent(
    "Find mental health support for yourself and others",
    "Find mental health support for yourself and others"
  ),
  explanationLinkNotClickableText: enAndFrContent(
    "EXPLANATION TEXT +",
    "EXPLANATION TEXT +"
  ),
  explanationLinkClickableText: enAndFrContent(
    "LINK TO OFFERING SERVICES",
    "LINK TO OFFERING SERVICES"
  ),
  explanationPara: enAndFrContent(
    ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed malesuada tortor nisi, id mollis ligula sollicitudin dapibus.
  Aliquam in sollicitudin magna. Vivamus vel aliquet metus.
  Vestibulum justo arcu, pretium a vulputate eget, dapibus vitae
  risus. Sed imperdiet erat a fringilla aliquam. Etiam at accumsan.
  Sed malesuada tortor nisi, id mollis ligula dapibus.`,
    ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed malesuada tortor nisi, id mollis ligula sollicitudin dapibus.
  Aliquam in sollicitudin magna. Vivamus vel aliquet metus.
  Vestibulum justo arcu, pretium a vulputate eget, dapibus vitae
  risus. Sed imperdiet erat a fringilla aliquam. Etiam at accumsan.
  Sed malesuada tortor nisi, id mollis ligula dapibus.`
  ),
};

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada tortor nisi, id mollis ligula sollicitudin dapibus. Aliquam in sollicitudin magna. Vivamus vel aliquet metus. Sed imperdiet erat a fringilla aliquam. Etiam at accumsan. Sed malesuada tortor nisi, id mollis ligula dapibus.";

const SeekingPage = ({ match }) => {
  const lang = match.params.lang || "fr";
  const fillText = curriedFillInStaticTextByLang(lang);
  appendTitle("Seeking Services");
  return (
    <HeaderFooter lang={lang} className="services">
      <article className="content">
        <div className="professional-filter inner">
          <div className="page-intro">
            <h1 className="page-title">
              {fillText(staticText.seekingPageTitle)}
            </h1>
            <p>
              {fillText(staticText.explanationLinkNotClickableText)}{" "}
              <Link to={offeringRoute()}>
                {fillText(staticText.explanationLinkClickableText)}
              </Link>
              . <br />
              {fillText(staticText.explanationPara)}
            </p>
          </div>
          <div className="category-container">
            <ProfessionCard
              professionCode={professionCodes.couple}
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              professionCode={professionCodes.social}
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              professionCode={professionCodes.sexologist}
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              professionCode={professionCodes.psychologist}
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              professionCode={professionCodes.indigenous}
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              professionCode={professionCodes.psychotherapist}
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              professionCode={professionCodes.other}
              descriptionText={loremIpsum}
            />
          </div>
        </div>
      </article>
    </HeaderFooter>
  );
};

export default SeekingPage;
