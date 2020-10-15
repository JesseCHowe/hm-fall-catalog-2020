import React, { useState, useEffect } from "react";
import "./FeatureCarousel.scss";

const FeatureCarousel = () => {
  let [productData, setProductData] = useState(null);
  let [slide, setSlide] = useState(0);
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

  let carousel;
  if (productData) {
    carousel = (
      <div className="feature-clothing-roll">
        <div className='btn-container'>
        <button onClick={() => (slide > 0 ? setSlide(--slide) : null)}>
          &#10094;
        </button>
        </div>

        <div className="text-container">
          <div className="text-box">
            <span className="item-number">
              <span className="no">no.</span>
              {productData[slide].id}
            </span>
            <p className="item-name">{productData[slide].name}</p>
            <p className="item-desc">{productData[slide].description}</p>
          </div>
        </div>
        <div>
          <img alt={productData[slide].name} src={productData[slide].image} />
        </div>
        <div className='btn-container'>

        <button
          onClick={() =>
            slide < productData.length - 1 ? setSlide(++slide) : null
          }
        >
          &#10095;
        </button>
        </div>
      </div>
    );
  } else {
    return <h2>Waiting..</h2>;
  }
  return <div>{carousel}</div>;
};

export default FeatureCarousel;
