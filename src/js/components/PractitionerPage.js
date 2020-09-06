import React from "react";
import HeaderFooter from "./HeaderFooter";
import { appendTitle } from "../utilities";

const PractitionerPage = () => {
  appendTitle();
  return <HeaderFooter className="services"></HeaderFooter>;
};

export default PractitionerPage;
