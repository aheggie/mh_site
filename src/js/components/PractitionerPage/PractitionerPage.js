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
import placeholderData from "../../placeholderData";

const {
  name,
  title,
  photo,
  aboutText,
  email,
  phone,
  address,
  languages,
  specialisationsItems,
  issuesItems,
  approachItems,
} = placeholderData[0];

const PractitionerPage = () => {
  appendTitle();
  return (
    <HeaderFooter className="services">
      <article className="content">
        <div className="bio-page inner">
          {/* 1 */}
          <BioHead name={name} title={title} />

          {/* 2 */}
          <BioPhoto photo={photo} alt={`${name} - ${title}`} />

          {/* 3 */}
          <BioAbout aboutText={aboutText} />

          {/* 4 */}
          {/* what does this DO ??? div is empty */}
          <BioIcons />

          {/* 5 */}
          <BioContact
            name={name}
            email={email}
            phone={phone}
            address={address}
            languages={languages}
          />

          {/* 6 */}
          <BioSidebar
            specialisationsItems={specialisationsItems}
            issuesItems={issuesItems}
            approachItems={approachItems}
          />

          {/* 7 */}
          <BioPayment />

          {/* 8 - this breaks render for some reason */}
          <BioMap address={address} />

          {/* 9 */}
          <BioQualifications />
        </div>
      </article>
    </HeaderFooter>
  );
};

export default PractitionerPage;
