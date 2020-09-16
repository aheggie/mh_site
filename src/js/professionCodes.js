//this is to have a single source of truth for the coding/naming of professions throughout the site,
//primarily to have easy consistency with any database writes and reads on the backend
//and also to have consistent naming practices in the front-en UI

import { enAndFrContent } from "./utilities";

const professionCodes = {
  couple: "couple-and-family-therapists",
  social: "social-workers",
  psychologist: "psychologists",
  sexologist: "sexologists",
  indigenous: "indigenous-elders-and-healers",
  psychotherapist: "psychotherapists",
  other: "other-mental-health-professionals",
};

//this is to consistently pull titles in each language based on the professionCode encoded in the route
//most Static text is held at the root of the component that it is used in
//but this static text is used in at least two pages, the SeekingPage's ProfessionCard subcomponent and the FilterPage
const staticProfessionTitle = {
  [professionCodes.couple]: enAndFrContent(
    "Couple and family therapists",
    "Couple and family therapists"
  ),
  [professionCodes.social]: enAndFrContent("Social workers", "Social workers"),
  [professionCodes.psychologist]: enAndFrContent(
    "Psychologists",
    "Psychologists"
  ),
  [professionCodes.sexologist]: enAndFrContent("Sexologists", "Sexologists"),
  [professionCodes.indigenous]: enAndFrContent(
    "Indigenous elders and healers",
    "Indigenous elders and healers"
  ),
  [professionCodes.psychotherapist]: enAndFrContent(
    "Psychotherapists",
    "Psychotherapists"
  ),
  [professionCodes.other]: enAndFrContent(
    "Other mental health professionals",
    "Other mental health professionals"
  ),
};

//these are utilities to use the codes to generate titles etc

//this replaces dashes with spaces, and capitalises just the first letter of the first word
//used in different parts of site ui
const toSentenceCase = (professionCode) => {
  const sentence = professionCode.split("-").join(" ");
  return capitaliseFirstLetter(sentence);
};

//this replaces dashes with spaces and capitalises the first letter of all words
//used in filter page titles
//maybe could use sentence case in filter page titles too?
const toPageTitleCase = (providerType) =>
  providerType.split("-").map(capitaliseFirstLetter).join(" ");

const capitaliseFirstLetter = (inputString) =>
  `${inputString[0].toUpperCase()}${inputString.slice(1)}`;

export {
  professionCodes,
  staticProfessionTitle,
  toSentenceCase,
  toPageTitleCase,
  capitaliseFirstLetter,
};
