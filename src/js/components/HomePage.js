import React from "react";
import HeaderFooter from "./HeaderFooter";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <HeaderFooter className="homepage">
      <header className="main-head">
        <div className="inner home">
          <h1 id="announce">
            Find mental health professionals of colour in Tiotia:ke (Montreal)
          </h1>
          <Link
            to="/seeking-services"
            className="button purple clear-style"
            id="seek"
          >
            Seeking Services
          </Link>
          <Link
            to="/offering-services"
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
