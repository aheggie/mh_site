import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import EntryPoint from "./components/EntryPoint";
import MobileNavActiveStateProvider from "./providers/MobileNavActiveStateProvider";
import { appendTitle } from "./utilities";

appendTitle();
render(
  <Router>
    <MobileNavActiveStateProvider>
      <EntryPoint />
    </MobileNavActiveStateProvider>
  </Router>,
  document.getElementById("root")
);
