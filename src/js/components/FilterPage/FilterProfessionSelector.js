import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import routes from "../../routes";
import professionCodes from "../../professionCodes";

const { filterRoute } = routes;

const FilterProfessionSelector = ({ providerType }) => {
  const [intendedTarget, setIntendedTarget] = useState(providerType);
  return (
    <div className="page-intro">
      {intendedTarget !== providerType ? (
        <Redirect to={filterRoute(intendedTarget)} />
      ) : null}
      <h1 className="page-title filter">You are looking for</h1>
      <div className="filter">
        {/* note: providerType is a professionCode passed by a previous link - thus we can be confident it matches the drop-down */}
        <select
          id="professional-dropdown"
          value={providerType}
          //this works!!!👭
          onChange={(event) => setIntendedTarget(event.target.value)}
          onBlur={(event) => setIntendedTarget(event.target.value)}
        >
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

export default FilterProfessionSelector;
