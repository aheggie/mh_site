import React from "react";
import { Link } from "react-router-dom";
import {
  staticProfessionDescription,
  staticProfessionTitle,
} from "../../professionCodes";
import routes from "../../routes";
import {
  curriedFillInStaticTextByLang,
  enAndFrContent,
  imputeNewlinesIntoParagraphTagsAndParseAsJSX,
} from "../../utilities";

const { filterRoute } = routes;

const staticText = {
  searchForHeading: enAndFrContent("SEARCH FOR", "RECHERCHER"),
};

const ProfessionCard = ({ lang, professionCode }) => {
  const fillText = curriedFillInStaticTextByLang(lang);
  const professionTitle = fillText(staticProfessionTitle[professionCode]);

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
        <h3>{professionTitle}</h3>
        {imputeNewlinesIntoParagraphTagsAndParseAsJSX(
          fillText(staticProfessionDescription[professionCode])
        )}
      </div>
      <div className="search-category">
        <Link to={filterRoute(professionCode)} className="clear-style">
          <h5 className="search-link">{`${fillText(
            staticText.searchForHeading
          )} ${professionTitle.toUpperCase()}`}</h5>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProfessionCard;
