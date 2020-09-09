import React from "react";

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

export default BioSidebar;
