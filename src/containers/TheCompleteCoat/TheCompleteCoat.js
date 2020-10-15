import React, { useState, useEffect } from "react";
import Nav from "../../components/UI/Nav/Nav";
import ProductsList from "../../components/Products/ProductsList";
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
      <div id="the-complete-coat">
        <div className="content">
          <div className="coat-container">
            <div class="wrapper">
              <h3>The Complete</h3>
              <div class="content2">
                <h1>
                  CO
                  <br />
                  AT
                </h1>
              </div>
            </div>
          </div>
          <div className="content">
            <div>
              <p>
                Layer up in a way that reflects your style with our cozy
                hoodies, sweaters and cardigans for women. Discover the latest
                prints and colors, mixed with timeless knits and neutral
                wardrobe basics that will last season after season. Whether you
                prefer off-the-shoulder, oversized or fitted styles, we’ve got
                you covered this fall.
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
