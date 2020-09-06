import React from "react";
import HeaderFooter from "./HeaderFooter";
import { appendTitle } from "../utilities";

const WhyPage = () => {
  appendTitle("Why Does This Exist?");
  return <HeaderFooter className="services">Why does this exist?</HeaderFooter>;
};

export default WhyPage;
