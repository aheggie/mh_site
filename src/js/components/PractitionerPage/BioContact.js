import React from "react";

const BioContact = ({ name, email, phone, address, languages }) => {
  const contactString = `Contact ${name} now`;
  //right now placeholder data (see placeholderData.js) is an array of string language names
  //not sure if db will ultimately produce similar data structure
  const languagesString = languages.join(", ");

  return (
    <div className="bio contact">
      <h2 className="bio full-width-contact-title">{contactString}</h2>
      <div className="bio-box sidebar-box">
        <h3 className="bio mobile-contact-title">{contactString}</h3>
        <ul className="contact-details">
          <li className="email">{email}</li>
          <li className="phone">{phone}</li>
          <li className="address">{address}</li>
          <li className="speaks-langs">{languagesString}</li>
        </ul>
      </div>
    </div>
  );
};

export default BioContact;
