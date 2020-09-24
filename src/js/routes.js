//This file exists to have a single source of truth for the strings representing all static routes in the site
const homeRoute = (lang) => `/${lang}/`;
const seekingRoute = (lang) => `/${lang}/seeking-services`;
const offeringRoute = (lang) => `/${lang}/offering-services`;
const whyRoute = (lang) => `/${lang}/why`;
const aboutRoute = (lang) => `/${lang}/about`;
const resourcesRoute = (lang) => `/${lang}/resources`;
const filterRoute = (lang, profession) => `/${lang}/filter-by/${profession}`;
const practitionerRoute = (lang, practitionerId) =>
  `/${lang}/practitioner/${practitionerId}`;

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
