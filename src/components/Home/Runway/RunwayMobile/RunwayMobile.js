import React from "react";
import { NavLink } from "react-router-dom";
import "./RunwayMobile.scss";
import FallEssentialsLogo from "../../../TitleDesigns/FallEssentialsLogo/FallEssentialsLogo";
import CompleteCoatLogo from "../../../TitleDesigns/CompleteCoatLogo/CompleteCoatLogo";
import TheKnitFactorLogo from "../../../TitleDesigns/TheKnitFactorLogo/TheKnitFactorLogo";
import RunwayCarousel from "./RunwayCarousel";

const RunwayMobile = ({ products }) => {
  return (
    <React.Fragment>
      <div id="runway-mobile">
        <div>
          <div className="title-container">
            <FallEssentialsLogo mode="runway" />
          </div>
          <RunwayCarousel dummyData={products.fallEssentials} />
          <div className="description-container">
            <p>
              Layer up in a way that reflects your style with our cozy hoodies,
              sweaters and cardigans for women. Discover the latest prints and
              colors, mixed with timeless knits and neutral wardrobe basics that
              will last season after season. Whether you prefer
              off-the-shoulder, oversized or fitted styles, we’ve got you
              covered this fall.{" "}
            </p>
            <div className="btn-container">
              <NavLink className="explore-button" to="/fallessentials">
                Explore
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div id="runway-mobile">
        <div>
          <div className="title-container">
            <TheKnitFactorLogo mode="runway" />
          </div>
          <RunwayCarousel dummyData={products.theKnitFactor} />
          <div className="description-container">
            <p>
              Layer up in a way that reflects your style with our cozy hoodies,
              sweaters and cardigans for women. Discover the latest prints and
              colors, mixed with timeless knits and neutral wardrobe basics that
              will last season after season. Whether you prefer
              off-the-shoulder, oversized or fitted styles, we’ve got you
              covered this fall.{" "}
            </p>
            <div className="btn-container">
              <NavLink className="explore-button" to="/knit">
                Explore
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div id="runway-mobile">
        <div>
          <div className="title-container">
            <CompleteCoatLogo mode="runway" />
          </div>
          <RunwayCarousel dummyData={products.theCompleteCoat} />
          <div className="description-container">
            <p>
              Layer up in a way that reflects your style with our cozy hoodies,
              sweaters and cardigans for women. Discover the latest prints and
              colors, mixed with timeless knits and neutral wardrobe basics that
              will last season after season. Whether you prefer
              off-the-shoulder, oversized or fitted styles, we’ve got you
              covered this fall.{" "}
            </p>
            <div className="btn-container">
              <NavLink className="explore-button" to="/the-complete-coat">
                Explore
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RunwayMobile;
