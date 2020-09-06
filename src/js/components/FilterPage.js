import React from "react";
import HeaderFooter from "./HeaderFooter";

const FilterPage = ({ match }) => {
  //this works!
  alert(match.params.providerType);
  return <HeaderFooter className="services">Filters</HeaderFooter>;
};

export default FilterPage;
