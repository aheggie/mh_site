import React from "react";
import { Switch, Route } from "react-router-dom";

import routes from "../routes";

import HomePage from "./HomePage";
import SeekingPage from "./SeekingPage";
import OfferingPage from "./OfferingPage";
import WhyPage from "./WhyPage";
import AboutPage from "./AboutPage";
import ResourcesPage from "./ResourcesPage";
import FilterPage from "./FilterPage";
import PractitionerPage from "./PractitionerPage";

const EntryPoint = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={HomePage} /> */}
      <Route exact path={routes.homeRoute()} component={HomePage} />
      {/* <Route exact path="/seeking-services" component={SeekingPage} /> */}
      <Route exact path={routes.seekingRoute()} component={SeekingPage} />
      {/* <Route exact path="/offering-services" component={OfferingPage} /> */}
      <Route exact path={routes.offeringRoute()} component={OfferingPage} />
      {/* <Route exact path="/why" component={WhyPage} /> */}
      <Route exact path={routes.whyRoute()} component={WhyPage} />
      {/* <Route exact path="/about" component={AboutPage} /> */}
      <Route exact path={routes.aboutRoute()} component={AboutPage} />
      {/* <Route exact path="/resources" component={ResourcesPage} /> */}
      <Route exact path={routes.resourcesRoute()} component={ResourcesPage} />
      {/* these are the dynamic routes for now */}
      {/* need to figure out how to fail effectively */}
      <Route
        exact
        path={routes.filterRoute(":providerType")}
        component={FilterPage}
      />
      <Route
        exact
        path={routes.practitionerRoute(":practitionerId")}
        component={PractitionerPage}
      />
    </Switch>
  );
};

export default EntryPoint;
