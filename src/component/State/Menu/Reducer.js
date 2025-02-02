import * as actionsTypes from "./ActionType";

const initialState = {
  menuItems: [],
  loading: false,
  error: null,
  search: [],
  message: null,
};

const menuItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.CREATE_MENU_ITEM_REQUEST:
    case actionsTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST:
    case actionsTypes.DELETE_MENU_ITEM_REQUEST:
    case actionsTypes.SEARCH_MENU_ITEM_REQUEST:
    case actionsTypes.UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        message: null,
      };
    case actionsTypes.CREATE_MENU_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        menuItems: [...state.menuItems, action.payload],
        message: "Food Created Successfully",
      };

    case actionsTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        menuItems: action.payload,
      };

    case actionsTypes.DELETE_MENU_ITEM_SUCCESS: {
      return {
        ...state,
        loading: false,
        menuItems: state.menuItems.filter((item) => item.id !== action.payload),
      };
    }

    case actionsTypes.UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS:
      console.log("updated items id ", action.payload.id);
      return {
        ...state,
        loading: false,
        menuItems: state.menuItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case actionsTypes.SEARCH_MENU_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        search: action.payload,
      };

    case actionsTypes.CREATE_MENU_ITEM_FAIURE:
    case actionsTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE:
    case actionsTypes.DELETE_MENU_ITEM_FAIURE:
    case actionsTypes.UPDATE_MENU_ITEMS_AVAILABILITY_FAIURE:
    case actionsTypes.SEARCH_MENU_ITEM_FAIURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: null,
      };

    default:
      return state;
  }
};

export default menuItemReducer;
