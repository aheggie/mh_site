import React from "react";
import HeaderFooter from "./HeaderFooter";
import { appendTitle } from "../utilities";

const AboutPage = () => {
  appendTitle("About Us");
  return (
    <HeaderFooter className="services">
      <article className="content">
        <div className="offering inner">
          <div className="page-intro">
            <h1 className="page-title">About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada tortor nisi, id mollis ligula sollicitudin dapibus.
              Aliquam in sollicitudin magna. Vivamus vel aliquet metus.
              Vestibulum justo arcu, pretium a vulputate eget, dapibus vitae
              risus. Sed imperdiet erat a fringilla aliquam. Etiam at accumsan
              tortor. Donec nulla diam, molestie nec sollicitudin eget, eleifend
              nec libero.
            </p>
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
        </div>
      </article>
    </HeaderFooter>
  );
};

export default AboutPage;
