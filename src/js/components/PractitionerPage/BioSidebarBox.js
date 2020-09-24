import React from "react";
import { curriedFillInStaticTextByLang, enAndFrContent } from "../../utilities";

const staticText = {
  seeMore: enAndFrContent("SEE MORE", "SEE MORE"),
};

const BioSideBarBox = ({ lang, className, title, items }) => {
  const fillText = curriedFillInStaticTextByLang(lang);
  return (
    <div className={`bio ${className}`}>
      <h3>{title}</h3>
      <div className="bio-box sidebar-box">
        <ul className="bio-sidebar-list">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="expand">
          <span className="see-more">
            <a href="" className="clear-style">
              {fillText(staticText.seeMore)}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BioSideBarBox;
