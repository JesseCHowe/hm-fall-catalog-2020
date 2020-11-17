import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeCart } from "../../store/actions/cart";
import "./Cart.scss";
import styled from "styled-components";
import CompletePhase from "../../components/Cart/CompletePhase/CompletePhase";
import FocusTrap from "focus-trap-react";
import CartPhase from "../../components/Cart/CartPhase/CartPhase";
import CheckoutPhase from "../../components/Cart/CheckoutPhase/CheckoutPhase";


const Cart = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.cart.open);
  const orderPhase = useSelector((state) => state.cart.phase);

  useEffect(() => {
    function keyListener(e) {
      if (e.keyCode === 27) dispatch(closeCart());
    }
    document.addEventListener("keydown", keyListener);
    return () => document.removeEventListener("keydown", keyListener);
  });

  let phase;
  if (orderPhase === "cart") phase = <CartPhase />;
  if (orderPhase === "checkout") phase = <CheckoutPhase />;
  if (orderPhase === "complete") phase = <CompletePhase />;

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
