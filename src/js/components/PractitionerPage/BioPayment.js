import React from "react";
import { capitaliseFirstLetter } from "../../professionCodes";
import { curriedFillInStaticTextByLang, enAndFrContent } from "../../utilities";

const AccessibilityIcon = ({ fasClass }) => {
  return (
    <li>
      <i className={`access-icon fas ${fasClass}`}></i>
    </li>
  );
};

const AccessibilityIcons = ({ accessibilityBooleans }) => {
  const iconFasClasses = {
    wheelchair: "fa-wheelchair",
    trans: "fa-transgender-alt",
    slidingScale: "fa-balance-scale",
  };
  return (
    <ul className="accessibility-icons">
      {Object.keys(accessibilityBooleans).map((iconType) =>
        accessibilityBooleans[iconType] ? (
          <AccessibilityIcon
            key={iconFasClasses[iconType]}
            fasClass={iconFasClasses[iconType]}
          />
        ) : null
      )}
    </ul>
  );
};

const staticText = {
  paymentTitle: enAndFrContent("Payment", "Paiement"),
  individualSessionsHeading: enAndFrContent(
    "Individual sessions",
    "Individual sessions"
  ),
  studentIndividualRateHeading: enAndFrContent(
    "Student individual rate",
    "Student individual rate"
  ),
  coupleFamilyRateHeading: enAndFrContent("Couple / Family", "Couple / Family"),
  coupleFamilyStudentRateHeading: enAndFrContent(
    "Student couple / family rate",
    "Student couple / family rate"
  ),
  payByHeading: enAndFrContent("Pay by", "Pay by"),
  insuranceAcceptedHeading: enAndFrContent(
    "Insurance plans accepted",
    "Insurance plans accepted"
  ),
  accessibilityTitle: enAndFrContent(
    "Accessibility information",
    "Info d'accessibilité"
  ),
};

const BioPayment = ({
  lang,
  paymentRates,
  paymentMethods,
  insuranceAccepted,
  accessibilityBooleans,
}) => {
  const fillText = curriedFillInStaticTextByLang(lang);
  const paymentMethodsString = paymentMethods
    .map(capitaliseFirstLetter)
    .join(", ");
  const insuranceAcceptedString = insuranceAccepted
    .map(capitaliseFirstLetter)
    .join(", ");
  return (
    <div className="bio payment bio-box">
      <h2>{fillText(staticText.paymentTitle)}</h2>
      <ul className="payment-rates">
        <li>{`${fillText(staticText.individualSessionsHeading)}: ${
          paymentRates.individual
        }$/hr`}</li>
        <li>{`${fillText(staticText.studentIndividualRateHeading)}: ${
          paymentRates.studentIndividual
        }$/hr`}</li>
        <li>{`${fillText(staticText.coupleFamilyRateHeading)}: ${
          paymentRates.coupleFamily
        }$/hr`}</li>
        <li>{`${fillText(staticText.coupleFamilyStudentRateHeading)}: ${
          paymentRates.studentCoupleFamily
        }$/hr`}</li>
      </ul>
      <ul className="payment-methods">
        <li>{`${fillText(
          staticText.payByHeading
        )}: ${paymentMethodsString}`}</li>
        <li>{`${fillText(
          staticText.insuranceAcceptedHeading
        )}: ${insuranceAcceptedString}`}</li>
      </ul>
      <h2>{fillText(staticText.accessibilityTitle)}</h2>
      <AccessibilityIcons accessibilityBooleans={accessibilityBooleans} />
    </div>
  );
};

export default BioPayment;
