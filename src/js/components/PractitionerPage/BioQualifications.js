import React from "react";

const BioQualifications = ({
  orderAffiliation,
  licenseNumber,
  schooling,
  yearGraduated,
  yearsInPractice,
  extraCredentials,
}) => {
  return (
    <div className="bio qualifications bio-box">
      <h2>Qualifications</h2>
      <ul>
        <li>{`Order: ${orderAffiliation}`}</li>
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
