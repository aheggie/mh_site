import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SeekingPage from "./SeekingPage";

const EntryPoint = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/seeking-services" component={SeekingPage} />
    </Switch>
  );
};

export default EntryPoint;
