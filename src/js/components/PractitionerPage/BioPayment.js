import React from "react";

const BioPayment = () => {
  return (
    <div className="bio payment bio-box">
      <h2>Payment</h2>
      <ul className="payment-rates">
        <li>Individual sessions: 100$ per hour</li>
        <li>Student individual rate: 75$ per hour</li>
        <li>Couple / Family: 125$ per hour</li>
        <li>Student couple / family rate: 100$ per hour</li>
      </ul>
      <ul className="payment-methods">
        <li>Pay by: Cash, etransfer, cheque</li>
        <li>Insurance plans accepted: PlanGreen, PlanYellow</li>
      </ul>
      <h2>Accessibility information</h2>
      <ul className="accessibility-icons">
        <li>
          <i className="access-icon fas fa-wheelchair"></i>
        </li>
        <li>
          <i className="access-icon fas fa-transgender-alt"></i>
        </li>
        <li>
          <i className="access-icon fas fa-balance-scale"></i>
        </li>
      </ul>
    </div>
  );
};

export default BioPayment;
