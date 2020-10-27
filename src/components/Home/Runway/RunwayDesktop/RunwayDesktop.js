import React from "react";
import "./RunwayDesktop.scss";
import { Link } from "react-router-dom";
import CompleteCoatLogo from "../../../TitleDesigns/CompleteCoatLogo/CompleteCoatLogo";
import { NavLink } from "react-router-dom";
import FallEssentialsLogo from "../../../TitleDesigns/FallEssentialsLogo/FallEssentialsLogo";
import TheKnitFactorLogo from "../../../TitleDesigns/TheKnitFactorLogo/TheKnitFactorLogo";
import styled from "styled-components";

const RunwayDesktop = ({ products }) => {
  return (
    <React.Fragment>
      <div className="runway">
        <div className="theme-desc">
          <FallEssentialsLogo mode="runway" />
          <p>
            Layer up in a way that reflects your style with our cozy hoodies,
            sweaters and cardigans for women. Discover the latest prints and
            colors, mixed with timeless knits and neutral wardrobe basics that
            will last season after season. Whether you prefer off-the-shoulder,
            oversized or fitted styles, we’ve got you covered this fall.{" "}
          </p>
          <div className="btn-container">
            <NavLink to="/fallessentials" className="explore-button fe-btn">
              Explore
            </NavLink>
          </div>
        </div>
        <div className="clothing">
          {products.fallEssentials.map((item) => {
            return (
              <Link key={item.id} to={`/product/${item.id}`}>
                <Model img={item.image}></Model>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="runway">
        <div className="theme-desc">
          <TheKnitFactorLogo mode="runway" />
          <p>
            Layer up in a way that reflects your style with our cozy hoodies,
            sweaters and cardigans for women. Discover the latest prints and
            colors, mixed with timeless knits and neutral wardrobe basics that
            will last season after season. Whether you prefer off-the-shoulder,
            oversized or fitted styles, we’ve got you covered this fall.{" "}
          </p>
          <div className="btn-container">
            <NavLink to="/knit" className="explore-button tkf-btn">
              Explore
            </NavLink>
          </div>
        </div>
        <div className="clothing">
          {products.theKnitFactor.map((item) => {
            return (
              <Link key={item.id} to={`/product/${item.id}`}>
                <Model img={item.image}></Model>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="runway">
        <div className="theme-desc">
          <CompleteCoatLogo mode="runway" />
          <p>
            Stay warm in style with our range of coats and jackets. No matter
            the season or the forecast, our timeless peacoats, trench coats and
            overcoats have you covered. Looking for a lighter layer? Browse our
            selection of jackets for versatile denim looks, on-trend bomber
            jackets and sleek leather styles.
          </p>
          <div className="btn-container">
            <NavLink to="/the-complete-coat" className="explore-button tcc-btn">
              Explore
            </NavLink>
          </div>
        </div>
        <div className="clothing">
          {products.theCompleteCoat.map((item) => {
            return (
              <Link key={item.id} to={`/product/${item.id}`}>
                <Model img={item.image}></Model>
              </Link>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

const Model = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.img})`};
`;

export default RunwayDesktop;
