import React from "react";
import HeaderFooter from "./HeaderFooter";
import { appendTitle } from "../utilities";
import { Link } from "react-router-dom";
import professionCodes, { toPageTitleCase } from "../professionCodes";

const PractitionerPreviewCard = ({
  photoUrl,
  nameAndTitle,
  selfIdentity,
  languages,
  practitionerId,
}) => {
  return (
    <div className="bio-snippet">
      <img src={photoUrl} className="snippet-thumbnail" alt={nameAndTitle} />
      <h2 className="snippet-name">{nameAndTitle}</h2>
      <div className="snippet-details">
        <p className="snippet-details">{selfIdentity}</p>
        <p className="snippet-details">{languages}</p>
      </div>
      <div className="unclear-icons">
        <i className="fas fa-plus-square"></i>
        <i className="fas fa-plus-square"></i>
      </div>
      <div className="view-profile">
        <Link to={`/practitioner/${practitionerId}`} className="clear-style">
          <h6 className="profile-link">VIEW PROFILE</h6>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

const ProfessionSelector = ({ providerType }) => {
  return (
    <div className="page-intro">
      <h1 className="page-title filter">You are looking for</h1>
      <div className="filter">
        {/* note: providerType is a professionCode passed by a previous link - thus we can be confident it matches the drop-down */}
        <select id="professional-dropdown" value={providerType}>
          {/* <option value="">Select:</option> */}
          <option value={professionCodes.couple}>
            Couple and family therapists
          </option>
          <option value={professionCodes.social}>Social workers</option>
          <option value={professionCodes.psychologist}>Psychologists</option>
          <option value={professionCodes.sexologist}>Sexologists</option>
          <option value={professionCodes.indigenous}>
            Indigenous elders and healers
          </option>
          <option value={professionCodes.psychotherapist}>
            Psychotherapists
          </option>
          <option value={professionCodes.other}>
            Other mental health professionals
          </option>
        </select>
      </div>
    </div>
  );
};

const FilterPage = ({ match }) => {
  //this works!
  const { providerType } = match.params;
  appendTitle(toPageTitleCase(providerType));
  return (
    <HeaderFooter className="services">
      <article className="content">
        <div className="wrapper professional-filter inner">
          <ProfessionSelector providerType={providerType} />
          <div className="category-container">
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
          </div>
        </div>
      </article>
    </HeaderFooter>
  );
};

export default FilterPage;
