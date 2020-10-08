import React from "react";
import Nav from "../components/UI/Nav";

const ProductInfo = ({ match }) => {
  return (
    <div>
      <Nav />
      <div>This is a product page for item {+match.params.productId}</div>
    </div>
  );
};

export default ProductInfo;
