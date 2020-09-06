import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import EntryPoint from "./components/EntryPoint";
import { appendTitle } from "./utilities";

appendTitle();
render(
  <Router>
    <EntryPoint />
  </Router>,
  document.getElementById("root")
);
