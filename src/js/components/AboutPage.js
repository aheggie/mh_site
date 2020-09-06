import React from "react";
import HeaderFooter from "./HeaderFooter";
import { appendTitle } from "../utilities";

const AboutPage = () => {
  appendTitle("About Us");
  return <HeaderFooter className="services">About us.</HeaderFooter>;
};

export default AboutPage;
