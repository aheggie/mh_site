import React from "react";

const BioPhoto = ({ photo }) => {
  return (
    <div className="bio-photo">
      <img src={photo} className="bio-thumbnail" />
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

export default BioPhoto;
