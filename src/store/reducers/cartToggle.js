import * as actionTypes from "../actions/actionTypes";

const initialState = {
  mode: false,
};

const cartToggle = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART:
      return {
        mode: !state.mode,
      };
    case actionTypes.CLOSE_CART:
      return {
        mode: false,
      };
    default:
      return state;
  }
};

export default cartToggle;
