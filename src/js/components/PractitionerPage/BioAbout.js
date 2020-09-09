import React from "react";
//this is just to parse placeholder text before db is developed
//db probably won't send an html string
//
//for current placeholder text see placeholderData.js
import parse from "html-react-parser";

const BioAbout = ({ aboutText }) => {
  return (
    <div className="bio about">
      <h2>About me</h2>
      {/* probably this will not be part of displaying db data, see note above */}
      {parse(aboutText)}
    </div>
  );
};

export default BioAbout;
