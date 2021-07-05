import React from "react";
import { Link } from "react-router-dom";
import { homeRoute } from "../routes";
import GenericContentPage from "./GenericContentPage";

function PageNotFound({ match }) {
  // because we do not receive this from the route we
  // will default to french for the links
  console.log(match);
  const lang = "fr";
  // this is to pass a default 404 url down to navlinks so
  // the url switcher will sort of work
  //
  // because this page only matches in router on any bad url
  // router always sends "/" as match.url and we can't give it to
  // the language switcher
  const url = "/fr/404";
  return (
    <GenericContentPage
      url={url}
      lang={lang}
      title={"404: Page Not Found | 404 - Page non trouvée"}
    >
      <p>
        We're sorry, but this page could not be found. Click
        <Link to={homeRoute("en")}> here</Link> to return to the home page.
      </p>
      <p>
        Désolées, cette page est introuvable. Cliquez
        <Link to={homeRoute("en")}> ici</Link> pour retourner à la page
        d'accueil.
      </p>
    </GenericContentPage>
  );
}

export default PageNotFound;
