//This file exists to have a single source of truth for the strings representing all static routes in the site
const homeRoute = () => `/`;
const seekingRoute = () => `/seeking-services`;
const offeringRoute = () => `/offering-services`;
const whyRoute = () => `/why`;
const aboutRoute = () => `/about`;
const resourcesRoute = () => `/resources`;
const filterRoute = (profession) => `/filter-by/${profession}`;
const practitionerRoute = (practitionerId) => `/practitioner/${practitionerId}`;

export {
  homeRoute,
  filterRoute,
  seekingRoute,
  offeringRoute,
  whyRoute,
  aboutRoute,
  resourcesRoute,
  practitionerRoute,
};
