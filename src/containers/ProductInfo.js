import React from "react";
import Nav from "../components/UI/Nav";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cart";

const ProductInfo = ({ match }) => {
  const dispatch = useDispatch();

  const dummyData = {
    name: "test2",
    price: 3000,
  };
  return (
    <div>
      <Nav />
      <div>This is a product page for item {+match.params.productId}</div>
      <button onClick={() => dispatch(addToCart(dummyData))}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductInfo;
