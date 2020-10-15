import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
import styled from "styled-components";

const Nav = () => {
  return (
    <FallNav className="nav-container">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/fallessentials">
            <span className="fall-essentials">
              <span>Fall</span>
              <span className="essentials">Essentials</span>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/knit">
            <span className="the-knit-factor">
              <span className="the">The</span>
              <span className="knit">KNIT</span>
              <span className="factor">FACTOR</span>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/the-complete-coat">
            <span className="the-complete-coat-nav">
              <div className="wrapper-nav">
                <div className="content2-nav">
                  <h1>
                    CO
                    <br />
                    AT
                  </h1>
                </div>
              </div>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </FallNav>
  );
};

const FallNav = styled.div`
  li > * {
    position: relative;
    font-weight: bold;
    font-size: 1rem;
    color: #333;
    text-decoration: none;
    z-index: 150;
  }
  li > *::before {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    top: -0.6rem;
    left: -0.6rem;
    background: none;
    z-index: -1;
  }
  li > *:hover::before {
  }
`;

export default Nav;
