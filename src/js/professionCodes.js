//this is to have a single source of truth for the coding/naming of professions throughout the site,
//primarily to have easy consistency with any database writes and reads on the backend
//and also to have consistent naming practices in the front-en UI

const professionCodes = {
  couple: "couple-and-family-therapists",
  social: "social-workers",
  psychologist: "psychologists",
  sexologist: "sexologists",
  indigenous: "indigenous-elders-and-healers",
  psychotherapist: "psychotherapists",
  other: "other-mental-health-professionals",
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

export default professionCodes;
export { toSentenceCase, toPageTitleCase, capitaliseFirstLetter };
