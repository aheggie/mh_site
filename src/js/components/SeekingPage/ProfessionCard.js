import React from "react";
import { Link } from "react-router-dom";
import { professionCodes, staticProfessionTitle } from "../../professionCodes";
import routes from "../../routes";
import { curriedFillInStaticTextByLang, enAndFrContent } from "../../utilities";

const { filterRoute } = routes;

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada tortor nisi, id mollis ligula sollicitudin dapibus. Aliquam in sollicitudin magna. Vivamus vel aliquet metus. Sed imperdiet erat a fringilla aliquam. Etiam at accumsan. Sed malesuada tortor nisi, id mollis ligula dapibus.";

//this is sort of deep in for this data to sit but it is only used in this component
//and it makes this component a simple finite state machine based only on lang and professionCode
const staticProfessionDescription = {
  [professionCodes.couple]: enAndFrContent(loremIpsum, loremIpsum),
  [professionCodes.social]: enAndFrContent(loremIpsum, loremIpsum),
  [professionCodes.psychologist]: enAndFrContent(loremIpsum, loremIpsum),
  [professionCodes.sexologist]: enAndFrContent(loremIpsum, loremIpsum),
  [professionCodes.indigenous]: enAndFrContent(loremIpsum, loremIpsum),
  [professionCodes.psychotherapist]: enAndFrContent(loremIpsum, loremIpsum),
  [professionCodes.other]: enAndFrContent(loremIpsum, loremIpsum),
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
        <p>{fillText(staticProfessionDescription[professionCode])}</p>
      </div>
      <div className="search-category">
        <Link to={filterRoute(professionCode)} className="clear-style">
          <h5 className="search-link">{`SEARCH FOR ${professionTitle.toUpperCase()}`}</h5>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProfessionCard;
