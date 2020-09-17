import React from "react";
import { curriedFillInStaticTextByLang, enAndFrContent } from "../../utilities";

const staticText = {
  qualificationsTitle: enAndFrContent("Qualifications", "Qualifications"),
  orderHeading: enAndFrContent("Order", "Order"),
  // licenseNumberHeading,
  // schoolHeading,
  // yearGraduatedHeading,
  // yearsInPracticeHeading,
  // extraCredentialsTitle,
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
        <li>{`License number: #${licenseNumber}`}</li>
        <li>{`School: ${schooling}`}</li>
        <li>{`Year graduated: ${yearGraduated}`}</li>
        <li>{`Years in practice: ${yearsInPractice} years`}</li>
      </ul>
      <h2>Extra credentials</h2>
      <p>{extraCredentials}</p>
    </div>
  );
};

export default BioQualifications;
