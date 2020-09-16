import React from "react";
import { curriedFillInStaticTextByLang, enAndFrContent } from "../../utilities";

//everywhere else staticText is just strings
//having it functions feels wrong but its just in this
//single subcomponent?
//could be handled in some other way here though
const staticText = {
  contactStringFunc: enAndFrContent(
    (name) => `Contact ${name} now`,
    (name) => `Contact ${name} now`
  ),
};

const BioContact = ({ lang, name, email, phone, address, languages }) => {
  const fillText = curriedFillInStaticTextByLang(lang);
  const contactString = fillText(staticText.contactStringFunc)(name);
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
