import React, { useState, useEffect } from "react";
import RunwayMobile from "./RunwayMobile/RunwayMobile";
import RunwayDesktop from "./RunwayDesktop/RunwayDesktop";

const Runway = () => {
  let [productData, setProductData] = useState(null);

  useEffect(() => {
    if (!productData) {
      loadProducts();
    }
  });

  async function loadProducts() {
    await fetch("/.netlify/functions/get-products")
      .then((res) => res.json())
      .then((data) => {
        const fallEssentials = data.filter((o) => o.category === "fall essentials").slice(0,7);
        const theKnitFactor = data.filter((o) => o.category === "the knit factor").slice(0,7);
        const theCompleteCoat = data.filter((o) => o.category === "the complete coat").slice(0,7);
        setProductData({
          fallEssentials: fallEssentials,
          theKnitFactor: theKnitFactor,
          theCompleteCoat: theCompleteCoat,
        });
      })
      .catch((err) => console.error(err));
  }

  let items;
  productData
    ? (items = (
        <React.Fragment>
          <RunwayDesktop products={productData} />
          <RunwayMobile products={productData} />
        </React.Fragment>
      ))
    : (items = <p>Waiting...</p>);

  return <React.Fragment>{items}</React.Fragment>;
};

export default Runway;
