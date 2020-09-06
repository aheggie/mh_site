//this retitles the page in the browser, appending a sub-name for the route in question, if
//any, to the fixed base name of the entire site

const appendTitle = (toAppend) => {
  const FIXED = "Healing Through Generations";
  document.title = toAppend ? `${FIXED} - ${toAppend}` : FIXED;
};

export { appendTitle };
