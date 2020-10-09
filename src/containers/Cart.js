import React from "react";
import Nav from "../components/UI/Nav";
import { useSelector } from "react-redux";
import CheckoutForm from "../components/Cart/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Ha3qVJu3WrQMfz6s3xzr3fvlJQzAylEM4Rl9KLC97EeVyKy0KardSI7dN6tsoNT1Xgb5GBeyhbwuEHOb9u4o3SK00qLBh0WVJ"
);

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const total = products.reduce(
    (prev, curr) => prev + curr.qty * curr.price,
    0
  );
  return (
    <div>
      <Nav />
      <h4>Cart</h4>
      <p>{total}</p>
      {products.map((product) => {
        return (
          <div key={product.name.split(" ").join("-")}>
            <p>{product.name}</p>
          </div>
        );
      })}
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Cart;
