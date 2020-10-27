import React from "react";
import NavDesktop from "./NavDesktop/NavDesktop";
import NavMobile from "./NavMobile/NavMobile";

const Nav = () => {
  return (
    <React.Fragment>
      <NavDesktop/>
      <NavMobile/>
    </React.Fragment>
  );
};

export default Nav;
