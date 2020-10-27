import React, { useState, useEffect } from "react";
import Nav from "../../components/UI/Nav/Nav";
import ProductsList from "../../components/Products/ProductsList";
import CompleteCoatLogo from "../../components/TitleDesigns/CompleteCoatLogo/CompleteCoatLogo";
import "./TheCompleteCoat.scss";

const TheCompleteCoat = () => {
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
          (o) => o.category === "the complete coat"
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
      <div id="the-complete-coat">
        <div className="content">
          <div className="coat-container">
            <CompleteCoatLogo mode="main" />
          </div>
          <div className="content">
            <div>
              <p>
                Stay warm in style with our range of coats and jackets. No
                matter the season or the forecast, our timeless peacoats, trench
                coats and overcoats have you covered. Looking for a lighter
                layer? Browse our selection of jackets for versatile denim
                looks, on-trend bomber jackets and sleek leather styles.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Nav />
      {items}
    </div>
  );
};

export default TheCompleteCoat;
