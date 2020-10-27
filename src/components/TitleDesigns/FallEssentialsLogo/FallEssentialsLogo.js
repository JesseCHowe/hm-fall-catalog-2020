import React from "react";
import "./FallEssentialsLogo.scss";

const FallEssentialsLogo = ({mode}) => {
  return (
    <span className={`fe-logo fe-${mode}`}>
      <span className="fall">FALL</span>
      <br />
      ESSENTIALS
    </span>
  );
};

export default FallEssentialsLogo;
