//This file exists to have a single source of truth for the strings representing all static routes in the site
const routes = {
  homeRoute: () => `/`,
  seekingRoute: () => `/seeking-services`,
  offeringRoute: () => `/offering-services`,
  whyRoute: () => `/why`,
  aboutRoute: () => `/about`,
  resourcesRoute: () => `/resources`,
  filterRoute: (profession) => `/filter-by/${profession}`,
  practitionerRoute: (practitionerId) => `/practitioner/${practitionerId}`,
};

export default routes;
