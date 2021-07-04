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

const RedirectToFr = () => <Redirect to={homeRoute("fr")} />;

const PageNotFound = () => {
  return <h4>404444 ... Page not found</h4>;
};

//the :lang becomes a .lang prop on the match object router sends along
//the (en|fr) is and added regex that validtes if it is one of our valid languages
//to add another language would require an update to this string (amongst many other code changes)
//i.e. adding spanish might result in ":lang(en|fr|sp)"
const langRegex = ":lang(en|fr)";

const EntryPoint = () => {
  return (
    <Switch>
      <Route exact path="/" component={RedirectToFr} />
      <Route exact path={homeRoute(langRegex)} component={HomePage} />
      <Route exact path={seekingRoute(langRegex)} component={SeekingPage} />
      <Route exact path={offeringRoute(langRegex)} component={OfferingPage} />
      <Route exact path={whyRoute(langRegex)} component={WhyPage} />
      <Route exact path={aboutRoute(langRegex)} component={AboutPage} />
      <Route exact path={resourcesRoute(langRegex)} component={ResourcesPage} />
      {/* these are the dynamic routes for now */}
      {/* need to figure out how to fail effectively */}
      <Route
        exact
        path={filterRoute(langRegex, ":providerType")}
        component={FilterPage}
      />
      <Route
        exact
        path={practitionerRoute(langRegex, ":practitionerId")}
        component={PractitionerPage}
      />
      {/* this will match ALL incoming routes and needs to ALWAYS be the last route in the switch */}
      <Route path="/*" component={PageNotFound} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default EntryPoint;
