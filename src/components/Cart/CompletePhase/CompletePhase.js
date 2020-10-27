import React from "react";
import "./CompletePhase.scss";

const CompletePhase = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var date = new Date();
  date.setDate(date.getDate() + 5);
  var theyear = date.getFullYear();
  var themonth = date.getMonth();
  var thetoday = date.getDate();
  let test = `${months[themonth]} ${thetoday}, ${theyear}`;
  return (
    <div>
      <div className="cart-overlay" onClick={() => props.toCart()}></div>
      <div className="completed-checkout">
        <button
          className="exit-btn-complete exit-btn"
          onClick={() => props.toCart()}
        >
          X
        </button>
        <div>
          <div className="checkmark-circle">
            <div className="background"></div>
            <div className="checkmark draw"></div>
          </div>
          <h1>Thanks for shopping!</h1>
          <p>
            We have received your ordere and are getting it ready to be shipped.
            We will notify you when it's on the it's way!
          </p>
          <p>
            Your order will be delievered by
            <br />
            <span>{test}</span>
          </p>
          <button className="cart-button " onClick={() => props.toCart()}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletePhase;
