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

// import placeholderPhoto from "../../../static/img/bio-image.jpg";
import { getPlaceHolderPractitioner } from "../../placeholderData";

const PractitionerPage = ({ match }) => {
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
    paymentRates,
    paymentMethods,
    insuranceAccepted,
    accessibilityBooleans,
    orderAffiliation,
    licenseNumber,
    schooling,
    yearGraduated,
    yearsInPractice,
    extraCredentials,
  } = getPlaceHolderPractitioner(match.params.practitionerId);
  const lang = match.params.lang || "fr";
  appendTitle(name);
  return (
    <HeaderFooter lang={lang} className="services">
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
          <BioPayment
            paymentRates={paymentRates}
            paymentMethods={paymentMethods}
            insuranceAccepted={insuranceAccepted}
            accessibilityBooleans={accessibilityBooleans}
          />

          {/* 8 - this breaks render for some reason */}
          <BioMap address={address} />

          {/* 9 */}
          <BioQualifications
            orderAffiliation={orderAffiliation}
            licenseNumber={licenseNumber}
            schooling={schooling}
            yearGraduated={yearGraduated}
            yearsInPractice={yearsInPractice}
            extraCredentials={extraCredentials}
          />
        </div>
      </article>
    </HeaderFooter>
  );
};

export default PractitionerPage;
