import React from "react";
import HeaderFooter from "../HeaderFooter";
import { appendTitle } from "../../utilities";
import { toPageTitleCase, capitaliseFirstLetter } from "../../professionCodes";
import FilterPractitionerPreviewCard from "./FilterPractitionerPreviewCard";
import FilterProfessionSelector from "./FilterProfessionSelector";

// import placeholderThumbnailPhoto from "../../../static/img/bio-image-thumbnail.jpg";
import placeholderData from "../../placeholderData";

const FilterPage = ({ match }) => {
  const { providerType } = match.params;
  const lang = match.params.lang || "fr";
  appendTitle(toPageTitleCase(providerType));
  return (
    <HeaderFooter lang={lang} className="services">
      <article className="content">
        <div className="wrapper professional-filter inner">
          <FilterProfessionSelector providerType={providerType} />
          <div className="category-container">
            {placeholderData.map(
              ({ thumbnailPhoto, name, title, selfIdentity, languages }, i) => {
                const nameAndTitleString = `${name} - ${title}`;
                const languagesString = languages
                  .map(capitaliseFirstLetter)
                  .join(", ");
                return (
                  <FilterPractitionerPreviewCard
                    key={i}
                    photoUrl={thumbnailPhoto}
                    nameAndTitle={nameAndTitleString}
                    selfIdentity={selfIdentity}
                    languages={`Speaks ${languagesString}`}
                    practitionerId={i}
                  />
                );
              }
            )}
          </div>
        </div>
      </article>
    </HeaderFooter>
  );
};

export default FilterPage;
