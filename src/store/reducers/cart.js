import * as actionTypes from "../actions/actionTypes";

const initialState = {
  open: false,
  phase: "cart",
  products: [],
};

const cart = (state = initialState, action) => {
  let index;
  if (action.product) {
    index = state.products.findIndex((o) => o.id === action.product.id);
  }
  switch (action.type) {
    case actionTypes.EXIT_CART:
      return initialState;
    case actionTypes.COMPLETE_PURCHASE:
      return {
        ...state,
        phase: "complete",
        products: [],
      };
    case actionTypes.SET_PHASE:
      return {
        ...state,
        phase: action.phase,
      };
    case actionTypes.TOGGLE_CART:
      return {
        ...state,
        open: !state.open,
      };
    case actionTypes.CLOSE_CART:
      return {
        ...state,
        open: false,
      };
    case actionTypes.SET_CART:
      return {
        ...state,
        products: [...action.cart],
      };
    case actionTypes.ADD_TO_CART:
      if (index === -1) {
        return {
          ...state,
          products: state.products.concat({
            id: action.product.id,
            name: action.product.name,
            amount: action.product.amount,
            image: action.product.image,
            qty: 1,
          }),
        };
      } else {
        return {
          ...state,
          products: [
            ...state.products.slice(0, index),
            {
              ...state.products[index],
              qty: ++state.products[index].qty,
            },
            ...state.products.slice(index + 1),
          ],
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      if (state.products[index].qty === 1) {
        return {
          ...state,
          products: state.products.filter(
            (o) => o.name !== action.product.name
          ),
        };
      } else {
        return {
          ...state,
          products: [
            ...state.products.slice(0, index),
            {
              ...state.products[index],
              qty: --state.products[index].qty,
            },
            ...state.products.slice(index + 1),
          ],
        };
      }
    case actionTypes.REMOVE_ALL_FROM_CART:
      return {
        ...state,
        products: state.products.filter((o) => o.name !== action.product),
      };
    case actionTypes.EMPTY_CART:
      return {
        ...state,
        products: [],
      };
    default:
      return state;
  }
};

export default cart;
