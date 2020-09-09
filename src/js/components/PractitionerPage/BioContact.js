import React from "react";

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

export default BioContact;
