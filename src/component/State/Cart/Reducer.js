import { LOGOUT } from "../Authentication/ActionType";
import * as actionsTypes from "./ActionType";

const initialState = {
  cart: null,
  cartItems: [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FIND_CART_REQUEST:
    case actionsTypes.GET_ALL_CART_ITEMS_REQUEST:
    case actionsTypes.UPDATE_CART_ITEM_REQUEST:
    case actionsTypes.REMOVE_CART_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionsTypes.FIND_CART_SUCCESS:
    case actionsTypes.CLEAR_CART_SUCCESS:
      console.log("action paylaod", action.payload);
      console.log("action paylaod items", action.payload.cartItems);
      return {
        ...state,
        loading: false,
        cart: action.payload,
        cartItems: action.payload.cartItems,
      };
    case actionsTypes.ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: [action.payload, ...state.cartItems],
      };
    case actionsTypes.UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case actionsTypes.REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case actionsTypes.FIND_CART_FAILURE:
    case actionsTypes.UPDATE_CART_ITEM_FAILURE:
    case actionsTypes.REMOVE_CART_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGOUT:
      localStorage.removeItem("jwt");
      return {
        ...state,
        cartItems: [],
        cart: null,
        success: "logout success",
      };

    default:
      return state;
  }
};

export default cartReducer;
