import React from "react";
import { NavLink } from "react-router-dom";
import "./NavDesktop.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../../../store/actions/cart";
import FallEssentialsLogo from "../../../TitleDesigns/FallEssentialsLogo/FallEssentialsLogo";
import TheKnitFactorLogo from "../../../TitleDesigns/TheKnitFactorLogo/TheKnitFactorLogo";
import CompleteCoatLogo from "../../../TitleDesigns/CompleteCoatLogo/CompleteCoatLogo";

const NavDesktop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const total = products.reduce((prev, cur) => prev + cur.qty, 0);

  return (
    <div id="nav-container">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/fallessentials">
            <FallEssentialsLogo mode="nav" />
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
        <li className="cart-li" onClick={() => dispatch(toggleCart())}>
          <button>Cart ({total})</button>
        </li>
      </ul>
    </div>
  );
};

export default NavDesktop;
