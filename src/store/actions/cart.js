import * as actionTypes from "./actionTypes";

export const setCart = (cart) => {
  return {
    type: actionTypes.SET_CART,
    cart,
  };
};

export const addToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    product,
  };
};

export const removeAllFromCart = (product) => {
  return {
    type: actionTypes.REMOVE_ALL_FROM_CART,
    product,
  };
};

export const emptyCart = () => {
  return {
    type: actionTypes.EMPTY_CART,
  };
};
