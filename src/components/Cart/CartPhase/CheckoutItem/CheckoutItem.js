import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeAllFromCart,
  removeFromCart,
} from "../../../../store/actions/cart";
import "./CheckoutItem.scss";

const CheckoutItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <div className="item-details">
        <div>
          <p className="product-name">{product.name}</p>
          <p className="product-price">${(product.amount / 100).toFixed(2)}</p>
        </div>
        <div className="qty-counter">
          <button onClick={() => dispatch(removeFromCart(product))}>-</button>
          <span className="product-amnt">{product.qty}</span>
          <button onClick={() => dispatch(addToCart(product))}>+</button>
        </div>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeAllFromCart(product.name))}
        >
          Remove
        </button>
      </div>
      <div>
        <img src={product.image} alt={product.name} />
      </div>
    </div>
  );
};

export default CheckoutItem;
