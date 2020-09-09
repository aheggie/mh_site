import React from "react";
import HeaderFooter from "./HeaderFooter";
import { appendTitle } from "../utilities";
import { toPageTitleCase } from "../professionCodes";
import FilterPractitionerPreviewCard from "./FilterPractitionerPreviewCard";
import FilterProfessionSelector from "./FilterProfessionSelector";

// import { placeholderThumbnailPhoto } from "../imgImport";
import placeholderThumbnailPhoto from "../../static/img/bio-image-thumbnail.jpg";

const FilterPage = ({ match }) => {
  const { providerType } = match.params;
  appendTitle(toPageTitleCase(providerType));
  return (
    <HeaderFooter className="services">
      <article className="content">
        <div className="wrapper professional-filter inner">
          <FilterProfessionSelector providerType={providerType} />
          <div className="category-container">
            <FilterPractitionerPreviewCard
              photoUrl={placeholderThumbnailPhoto}
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <FilterPractitionerPreviewCard
              photoUrl={placeholderThumbnailPhoto}
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <FilterPractitionerPreviewCard
              photoUrl={placeholderThumbnailPhoto}
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <FilterPractitionerPreviewCard
              photoUrl={placeholderThumbnailPhoto}
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <FilterPractitionerPreviewCard
              photoUrl={placeholderThumbnailPhoto}
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <FilterPractitionerPreviewCard
              photoUrl={placeholderThumbnailPhoto}
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <FilterPractitionerPreviewCard
              photoUrl={placeholderThumbnailPhoto}
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <FilterPractitionerPreviewCard
              photoUrl={placeholderThumbnailPhoto}
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <FilterPractitionerPreviewCard
              photoUrl={placeholderThumbnailPhoto}
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
