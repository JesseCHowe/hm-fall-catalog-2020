import { combineReducers } from "redux";
import cart from "./cart";
import cartToggle from "./cartToggle";

export default combineReducers({ cart, cartToggle });
