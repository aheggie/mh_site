import React from "react";
import HeaderFooter from "./HeaderFooter";
import { Link } from "react-router-dom";
import routes from "../routes";
import { appendTitle } from "../utilities";
import professionCodes, { toSentenceCase } from "../professionCodes";

const { filterRoute, offeringRoute } = routes;

const ProfessionCard = ({ id, professionCode, descriptionText }) => {
  const title = toSentenceCase(professionCode);

  return (
    <div className="seek-category" id={id}>
      <div className="category-description">
        <h3>{title}</h3>
        <p>{descriptionText}</p>
      </div>
      <div className="search-category">
        <Link to={filterRoute(professionCode)} className="clear-style">
          <h5 className="search-link">{`SEARCH FOR ${title.toUpperCase()}`}</h5>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
malesuada tortor nisi, id mollis ligula sollicitudin dapibus.
Aliquam in sollicitudin magna. Vivamus vel aliquet metus. Sed
imperdiet erat a fringilla aliquam. Etiam at accumsan. Sed
malesuada tortor nisi, id mollis ligula dapibus.`;

const SeekingPage = () => {
  appendTitle("Seeking Services");
  return (
    <HeaderFooter className="services">
      <article className="content">
        <div className="professional-filter inner">
          <div className="page-intro">
            <h1 className="page-title">
              Find mental health support for yourself and others
            </h1>
            <p>
              EXPLANATION TEXT +{" "}
              <Link to={offeringRoute()}>LINK TO OFFERING SERVICES</Link>.{" "}
              <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed malesuada tortor nisi, id mollis ligula sollicitudin dapibus.
              Aliquam in sollicitudin magna. Vivamus vel aliquet metus.
              Vestibulum justo arcu, pretium a vulputate eget, dapibus vitae
              risus. Sed imperdiet erat a fringilla aliquam. Etiam at accumsan.
              Sed malesuada tortor nisi, id mollis ligula dapibus.
            </p>
          </div>
          <div className="category-container">
            <ProfessionCard
              id="couple-family"
              professionCode={professionCodes.couple}
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              id="social-workers"
              professionCode={professionCodes.social}
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              id="sexologists"
              professionCode={professionCodes.sexologist}
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              id="psychologists"
              professionCode={professionCodes.psychologist}
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              id="indigenous"
              professionCode={professionCodes.indigenous}
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              id="psychotherapists"
              professionCode={professionCodes.psychotherapist}
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              id="other"
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
