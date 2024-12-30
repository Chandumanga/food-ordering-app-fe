import * as actionsTypes from "./ActionType";

const initialState = {
  restaurants: [],
  usersRestaurant: null,
  restaurant: null,
  loading: false,
  error: null,
  events: [],
  restaurantsEvents: [],
  categories: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.CREATE_RESTAURANT_REQUEST:
    case actionsTypes.GET_ALL_RESTAURANTS_REQUEST:
    case actionsTypes.DELETE_RESTAURANT_REQUEST:
    case actionsTypes.UPDATE_RESTAURANT_REQUEST:
    case actionsTypes.GET_RESTAURANT_BY_ID_REQUEST:
    case actionsTypes.CREATE_CATEGORY_REQUEST:
    case actionsTypes.GET_RESTAURANTS_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionsTypes.CREATE_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        usersRestaurant: action.payload,
      };

    case actionsTypes.GET_ALL_RESTAURANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurants: action.payload,
      };

    case actionsTypes.GET_RESTAURANT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurant: action.payload,
      };

    case actionsTypes.GET_RESTAURANT_BY_USER_ID_SUCCESS:
    case actionsTypes.UPDATE_RESTAURANT_SUCCESS:
    case actionsTypes.UPDATE_RESTAURANT_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        usersRestaurant: action.payload,
      };

    case actionsTypes.DELETE_RESTAURANT_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        restaurants: state.restaurants.filter(
          (item) => item.id !== action.payload
        ),
        usersRestaurant: state.usersRestaurant.filter(
          (item) => item.id !== action.payload
        ),
      };

    case actionsTypes.CREATE_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: [...state.events, action.payload],
        restaurantsEvents: [...state.restaurantsEvents, action.payload],
      };

    case actionsTypes.GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,
      };

    case actionsTypes.GET_RESTAURANTS_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        restaurantsEvents: action.payload,
      };

    case actionsTypes.DELETE_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: state.events.filter((item) => item.id !== action.payload),
        restaurantsEvents: state.restaurantsEvents.filter(
          (item) => item.id !== action.payload
        ),
      };

    case actionsTypes.CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: [...state.categories, action.payload],
      };
    case actionsTypes.GET_RESTAURANTS_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };

    case actionsTypes.CREATE_RESTAURANT_FAILURE:
    case actionsTypes.GET_ALL_RESTAURANTS_FAILURE:
    case actionsTypes.DELETE_RESTAURANT_FAILURE:
    case actionsTypes.UPDATE_RESTAURANT_FAILURE:
    case actionsTypes.GET_RESTAURANT_BY_ID_FAILURE:
    case actionsTypes.CREATE_EVENTS_FAILURE:
    case actionsTypes.CREATE_CATEGORY_FAILURE:
    case actionsTypes.GET_RESTAURANTS_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default restaurantReducer;
