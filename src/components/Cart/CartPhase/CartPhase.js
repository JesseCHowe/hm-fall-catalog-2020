import React from "react";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import FocusTrap from "focus-trap-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart, setPhase } from "../../../store/actions/cart";
import "./CartPhase.scss";

const CartPhase = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const total = products.reduce((prev, cur) => prev + cur.qty * cur.amount, 0);

  const cartItems = (
    <div className="cart-items">
      {products.map((product) => {
        return <CheckoutItem product={product} key={`${product.id}-cart`} />;
      })}
    </div>
  );

  const emptyItems = (
    <div className="no-cart-items">
      <div>
        <h1>Your Bag is Empty</h1>
        <p>Looks like you haven't made your choice yet</p>
      </div>
    </div>
  );

  let cartBody;
  products.length ? (cartBody = cartItems) : (cartBody = emptyItems);

  return (
    <FocusTrap>
      <div>
        <div
          className="cart-overlay"
          onClick={() => dispatch(toggleCart())}
        ></div>
        <div className="cart-body">
          <div className="cart-title">
            <h2>Cart</h2>
            <button className="exit-btn" onClick={() => dispatch(toggleCart())}>
              X
            </button>
          </div>
          {cartBody}
          <div className="cart-button-container">
            <button
              className="cart-button"
              onClick={() => dispatch(setPhase("checkout"))}
              disabled={!(products.length > 0)}
            >
              Checkout ${(total / 100).toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
};

export default CartPhase;
