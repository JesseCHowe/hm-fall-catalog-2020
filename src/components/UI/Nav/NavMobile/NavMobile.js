import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../../../store/actions/cart";
import FocusTrap from "focus-trap-react";
import FallEssentialsLogo from "../../../TitleDesigns/FallEssentialsLogo/FallEssentialsLogo";
import TheKnitFactorLogo from "../../../TitleDesigns/TheKnitFactorLogo/TheKnitFactorLogo";
import CompleteCoatLogo from "../../../TitleDesigns/CompleteCoatLogo/CompleteCoatLogo";

import "./NavMobile.scss";
import "./NavMobileAnimations.scss";

const NavMobile = () => {
  const dispatch = useDispatch();
  const [openMode, setOpenMode] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const total = products.reduce((prev, cur) => prev + cur.qty, 0);

  React.useEffect(() => {
    function navMode(e) {
      if (e.keyCode === 27) setOpenMode(null);
    }
    document.addEventListener("keydown", navMode);
    return () => document.removeEventListener("keydown", navMode);
  });

  let open = "inactive";
  openMode ? (open = "open") : (open = "inactive");

  let navItems;
  if (openMode) {
    navItems = (
      <FocusTrap>
        <div className="navMobile-modal">
          <div
            className={`overlay-${open}`}
            onClick={() => setOpenMode(null)}
          />
          <ul>
            <li>
              <button className="exit-btn" onClick={() => setOpenMode(null)}>
                &#10005;
              </button>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/fallessentials" onClick={() => setOpenMode(false)}>
                <FallEssentialsLogo />
              </NavLink>
            </li>
            <li>
              <NavLink to="/knit">
                <TheKnitFactorLogo mode="nav" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/the-complete-coat">
                <CompleteCoatLogo mode="nav" />
              </NavLink>
            </li>
          </ul>
        </div>
      </FocusTrap>
    );
  }

  return (
    <React.Fragment>
      <div className="navMobile navMobile-btns">
        <button
          className="navMobile-modal-btn"
          onClick={() => setOpenMode(true)}
        >
          <i className="fa fa-bars"></i>
          <i className="fa fa-bars"></i>
          <i className="fa fa-bars"></i>
        </button>
        <button
          className="navMobile-cart-btn"
          onClick={() => dispatch(toggleCart())}
        >
          <span>Cart ({total})</span>
        </button>
      </div>
      <div className={`navMobile navMobile-modal-container ${open}`}>
        {navItems}
      </div>
    </React.Fragment>
  );
};

export default NavMobile;
