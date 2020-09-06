import React from "react";
import HeaderFooter from "./HeaderFooter";
import { appendTitle } from "../utilities";

//providerType is of format "type-of-profession"
//for page title we want "Type Of Profession"
const titleCase = (providerType) =>
  providerType
    .split("-")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");

const FilterPage = ({ match }) => {
  //this works!
  const { providerType } = match.params;
  appendTitle(titleCase(providerType));
  return <HeaderFooter className="services">Filters</HeaderFooter>;
};

export default FilterPage;
