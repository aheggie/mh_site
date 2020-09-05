import React from "react";

const Home = () => {
  return (
    <div className="wrapper homepage main-wrapper">
      {/* <!-- Navbar --> */}
      <nav className="main-nav sticky">
        <img
          // what is up here?? why won't this image load
          src="../../static/img/cure-logo.png"
          alt="Cure Concordia Logo"
          id="logo"
        />
        <ul id="nav-links">
          <li>
            <a href="index.html" className="clear-style">
              Home
            </a>
          </li>
          <li>
            <a href="seeking-services.html" className="clear-style">
              Seeking Services
            </a>
          </li>
          <li>
            <a href="offering-services.html" className="clear-style">
              Offering Services
            </a>
          </li>
          <li>
            <a href="" className="clear-style">
              Why Does This Exist?
            </a>
          </li>
          <li>
            <a href="" className="clear-style">
              About Us
            </a>
          </li>
          <li>
            <a href="" className="clear-style">
              Resources
            </a>
          </li>
          <li id="nav-lang">
            <a href="" className="clear-style">
              FR
            </a>
          </li>
        </ul>
      </nav>
      {/* this needs to be made to work */}
      <nav className="mobile-nav">
        <i className="fas fa-bars"></i>
      </nav>

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
