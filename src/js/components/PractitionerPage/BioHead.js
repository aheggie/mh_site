import React from "react";

const BioHead = ({ name, title }) => {
  return (
    <div className="bio-head">
      <h1 className="bio-name">{name}</h1>
      <h2 className="bio-title">{title}</h2>
    </div>
  );
};

export default BioHead;
