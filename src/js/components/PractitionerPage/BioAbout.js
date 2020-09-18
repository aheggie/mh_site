import React from "react";
//this is just to parse placeholder text before db is developed
//db probably won't send an html string
//
//for current placeholder text see placeholderData.js
import parse from "html-react-parser";
import { curriedFillInStaticTextByLang, enAndFrContent } from "../../utilities";

const staticText = {
  aboutMeTitle: enAndFrContent("About me", "Un peu sur moi"),
};

const BioAbout = ({ lang, aboutText }) => {
  const fillText = curriedFillInStaticTextByLang(lang);
  return (
    <div className="bio about">
      <h2>{fillText(staticText.aboutMeTitle)}</h2>
      {/* probably parse function will not be part of displaying db data, see note above */}
      {parse(aboutText)}
    </div>
  );
};

export default BioAbout;
