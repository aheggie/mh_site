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
  //note: these are new in the site text,
  psychoeducator: "psychoeducators",
  creative: "creative-arts-therapists",
};

//this is to consistently pull titles in each language based on the professionCode encoded in the route
//most Static text is held at the root of the component that it is used in
//but this static text is used in at least two pages, the SeekingPage's ProfessionCard subcomponent and the FilterPage
const staticProfessionTitle = {
  [professionCodes.couple]: enAndFrContent(
    "Couple and family therapists",
    "Thérapeutes de couple / de mariage et de famille"
  ),
  [professionCodes.social]: enAndFrContent(
    "Social workers",
    "Travailleurs sociaux"
  ),
  [professionCodes.psychologist]: enAndFrContent(
    "Psychologists",
    "Psychologues"
  ),
  [professionCodes.sexologist]: enAndFrContent("Sexologists", "Sexologues"),
  [professionCodes.indigenous]: enAndFrContent(
    "Indigenous elders and healers",
    "Aînés et guérisseurs autochtones "
  ),
  [professionCodes.psychotherapist]: enAndFrContent(
    "Psychotherapists and others with psychotherapy permit",
    "Psychothérapeutes et titulaires de permis en psychothérapie"
  ),
  [professionCodes.other]: enAndFrContent(
    "Other mental health professionals",
    "D’autres professionnels de la santé mentale"
  ),
  //note: these are new in the site text,
  [professionCodes.psychoeducator]: enAndFrContent(
    "Psychoeducators",
    "Psychoéducateurs"
  ),
  [professionCodes.creative]: enAndFrContent(
    "Creative arts therapies",
    "Thérapies par les arts créatifs"
  ),
};

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada tortor nisi, id mollis ligula sollicitudin dapibus. Aliquam in sollicitudin magna. Vivamus vel aliquet metus. Sed imperdiet erat a fringilla aliquam. Etiam at accumsan. Sed malesuada tortor nisi, id mollis ligula dapibus.";

//this is sort of deep in for this data to sit but it is only used in this component
//and it makes this component a simple finite state machine based only on lang and professionCode
const staticProfessionDescription = {
  [professionCodes.couple]: enAndFrContent(loremIpsum, loremIpsum),
  [professionCodes.social]: enAndFrContent(loremIpsum, loremIpsum),
  [professionCodes.psychologist]: enAndFrContent(loremIpsum, loremIpsum),
  [professionCodes.sexologist]: enAndFrContent(loremIpsum, loremIpsum),
  [professionCodes.indigenous]: enAndFrContent(loremIpsum, loremIpsum),
  [professionCodes.psychotherapist]: enAndFrContent(loremIpsum, loremIpsum),
  [professionCodes.other]: enAndFrContent(loremIpsum, loremIpsum),
  [professionCodes.psychoeducator]: enAndFrContent(loremIpsum, loremIpsum),
  [professionCodes.creative]: enAndFrContent(loremIpsum, loremIpsum),
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
  staticProfessionDescription,
  toSentenceCase,
  toPageTitleCase,
  capitaliseFirstLetter,
};
