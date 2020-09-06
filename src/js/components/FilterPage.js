import React from "react";
import HeaderFooter from "./HeaderFooter";
import { appendTitle } from "../utilities";

const FilterPage = ({ match }) => {
  //this works!
  alert(match.params.providerType);
  appendTitle();
  return <HeaderFooter className="services">Filters</HeaderFooter>;
};

export default FilterPage;
