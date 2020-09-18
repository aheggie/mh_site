import React from "react";
import { curriedFillInStaticTextByLang, enAndFrContent } from "../../utilities";
import BioSideBarBox from "./BioSidebarBox";

const staticText = {
  specializationsTitle: enAndFrContent("Clientele", "Clientèle"),
  issuesTitle: enAndFrContent(
    "Issues I can support you with",
    "Problèmes avec lesquels je peux vous aider"
  ),
  approachTitle: enAndFrContent("Helping approach", "Ma démarche"),
};

const BioSidebar = ({
  lang,
  specialisationsItems,
  issuesItems,
  approachItems,
}) => {
  const fillText = curriedFillInStaticTextByLang(lang);
  return (
    <div className="bio-sidebar">
      <BioSideBarBox
        className="specializations"
        title={fillText(staticText.specializationsTitle)}
        items={specialisationsItems}
      />
      <BioSideBarBox
        className="issues"
        title={fillText(staticText.issuesTitle)}
        items={issuesItems}
      />
      <BioSideBarBox
        className="approach"
        title={fillText(staticText.approachTitle)}
        items={approachItems}
      />
    </div>
  );
};

export default BioSidebar;
