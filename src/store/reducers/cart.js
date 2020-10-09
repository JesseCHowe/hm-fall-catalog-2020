import * as actionTypes from "../actions/actionTypes";

const initialState = [{ name: "test", qty: 2, price: 23.45 }];

const cart = (state = initialState, action) => {
  const index = state.findIndex((o) => o.name === action.product);

  switch (action.type) {
    case actionTypes.SET_CART:
      return [...action.cart];
    case actionTypes.ADD_TO_CART:
      if (index === -1) {
        return state.concat({
          name: action.product.name,
          price: action.product.price,
          qty: 1,
        });
      } else {
        return [
          ...state.slice(0, index),
          {
            ...state[index],
            qty: ++state[index].qty,
          },
          ...state.slice(index),
        ];
      }
    case actionTypes.REMOVE_FROM_CART:
      if (state[index].qty === 1) {
        return state.filter((o) => o.name !== action.product);
      } else {
        return [
          ...state.slice(0, index),
          {
            ...state[index],
            qty: --state[index].qty,
          },
          ...state.slice(index),
        ];
      }
    case actionTypes.REMOVE_ALL_FROM_CART:
      return state.filter((o) => o.name !== action.product);
    case actionTypes.EMPTY_CART:
      return [];
    default:
      return state;
  }
};

export default cart;
