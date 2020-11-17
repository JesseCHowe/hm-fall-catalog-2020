import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../UI/Loader/Loader";
import Field from "../../../UI/Field/Field";
import "./CheckoutForm.scss";
import { completePurchase } from "../../../../store/actions/cart";

export default function CheckoutForm() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.products),
    [succeeded, setSucceeded] = useState(false),
    [error, setError] = useState(null),
    [processing, setProcessing] = useState(""),
    [disabled, setDisabled] = useState(true),
    [clientSecret, setClientSecret] = useState(""),
    stripe = useStripe(),
    elements = useElements(),
    total = products.reduce((prev, cur) => prev + cur.qty * cur.amount, 0);

  const [billingDetails, setBillingDetails] = useState({
    email: "",
    phone: "",
    name: "",
  });

  useEffect(() => {
    window
      .fetch("/.netlify/functions/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [products]);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      dispatch(completePurchase());
    }
  };

  return (
    <React.Fragment>
      <form id="payment-form" onSubmit={handleSubmit}>
        <fieldset className="FormGroup">
          <Field
            label="Name"
            id="name"
            type="text"
            placeholder="Jane Doe"
            required
            autoComplete="name"
            value={billingDetails.name}
            onChange={(e) => {
              setBillingDetails({ ...billingDetails, name: e.target.value });
            }}
          />
          <Field
            label="Email"
            id="email"
            type="email"
            placeholder="janedoe@gmail.com"
            required
            autoComplete="email"
            value={billingDetails.email}
            onChange={(e) => {
              setBillingDetails({ ...billingDetails, email: e.target.value });
            }}
          />
          <Field
            label="Phone"
            id="phone"
            type="tel"
            placeholder="(941) 555-0123"
            required
            autoComplete="tel"
            value={billingDetails.phone}
            onChange={(e) => {
              setBillingDetails({ ...billingDetails, phone: e.target.value });
            }}
          />
        </fieldset>

        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        {processing ? (
          <Loader />
        ) : (
          <button
            className="cart-button"
            disabled={processing || disabled || succeeded}
            id="submit"
          >
            <span>Pay ${(total / 100 + 5.67).toFixed(2)}</span>
          </button>
        )}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
      </form>
    </React.Fragment>
  );
}
