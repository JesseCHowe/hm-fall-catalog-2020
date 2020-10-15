import React, { useState } from "react";
import Nav from "../../components/UI/Nav/Nav";
import { useSelector } from "react-redux";
import CheckoutForm from "../../components/Cart/CheckoutForm/CheckoutForm";
import CheckoutItem from "../../components/Cart/CheckoutItem/CheckoutItem";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./Cart.scss";

const stripePromise = loadStripe(
  "pk_test_51Ha3qVJu3WrQMfz6s3xzr3fvlJQzAylEM4Rl9KLC97EeVyKy0KardSI7dN6tsoNT1Xgb5GBeyhbwuEHOb9u4o3SK00qLBh0WVJ"
);

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const total = products.reduce(
    (prev, curr) => prev + curr.qty * curr.price,
    0
  );
  const [orderPhase, setOrderPhase] = useState(true);

  const proceedButton = (
    <div className="proceed-btn-container">
      <div>
        <button className="proceed-btn" onClick={() => setOrderPhase(false)}>
          CHECKOUT ${(total / 100).toFixed(2)}
        </button>
      </div>
    </div>
  );

  const myCheckout = (
    <React.Fragment>
      <div className="new-order-form">
        <div className="overlay" onClick={() => setOrderPhase(true)} />
        <Elements stripe={stripePromise}>
          <CheckoutForm className="order" clicked={() => setOrderPhase(true)} />
        </Elements>
      </div>
    </React.Fragment>
  );

  let phase;
  orderPhase ? (phase = proceedButton) : (phase = myCheckout);

  return (
    <React.Fragment>
      <Nav />
      <div id="cart">
        <div className="cart-container">
          <div className="cart-items">
            {products.map((product) => {
              return (
                <CheckoutItem
                  product={product}
                  key={product.name.split(" ").join("-")}
                />
              );
            })}
          </div>
        </div>
        {phase}
      </div>
    </React.Fragment>
  );
};

export default Cart;
