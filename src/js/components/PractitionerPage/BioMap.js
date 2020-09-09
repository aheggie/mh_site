import React from "react";

const BioMap = () => {
  return (
    <div className="bio map">
      <iframe
        title="map to provider office"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAT91kn6MetYtlU-KDzLSuPdvjTHill_Ps&q=1455+de+maisonneuve+west"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BioMap;
