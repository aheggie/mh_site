import React from "react";
import { staticProfessionTitle } from "../../professionCodes";
import { curriedFillInStaticTextByLang } from "../../utilities";

const ProfessionOption = ({ lang, professionCode }) => {
  const fillText = curriedFillInStaticTextByLang(lang);
  console.log(staticProfessionTitle, professionCode);
  return (
    <option value={professionCode}>
      {fillText(staticProfessionTitle[professionCode])}
    </option>
  );
};

export default ProfessionOption;
