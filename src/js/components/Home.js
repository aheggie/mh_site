import React from "react";
import Nav from "./Nav";

const Home = () => {
  return (
    <div className="wrapper homepage main-wrapper">
      <Nav />

      {/* <!-- Header --> */}
      <header className="main-head">
        <div className="inner home">
          <h1 id="announce">
            Find mental health professionals of colour in Tiotia:ke (Montreal)
          </h1>
          <a
            href="seeking-services.html"
            className="button purple clear-style"
            id="seek"
          >
            Seeking Services
          </a>
          <a
            href="offering-services.html"
            className="button purple clear-style"
            id="offer"
          >
            Offering Services
          </a>
          <a
            href="offering-services.html"
            className="button yellow clear-style"
            id="newsletter"
          >
            Join Our Newsletter
          </a>
        </div>
      </header>

      {/* <!-- Footer --> */}
      <footer className="main-foot">
        <div className="wrapper footer">
          <ul className="footer-social">
            <li>
              <a href="" className="clear-style" id="email">
                Sign up for email updates
              </a>
            </li>
            <li>
              <a href="" className="fb clear-style">
                <span className="fb">f</span>
              </a>
            </li>
          </ul>
          <ul className="footer-nav">
            <li>
              <a href="seeking-services.html">Seeking Services</a>
            </li>
            <li>
              <a href="offering-services.html">Offering Services</a>
            </li>
            <li>
              <a href="">Why Does This Exist?</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Resources</a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          Copyright © CURE Concordia 2019, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
