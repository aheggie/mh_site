const appendTitle = (toAppend) => {
  const FIXED = "Healing Through Generations";
  document.title = toAppend ? `${FIXED} - ${toAppend}` : FIXED;
};

export { appendTitle };
