import React, { useState, useEffect } from "react";
import Nav from "../../components/UI/Nav/Nav";
import ProductsList from "../../components/Products/ProductsList";
import "./FallEssentials.scss";

const FallEssentials = () => {
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
        const womensProducts = data.filter((o) => o.category === "womens");
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
      <div id="fall-essenitals-header">
        <h1>
          <span className="fall">FALL</span>
          <br />
          ESSENTIALS
        </h1>
      </div>
      <Nav />
      {items}
    </div>
  );
};

export default FallEssentials;
