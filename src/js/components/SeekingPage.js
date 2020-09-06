import React from "react";
import HeaderFooter from "./HeaderFooter";
import { Link } from "react-router-dom";
import routes from "../routes";
import { appendTitle } from "../utilities";

const { filterRoute, offeringRoute } = routes;

const toUrlCase = (title) => title.toLowerCase().split(" ").join("-");

const ProfessionCard = ({ id, title, descriptionText }) => {
  return (
    <div className="seek-category" id={id}>
      <div className="category-description">
        <h3>{title}</h3>
        <p>{descriptionText}</p>
      </div>
      <div className="search-category">
        <Link to={filterRoute(toUrlCase(title))} className="clear-style">
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
              title="Couple and family therapists"
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              id="social-workers"
              title="Social workers"
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              id="sexologists"
              title="Sexologists"
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              id="psychologists"
              title="Psychologists"
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              id="indigenous"
              title="Indigenous elders and healers"
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              id="psychotherapists"
              title="Psychotherapists"
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              id="other"
              title="Other mental health professionals"
              descriptionText={loremIpsum}
            />
            <ProfessionCard
              id="placeholder"
              title="Placeholder"
              descriptionText={loremIpsum}
            />
          </div>
        </div>
      </article>
    </HeaderFooter>
  );
};

export default SeekingPage;
