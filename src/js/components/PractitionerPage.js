import React from "react";
import HeaderFooter from "./HeaderFooter";
import { appendTitle } from "../utilities";

import practitionerBioPhoto from "../../static/img/bio-image.jpg";

const BioHead = () => {
  return (
    <div className="bio-head">
      <h1 className="bio-name">Dr. Jane Doe</h1>
      <h2 className="bio-title">Psychologist, PhD, OPQ</h2>
    </div>
  );
};

const BioPhoto = () => {
  return (
    <div className="bio-photo">
      <img src={practitionerBioPhoto} className="bio-thumbnail" />
      <ul className="bio-icons">
        <li>
          <i className="fas bio fa-plus-square"></i>
        </li>
        <li>
          <i className="fas bio fa-heart"></i>
        </li>
        <li>
          <i className="fas bio fa-check-circle"></i>
        </li>
      </ul>
    </div>
  );
};

const BioAbout = () => {
  return (
    <div className="bio about">
      <h2>About me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id velit
        faucibus, pharetra mauris non, dictum nunc. Vestibulum sem lorem, semper
        sed iaculis at, ultricies non lacus. Suspendisse vestibulum tellus quis
        enim dictum, sed pulvinar nisi eleifend. Mauris pulvinar, est quis
        ultrices pellentesque, est ligula tincidunt libero, non scelerisque
        velit risus in magna. Donec pulvinar malesuada orci in varius. Etiam
        convallis, risus eu iaculis condimentum, tortor felis vulputate orci, id
        laoreet turpis nulla gravida purus. Quisque malesuada nisi a diam
        suscipit vestibulum. Curabitur lobortis pellentesque orci, vel pretium
        erat ornare eu. Vivamus feugiat tempor pretium. Quisque lacus risus,
        ornare at consectetur eget, commodo in sapien. Nullam vulputate laoreet
        consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id velit
        faucibus, pharetra mauris non, dictum nunc. Vestibulum sem lorem, semper
        sed iaculis at, ultricies non lacus. Suspendisse vestibulum tellus quis
        enim dictum, sed pulvinar nisi eleifend. Mauris pulvinar, est quis
        ultrices pellentesque, est ligula tincidunt libero, non scelerisque
        velit risus in magna. Donec pulvinar malesuada orci in varius. Etiam
        convallis, risus eu iaculis condimentum, tortor felis vulputate orci, id
        laoreet turpis nulla gravida purus. Quisque malesuada nisi a diam
        suscipit vestibulum. Curabitur lobortis pellentesque orci, vel pretium
        erat ornare eu. Vivamus feugiat tempor pretium. Quisque lacus risus,
        ornare at consectetur eget, commodo in sapien. Nullam vulputate laoreet
        consequat.
      </p>
    </div>
  );
};

const BioIcons = () => {
  //NOTE - I don't understand why this empty component was there or what it represents in the design ??
  return <div className="bio-icons"></div>;
};

const BioContact = () => {
  return (
    <div className="bio contact">
      <h2 className="bio full-width-contact-title">Contact Dr. Jane Doe now</h2>
      <div className="bio-box sidebar-box">
        <h3 className="bio mobile-contact-title">Contact Dr. Jane Doe now</h3>
        <ul className="contact-details">
          <li className="email">janedoepsychologist.ca</li>
          <li className="phone">514-000-0000</li>
          <li className="address">1234 Happy Street A1D 2G5</li>
          <li className="speaks-langs">English, French, Haitian Créole</li>
        </ul>
      </div>
    </div>
  );
};

const BioSidebar = () => {
  return (
    <div className="bio-sidebar">
      <div className="bio specializations">
        <h3>Specializations</h3>
        <div className="bio-box sidebar-box">
          <ul className="bio-sidebar-list">
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
          </ul>
          <div className="expand">
            <span className="see-more">
              <a href="" className="clear-style">
                SEE MORE
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="bio issues">
        <h3>Issues I can support you with</h3>
        <div className="bio-box sidebar-box">
          <ul className="bio-sidebar-list">
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
          </ul>
          <div className="expand">
            <span className="see-more">
              <a href="" className="clear-style">
                SEE MORE
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="bio approach">
        <h3>Helping approach</h3>
        <div className="bio-box sidebar-box">
          <ul className="bio-sidebar-list">
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
          </ul>
          <div className="expand">
            <span className="see-more">
              <a href="" className="clear-style">
                SEE MORE
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BioPayment = () => {
  return (
    <div className="bio payment bio-box">
      <h2>Payment</h2>
      <ul className="payment-rates">
        <li>Individual sessions: 100$ per hour</li>
        <li>Student individual rate: 75$ per hour</li>
        <li>Couple / Family: 125$ per hour</li>
        <li>Student couple / family rate: 100$ per hour</li>
      </ul>
      <ul className="payment-methods">
        <li>Pay by: Cash, etransfer, cheque</li>
        <li>Insurance plans accepted: PlanGreen, PlanYellow</li>
      </ul>
      <h2>Accessibility information</h2>
      <ul className="accessibility-icons">
        <li>
          <i className="access-icon fas fa-wheelchair"></i>
        </li>
        <li>
          <i className="access-icon fas fa-transgender-alt"></i>
        </li>
        <li>
          <i className="access-icon fas fa-balance-scale"></i>
        </li>
      </ul>
    </div>
  );
};

const BioQualifications = () => {
  return (
    <div className="bio qualifications bio-box">
      <h2>Qualifications</h2>
      <ul>
        <li>Order: Order of Psychologists of Quebec (OPQ)</li>
        <li>License number: #1280058</li>
        <li>School: McGill University Post-Doc - Clinical Psychology</li>
        <li>Year graduated: 2015</li>
        <li>Years in practice: 5 years</li>
      </ul>
      <h2>Extra credentials</h2>
      <p>Phasellus sagittis, risus id gravida feugiat.</p>
    </div>
  );
};

const PractitionerPage = () => {
  appendTitle();
  return (
    <HeaderFooter className="services">
      <article className="content">
        <div className="bio-page inner">
          {/* 1 */}
          <BioHead />

          {/* 2 */}
          <BioPhoto />

          {/* 3 */}
          <BioAbout />

          {/* 4 */}
          {/* what does this DO ??? div is empty */}
          <BioIcons />

          {/* 5 */}
          <BioContact />

          {/* 6 */}
          <BioSidebar />

          {/* 7 */}
          <BioPayment />

          {/* 8 - this breaks render for some reason */}
          {/* <div className="bio map">
            <iframe
              title="map to provider office"
              width="100%"
              height="100%"
              frameBorder="0"
              style="border:0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAT91kn6MetYtlU-KDzLSuPdvjTHill_Ps&q=Montreal+Quebec"
              allowFullScreen
            ></iframe>
          </div> */}

          {/* 9 */}
          <BioQualifications />
        </div>
      </article>
    </HeaderFooter>
  );
};

export default PractitionerPage;
