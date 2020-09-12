//this retitles the page in the browser, appending a sub-name for the route in question, if
//any, to the fixed base name of the entire site

const appendTitle = (toAppend) => {
  const FIXED = "Healing Through Generations";
  document.title = toAppend ? `${FIXED} - ${toAppend}` : FIXED;
};

//this takes an english content and a french content and returns an object with the contents keyed to the languages
//this is to build out the StaticText object at the root of each component in a dry way

const enAndFrContent = (enContent, frContent) => ({
  en: enContent,
  fr: frContent,
});

const curriedFillInStaticTextByLang = (lang) => (textObjectPath) =>
  textObjectPath[lang];

export { enAndFrContent, appendTitle, curriedFillInStaticTextByLang };
