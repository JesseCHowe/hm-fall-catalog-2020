import React from "react";
import "./CompleteCoatLogo.scss";

const CompleteCoatLogo = ({mode}) => {
  return (
    <div className={`tcc-${mode}`}>
      <div className="the-complete">
        <span>The Complete</span>
      </div>
      <div>
        <h1>
          CO
          <br />
          AT
        </h1>
      </div>
    </div>
  );
};

export default CompleteCoatLogo;
