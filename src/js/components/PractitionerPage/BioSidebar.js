import React from "react";

const BioSideBarBox = ({ className, title, items }) => {
  return (
    <div className={`bio ${className}`}>
      <h3>{title}</h3>
      <div className="bio-box sidebar-box">
        <ul className="bio-sidebar-list">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
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
  );
};

const BioSidebar = ({ specialisationsItems, issuesItems, approachItems }) => {
  return (
    <div className="bio-sidebar">
      <BioSideBarBox
        className="specializations"
        title="Specializations"
        items={specialisationsItems}
      />
      <BioSideBarBox
        className="issues"
        title="Issues I can support you with"
        items={issuesItems}
      />
      <BioSideBarBox
        className="approach"
        title="Helping approach"
        items={approachItems}
      />
    </div>
  );
};

export default BioSidebar;
