import React, { useState } from "react";

import { Redirect } from "react-router-dom";
import routes from "../../routes";
import { professionCodes } from "../../professionCodes";
import { curriedFillInStaticTextByLang, enAndFrContent } from "../../utilities";
import ProfessionOption from "./ProfessionOption";

const { filterRoute } = routes;

const staticText = {
  lookingForHeader: enAndFrContent(
    "You are looking for",
    "You are looking for"
  ),
};

const FilterProfessionSelector = ({ lang, providerType }) => {
  const fillText = curriedFillInStaticTextByLang(lang);
  const [intendedTarget, setIntendedTarget] = useState(providerType);
  return (
    <div className="page-intro">
      {intendedTarget !== providerType ? (
        <Redirect to={filterRoute(intendedTarget)} />
      ) : null}
      <h1 className="page-title filter">
        {fillText(staticText.lookingForHeader)}
      </h1>
      <div className="filter">
        {/* note: providerType is a professionCode passed by a previous link - thus we can be confident it matches the drop-down */}
        <select
          id="professional-dropdown"
          value={providerType}
          //this works!!!👭
          onChange={(event) => setIntendedTarget(event.target.value)}
          onBlur={(event) => setIntendedTarget(event.target.value)}
        >
          {Object.values(professionCodes).map((professionCode) => {
            return (
              <ProfessionOption
                key={professionCode}
                lang={lang}
                professionCode={professionCode}
              />
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default FilterProfessionSelector;
