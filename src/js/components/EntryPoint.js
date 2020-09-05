import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SeekingPage from "./SeekingPage";
import OfferingPage from "./OfferingPage";
import WhyPage from "./WhyPage";
import AboutPage from "./AboutPage";
import ResourcesPage from "./ResourcesPage";

const EntryPoint = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/seeking-services" component={SeekingPage} />
      <Route exact path="/offering-services" component={OfferingPage} />
      <Route exact path="/why" component={WhyPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/resources" component={ResourcesPage} />
    </Switch>
  );
};

export default EntryPoint;
