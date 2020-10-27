import React from "react";
import "./TheKnitFactorLogo.scss";

const TheKnitFactorLogo = ({ mode }) => {
  return (
    <span className={`tkf tkf-${mode}`}>
      <span className="the">The</span>
      <span className="knit">KNIT</span>
      <span className="factor">FACTOR</span>
    </span>
  );
};

export default TheKnitFactorLogo;
