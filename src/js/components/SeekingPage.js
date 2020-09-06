import React from "react";
import HeaderFooter from "./HeaderFooter";
import { Link } from "react-router-dom";
import routes from "../routes";
import { appendTitle } from "../utilities";
import professionCodes, { toSentenceCase } from "../professionCodes";

const { filterRoute, offeringRoute } = routes;

const ProfessionCard = ({ professionCode, descriptionText }) => {
  const title = toSentenceCase(professionCode);

  return (
    // note - the id used for each card in the static legacy code
    //differs from the professionCode syntax in various ways
    //
    // however I checked the style.css and none of the ids were called
    //so it is an unused property and safe to change without affecting css
    // since it doesn't trigger any css at all it could perhaps be removed
    //entirely but i am trying to operate on the principal of making the
    //least possible changes to Cassie's good original
    //html layout and css styling choices from the legacy code
    // - Alex
    <div className="seek-category" id={professionCode}>
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
