import React from "react";
import HeaderFooter from "./HeaderFooter";
import parse from "html-react-parser";

import {
  appendTitle,
  curriedFillInStaticTextByLang,
  enAndFrContent,
} from "../utilities";

const staticText = {
  offeringPageTitle: enAndFrContent(
    "Offer professional mental health services",
    "Offer professional mental health services"
  ),
  offeringMainText: enAndFrContent(
    //fully not sure if this should have the <p> tag embedded
    `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      malesuada tortor nisi, id mollis ligula sollicitudin dapibus.
      Aliquam in sollicitudin magna. Vivamus vel aliquet metus.
      Vestibulum justo arcu, pretium a vulputate eget, dapibus vitae
      risus. Sed imperdiet erat a fringilla aliquam. Etiam at accumsan
      tortor. Donec nulla diam, molestie nec sollicitudin eget, eleifend
      nec libero.
    </p>`,
    `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      malesuada tortor nisi, id mollis ligula sollicitudin dapibus.
      Aliquam in sollicitudin magna. Vivamus vel aliquet metus.
      Vestibulum justo arcu, pretium a vulputate eget, dapibus vitae
      risus. Sed imperdiet erat a fringilla aliquam. Etiam at accumsan
      tortor. Donec nulla diam, molestie nec sollicitudin eget, eleifend
      nec libero.
    </p>`
  ),
};

const OfferingPage = ({ match }) => {
  const lang = match.params.lang || "fr";
  const fillInText = curriedFillInStaticTextByLang(lang);
  appendTitle(fillInText(staticText.offeringPageTitle));
  return (
    <HeaderFooter className="services">
      <article className="content">
        <div className="offering inner">
          <div className="page-intro">
            <h1 className="page-title">
              {fillInText(staticText.offeringPageTitle)}
            </h1>
            {/* parse() is needed because of the <p> tag in the multiline
             string above; not sure its the best approach */}
            {parse(fillInText(staticText.offeringMainText))}
          </div>
          {/* these buttons don't chnge with language switch */}
          <a href="" className="button purple clear-style" id="eng">
            ENGLISH
          </a>
          <a href="" className="button purple clear-style" id="fr">
            FRANÇAIS
          </a>
        </div>
      </article>
    </HeaderFooter>
  );
};

export default OfferingPage;
