import * as actionTypes from "./actionTypes";

export const toggleCart = () => {
  return {
    type: actionTypes.TOGGLE_CART,
  };
};

export const closeCart = () => {
  return {
    type: actionTypes.CLOSE_CART,
  };
};
