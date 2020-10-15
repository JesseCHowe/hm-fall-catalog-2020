import React from "react";
import { useDispatch } from "react-redux";
import {
  removeAllFromCart,
  addToCart,
  removeFromCart,
} from "../../../store/actions/cart";
import "./CheckoutItem.scss";

const CheckoutItem = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <div>
        <img
          src="https://lp2.hm.com/hmgoepprod?set=source[/14/53/14534cc64b2eca1c151841a824d0b2b7a51e9faf.jpg],origin[dam],category[men_jacketscoats_coats],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"
          alt={props.product.name}
        />
      </div>
      <p className="product-name">{props.product.name}</p>
      <div>$22.45</div>
      <div className="qty-counter">
        <button onClick={() => dispatch(removeFromCart(props.product))}>
          -
        </button>
        <span className="product-amnt">{props.product.qty}</span>
        <button onClick={() => dispatch(addToCart(props.product))}>+</button>
      </div>
      <button onClick={() => dispatch(removeAllFromCart(props.product.name))}>
        X
      </button>
    </div>
  );
};

export default CheckoutItem;
