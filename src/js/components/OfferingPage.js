import React from "react";
import HeaderFooter from "./HeaderFooter";

const Offering = () => {
  return (
    <HeaderFooter className="wrapper services main-wrapper">
      <article className="content">
        <div className="offering inner">
          <div className="page-intro">
            <h1 className="page-title">
              Offer professional mental health services
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada tortor nisi, id mollis ligula sollicitudin dapibus.
              Aliquam in sollicitudin magna. Vivamus vel aliquet metus.
              Vestibulum justo arcu, pretium a vulputate eget, dapibus vitae
              risus. Sed imperdiet erat a fringilla aliquam. Etiam at accumsan
              tortor. Donec nulla diam, molestie nec sollicitudin eget, eleifend
              nec libero.
            </p>
          </div>
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

export default Offering;
