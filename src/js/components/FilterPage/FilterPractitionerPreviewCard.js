import React from "react";
import { Link } from "react-router-dom";
import { curriedFillInStaticTextByLang, enAndFrContent } from "../../utilities";

const staticText = {
  speaks: enAndFrContent("Speaks", "Speaks"),
  viewProfile: enAndFrContent("VIEW PROFILE", "VIEW PROFILE"),
};

const FilterPractitionerPreviewCard = ({
  lang,
  photoUrl,
  nameAndTitle,
  selfIdentity,
  languages,
  practitionerId,
}) => {
  const fillText = curriedFillInStaticTextByLang(lang);
  return (
    <div className="bio-snippet">
      <img src={photoUrl} className="snippet-thumbnail" alt={nameAndTitle} />
      <h2 className="snippet-name">{nameAndTitle}</h2>
      <div className="snippet-details">
        <p className="snippet-details">{selfIdentity}</p>
        <p className="snippet-details">{`${fillText(
          staticText.speaks
        )} ${languages}`}</p>
      </div>
      <div className="unclear-icons">
        <i className="fas fa-plus-square"></i>
        <i className="fas fa-plus-square"></i>
      </div>
      <div className="view-profile">
        <Link to={`/practitioner/${practitionerId}`} className="clear-style">
          <h6 className="profile-link">{fillText(staticText.viewProfile)}</h6>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default FilterPractitionerPreviewCard;
