import React from "react";
import HeaderFooter from "./HeaderFooter";
import { appendTitle } from "../utilities";

//in the legacy site there was no design spec given and so no special
//css for the content-only pages About Us, Why Does This Exist, and Resources
//
//this component piggybacks off the css of the Offering Services
//page, which has a title and a content before some buttons
//
//by not putting buttons in, we can simply borrow
//the title and content styling
//
//However this strictly limits the content and styling
//of any Pages that use this component
//
//they can only give it multiple <p> tags as children
//and a title as a prop
//because nothing else will receive css styles
//
//to customise the styling or content of any content pages
//they will need to:
//1. remove use of this GenericContentPage component
//2. have their own custom component built
//3. have new css styling written to catch their custom component
//

//As of writing this comment, three Pages use this GenericContentPage:
//1. AboutPage
//2. WhyPage
//3. ResourcesPage

const GenericContentPage = ({ lang, title, children }) => {
  appendTitle(title);
  return (
    <HeaderFooter lang={lang} className="services">
      <article className="content">
        <div className="offering inner">
          <div className="page-intro">
            <h1 className="page-title">{title}</h1>
            {children}
          </div>
        </div>
      </article>
    </HeaderFooter>
  );
};

export default GenericContentPage;
