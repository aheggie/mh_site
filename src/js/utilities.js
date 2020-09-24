import parse from "html-react-parser";

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

//this wraps any received string in a <p> tag - if there are newlines it replaces them with new p tags
const imputeNewlinesIntoParagraphTags = (textStringWithNewlinesBetweenParas) =>
  `<p>${textStringWithNewlinesBetweenParas.split("\n").join("</p><p>")}</p>`;

const imputeNewlinesIntoParagraphTagsAndParseAsJSX = (
  textStringWithNewlinesBetweenParas
) => parse(imputeNewlinesIntoParagraphTags(textStringWithNewlinesBetweenParas));

export {
  enAndFrContent,
  appendTitle,
  curriedFillInStaticTextByLang,
  imputeNewlinesIntoParagraphTags,
  imputeNewlinesIntoParagraphTagsAndParseAsJSX,
};
