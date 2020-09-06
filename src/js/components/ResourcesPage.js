import React from "react";
import HeaderFooter from "./HeaderFooter";
import { appendTitle } from "../utilities";

const ResourcesPage = () => {
  appendTitle("Resources");
  return <HeaderFooter className="services">Resources</HeaderFooter>;
};

export default ResourcesPage;
