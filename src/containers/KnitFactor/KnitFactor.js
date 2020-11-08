import React, { useState, useEffect } from "react";
import Nav from "../../components/UI/Nav/Nav";
import ProductsList from "../../components/Products/ProductsList";
import "./KnitFactor.scss";
import TheKnitFactorLogo from "../../components/TitleDesigns/TheKnitFactorLogo/TheKnitFactorLogo";

const KnitFactor = () => {
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
        const womensProducts = data.filter(
          (o) => o.category === "the knit factor"
        );
        setProductData(womensProducts);
      })
      .catch((err) => console.error(err));
  }

  let items;
  productData
    ? (items = <ProductsList products={productData} />)
    : (items = <p>Waiting...</p>);

  return (
    <div>
      <div id="the-knit-factor">
        <div className="content">
          <TheKnitFactorLogo mode="main" />
          <p>
            Layer up in a way that reflects your style with our cozy hoodies,
            sweaters and cardigans for women. Discover the latest prints and
            colors, mixed with timeless knits and neutral wardrobe basics that
            will last season after season. Whether you prefer off-the-shoulder,
            oversized or fitted styles, we’ve got you covered this fall.
          </p>
        </div>
        <div className="runway">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Nav />
      {items}
    </div>
  );
};

export default KnitFactor;
