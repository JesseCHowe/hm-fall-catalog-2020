import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { emptyCart } from "../../../store/actions/cart";
import { toggleCart } from "../../../store/actions/cartToggle";
import FocusTrap from "focus-trap-react";
import "./CheckoutPhase.scss";

const stripePromise = loadStripe(
  "pk_test_51Ha3qVJu3WrQMfz6s3xzr3fvlJQzAylEM4Rl9KLC97EeVyKy0KardSI7dN6tsoNT1Xgb5GBeyhbwuEHOb9u4o3SK00qLBh0WVJ"
);

const CheckoutPhase = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const total = products.reduce((prev, cur) => prev + cur.qty * cur.amount, 0);

  return (
    <FocusTrap>
      <div>
        <div
          className="cart-overlay"
          onClick={() => dispatch(toggleCart())}
        ></div>
        <div className="cart-title">
          <button className="return-btn" onClick={() => props.cartPhase()}>
            &#8592;
          </button>
          <h2>Checkout</h2>
          <button className="exit-btn" onClick={() => dispatch(toggleCart())}>
            X
          </button>
        </div>
        <div className="checkout-calc-container">
          <div className="checkout-calculation">
            <div>
              <span>Subtotal</span>
              <span className="amount">${(total / 100).toFixed(2)}</span>
            </div>
            <div>
              <span>Shipping</span>
              <span className="amount">$5.67</span>
            </div>
            <div>
              <span>Total</span>
              <span className="amount">${(total / 100 + 5.67).toFixed(2)}</span>
            </div>
          </div>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            className="order"
            toCart={() => props.cartPhase()}
            toComplete={() => {
              dispatch(emptyCart());
              props.completePhase();
            }}
            clicked={() => {
              dispatch(emptyCart());
              props.completePhase();
            }}
          />
        </Elements>
        <span className="notice">
          For this demo project use the test card: 4242-4242-4242-4242
        </span>
      </div>
    </FocusTrap>
  );
};

export default CheckoutPhase;
