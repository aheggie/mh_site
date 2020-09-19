import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./HomePage";
import SeekingPage from "./SeekingPage/SeekingPage";
import OfferingPage from "./OfferingPage";
import WhyPage from "./WhyPage";
import AboutPage from "./AboutPage";
import ResourcesPage from "./ResourcesPage";
import FilterPage from "./FilterPage/FilterPage";
import PractitionerPage from "./PractitionerPage/PractitionerPage";
import {
  aboutRoute,
  filterRoute,
  homeRoute,
  offeringRoute,
  practitionerRoute,
  resourcesRoute,
  seekingRoute,
  whyRoute,
} from "../routes";

const RedirectToFr = () => <Redirect to={"/fr"} />;

const EntryPoint = () => {
  return (
    <Switch>
      <Route exact path="/" component={RedirectToFr} />
      <Route exact path={homeRoute(":lang")} component={HomePage} />
      {/* <Route exact path="/seeking-services" component={SeekingPage} /> */}
      <Route exact path={seekingRoute(":lang")} component={SeekingPage} />
      {/* <Route exact path="/offering-services" component={OfferingPage} /> */}
      <Route exact path={offeringRoute(":lang")} component={OfferingPage} />
      {/* <Route exact path="/why" component={WhyPage} /> */}
      <Route exact path={whyRoute(":lang")} component={WhyPage} />
      {/* <Route exact path="/about" component={AboutPage} /> */}
      <Route exact path={aboutRoute(":lang")} component={AboutPage} />
      {/* <Route exact path="/resources" component={ResourcesPage} /> */}
      <Route exact path={resourcesRoute(":lang")} component={ResourcesPage} />
      {/* these are the dynamic routes for now */}
      {/* need to figure out how to fail effectively */}
      <Route exact path={filterRoute(":providerType")} component={FilterPage} />
      <Route
        exact
        path={practitionerRoute(":practitionerId")}
        component={PractitionerPage}
      />
    </Switch>
  );
};

export default EntryPoint;
