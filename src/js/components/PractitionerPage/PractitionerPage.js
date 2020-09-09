import React from "react";
import HeaderFooter from "../HeaderFooter";
import { appendTitle } from "../../utilities";
import BioHead from "./BioHead";
import BioPhoto from "./BioPhoto";
import BioAbout from "./BioAbout";
import BioIcons from "./BioIcons";
import BioContact from "./BioContact";
import BioSidebar from "./BioSidebar";
import BioPayment from "./BioPayment";
import BioMap from "./BioMap";
import BioQualifications from "./BioQualifications";

import placeholderPhoto from "../../../static/img/bio-image.jpg";

const PractitionerPage = () => {
  appendTitle();
  return (
    <HeaderFooter className="services">
      <article className="content">
        <div className="bio-page inner">
          {/* 1 */}
          <BioHead />

          {/* 2 */}
          <BioPhoto photo={placeholderPhoto} />

          {/* 3 */}
          <BioAbout />

          {/* 4 */}
          {/* what does this DO ??? div is empty */}
          <BioIcons />

          {/* 5 */}
          <BioContact />

          {/* 6 */}
          <BioSidebar />

          {/* 7 */}
          <BioPayment />

          {/* 8 - this breaks render for some reason */}
          <BioMap />

          {/* 9 */}
          <BioQualifications />
        </div>
      </article>
    </HeaderFooter>
  );
};

export default PractitionerPage;
