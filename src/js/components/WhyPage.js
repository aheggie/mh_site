import React from "react";
import GenericContentPage from "./GenericContentPage";

//see GenericContentPage.js for a longer comment about
//the (fairly strict) limitations these generic pages can contain
//
//Basically - they can receive a title as a prop and <p> tags as
//children and that's it
//
//For more complex content a custom component and new css will be needed

const WhyPage = () => {
  return (
    <GenericContentPage title="Why does this exist?">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
        tortor nisi, id mollis ligula sollicitudin dapibus. Aliquam in
        sollicitudin magna. Vivamus vel aliquet metus. Vestibulum justo arcu,
        pretium a vulputate eget, dapibus vitae risus. Sed imperdiet erat a
        fringilla aliquam. Etiam at accumsan tortor. Donec nulla diam, molestie
        nec sollicitudin eget, eleifend nec libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
        tortor nisi, id mollis ligula sollicitudin dapibus. Aliquam in
        sollicitudin magna. Vivamus vel aliquet metus. Vestibulum justo arcu,
        pretium a vulputate eget, dapibus vitae risus. Sed imperdiet erat a
        fringilla aliquam. Etiam at accumsan tortor. Donec nulla diam, molestie
        nec sollicitudin eget, eleifend nec libero.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
        tortor nisi, id mollis ligula sollicitudin dapibus. Aliquam in
        sollicitudin magna. Vivamus vel aliquet metus. Vestibulum justo arcu,
        pretium a vulputate eget, dapibus vitae risus. Sed imperdiet erat a
        fringilla aliquam. Etiam at accumsan tortor. Donec nulla diam, molestie
        nec sollicitudin eget, eleifend nec libero.
      </p>
    </GenericContentPage>
  );
};

export default WhyPage;
