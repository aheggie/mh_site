import React from "react";
import HeaderFooter from "./HeaderFooter";
import { Link } from "react-router-dom";

import routes from "../routes";
import { appendTitle } from "../utilities";
const { seekingRoute, offeringRoute } = routes;

const HomePage = () => {
  appendTitle();
  return (
    <HeaderFooter className="homepage">
      <header className="main-head">
        <div className="inner home">
          <h1 id="announce">
            Find mental health professionals of colour in Tiotia:ke (Montreal)
          </h1>
          <Link
            to={seekingRoute()}
            className="button purple clear-style"
            id="seek"
          >
            Seeking Services
          </Link>
          <Link
            to={offeringRoute()}
            className="button purple clear-style"
            id="offer"
          >
            Offering Services
          </Link>
          <a href="" className="button yellow clear-style" id="newsletter">
            Join Our Newsletter
          </a>
        </div>
      </header>
    </HeaderFooter>
  );
};

export default HomePage;
