import React from "react";

const BioMap = ({ address }) => {
  const addressQuery = address
    .toLowerCase()
    //strips punctuation
    //see https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
    .replace(/[^\w\s]|_/g, "")
    //collapses multiple whitespace to single whitespace
    //see above link
    .replace(/\s+/g, " ")
    .split(" ")
    .join("+");

  const addressSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAT91kn6MetYtlU-KDzLSuPdvjTHill_Ps&q=${addressQuery}`;
  return (
    <div className="bio map">
      <iframe
        title="map to provider office"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={addressSrc}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BioMap;
