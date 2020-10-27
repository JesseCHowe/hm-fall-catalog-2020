import * as actionTypes from "../actions/actionTypes";

const initialState = [];

const cart = (state = initialState, action) => {
  let index;
  if (action.product) {
    index = state.findIndex((o) => o.id === action.product.id);
  }

  switch (action.type) {
    case actionTypes.SET_CART:
      return [...action.cart];
    case actionTypes.ADD_TO_CART:
      if (index === -1) {
        return state.concat({
          id: action.product.id,
          name: action.product.name,
          amount: action.product.amount,
          image: action.product.image,
          qty: 1,
        });
      } else {
        return [
          ...state.slice(0, index),
          {
            ...state[index],
            qty: ++state[index].qty,
          },
          ...state.slice(index + 1),
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
          ...state.slice(index + 1),
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
