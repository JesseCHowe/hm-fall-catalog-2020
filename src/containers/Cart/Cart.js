import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart, closeCart } from "../../store/actions/cartToggle";
import "./Cart.scss";
import styled from "styled-components";
import CompletePhase from "../../components/Cart/CompletePhase/CompletePhase";
import FocusTrap from "focus-trap-react";
import CartPhase from "../../components/Cart/CartPhase/CartPhase";
import CheckoutPhase from "../../components/Cart/CheckoutPhase/CheckoutPhase";

const Cart = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.cartToggle.mode);
  const [orderPhase, setOrderPhase] = useState("cart");

  React.useEffect(() => {
    function keyListener(e) {
      if (e.keyCode === 27) dispatch(closeCart());
    }
    document.addEventListener("keydown", keyListener);
    return () => document.removeEventListener("keydown", keyListener);
  });

  let phase;
  if (orderPhase === "cart")
    phase = <CartPhase checkOutPhase={() => setOrderPhase("checkout")} />;
  if (orderPhase === "checkout")
    phase = (
      <CheckoutPhase
        cartPhase={() => setOrderPhase("cart")}
        completePhase={() => setOrderPhase("complete")}
      />
    );
  if (orderPhase === "complete")
    phase = (
      <CompletePhase
        toCart={() => {
          setOrderPhase("cart");
          dispatch(toggleCart());
        }}
      />
    );

  let body;
  open
    ? (body = (
        <FocusTrap>
          <CartModal open={open} id="cart">
            {phase}
          </CartModal>
        </FocusTrap>
      ))
    : (body = null);

  return (
    <CartModal open={open} id="dummy-cart">
      {body}
    </CartModal>
  );
};

const CartModal = styled.div`
  transition: 0.5s;
  transform: ${(props) => (props.open ? "translateX(0%)" : "translateX(100%)")};
`;

export default Cart;
