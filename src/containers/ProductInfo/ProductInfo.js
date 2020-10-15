import React, { useState, useEffect } from "react";
import Nav from "../../components/UI/Nav/Nav";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cart";
import "./ProductInfo.scss";
import styled from "styled-components";

const ProductInfo = ({ match }) => {
  const dispatch = useDispatch();
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
          (o) => o.id === +match.params.productId
        );
        setProductData(womensProducts[0]);
      })
      .catch((err) => console.error(err));
  }

  let item;
  productData
    ? (item = (
        <div id="test-page">
          <div className="test-item">
            <Box color={productData.color} className="test-box">
              <ItemNo color={productData.color} className="test-no">
                <span className="no">no.</span>
                {productData.id}
              </ItemNo>
              <div className="content">
                <div className="text-content">
                  <h1>{productData.name}</h1>
                  <p>{productData.description}</p>
                </div>
                <div>
                  <FallButton
                    color={productData.color}
                    className="add-to-cart-btn"
                    onClick={() => dispatch(addToCart(productData))}
                  >
                    <span className="add-to-cart">Add To Cart</span> $
                    {productData.amount / 100}
                  </FallButton>
                </div>
              </div>
            </Box>
            <div className="image-container">
              <img src={productData.image} alt={productData.name} />
            </div>
          </div>
        </div>
      ))
    : (item = (
        <div>
          <p>Waiting...</p>
        </div>
      ));

  return (
    <React.Fragment>
      <Nav />
      {item}
    </React.Fragment>
  );
};

const FallButton = styled.button``;
const ItemNo = styled.span``;
const Box = styled.div``;
export default ProductInfo;
