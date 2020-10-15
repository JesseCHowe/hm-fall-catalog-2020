import React from "react";
import "./Runway.scss";
import { Link } from "react-router-dom";

const Runway = () => {
  const items = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <React.Fragment>
      <div className="runway">
        <div className="sel-color">
          <span className="fall-essentials">
            <span>Fall</span>
            <span className="essentials">Essentials</span>
          </span>
          <p>
            Layer up in a way that reflects your style with our cozy hoodies,
            sweaters and cardigans for women. Discover the latest prints and
            colors, mixed with timeless knits and neutral wardrobe basics that
            will last season after season. Whether you prefer off-the-shoulder,
            oversized or fitted styles, we’ve got you covered this fall.{" "}
          </p>
          <button>Explore</button>
        </div>
        <div className="clothing">
          {items.map((item) => {
            return <Link key={`test1-${item}`} to={`/product/1`} />;
          })}
        </div>
      </div>

      <div className="runway">
        <div className="sel-color">
          <span className="the-knit-factor">
            <span className="the">The</span>
            <span className="knit">KNIT</span>
            <span className="factor">FACTOR</span>
          </span>
          <p>
            Layer up in a way that reflects your style with our cozy hoodies,
            sweaters and cardigans for women. Discover the latest prints and
            colors, mixed with timeless knits and neutral wardrobe basics that
            will last season after season. Whether you prefer off-the-shoulder,
            oversized or fitted styles, we’ve got you covered this fall.{" "}
          </p>
          <button>Explore</button>
        </div>
        <div className="clothing">
          {items.map((item) => {
            return <Link key={`test2-${item}`} to={`/product/1`} />;
          })}
        </div>
      </div>

      <div className="runway">
        <div className="sel-color">
          <span className="the-complete-coat">
            <div className="wrapper">
              <h3>The Complete</h3>
              <div className="content2">
                <h1>
                  CO
                  <br />
                  AT
                </h1>
              </div>
            </div>
          </span>
          <p>
            Layer up in a way that reflects your style with our cozy hoodies,
            sweaters and cardigans for women. Discover the latest prints and
            colors, mixed with timeless knits and neutral wardrobe basics that
            will last season after season. Whether you prefer off-the-shoulder,
            oversized or fitted styles, we’ve got you covered this fall.{" "}
          </p>
          <button>Explore</button>
        </div>
        <div className="clothing">
          {items.map((item) => {
            return <Link key={`test3-${item}`} to={`/product/1`} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Runway;
