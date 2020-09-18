import React from "react";
import { curriedFillInStaticTextByLang, enAndFrContent } from "../../utilities";

const staticText = {
  //note word is same in en and fr
  qualificationsTitle: enAndFrContent("Qualifications", "Qualifications"),
  // note: these are not given in the document
  orderHeading: enAndFrContent("Order", "Order"),
  licenseNumberHeading: enAndFrContent("License number", "License number"),
  schoolHeading: enAndFrContent("School", "School"),
  yearGraduatedHeading: enAndFrContent("Year graduated", "Year graduated"),
  yearsInPracticeHeading: enAndFrContent(
    "Years in practice",
    "Years in practice"
  ),
  extraCredentialsTitle: enAndFrContent(
    "Extra credentials",
    "Qualifications supplémentaires"
  ),
};

const BioQualifications = ({
  lang,
  orderAffiliation,
  licenseNumber,
  schooling,
  yearGraduated,
  yearsInPractice,
  extraCredentials,
}) => {
  const fillText = curriedFillInStaticTextByLang(lang);
  return (
    <div className="bio qualifications bio-box">
      <h2>{fillText(staticText.qualificationsTitle)}</h2>
      <ul>
        <li>{`${fillText(staticText.orderHeading)}: ${orderAffiliation}`}</li>
        <li>{`${fillText(
          staticText.licenseNumberHeading
        )}: #${licenseNumber}`}</li>
        <li>{`${fillText(staticText.schoolHeading)}: ${schooling}`}</li>
        <li>{`${fillText(
          staticText.yearGraduatedHeading
        )}: ${yearGraduated}`}</li>
        <li>{`${fillText(
          staticText.yearsInPracticeHeading
        )}: ${yearsInPractice} years`}</li>
      </ul>
      <h2>{fillText(staticText.extraCredentialsTitle)}</h2>
      <p>{extraCredentials}</p>
    </div>
  );
};

export default BioQualifications;
