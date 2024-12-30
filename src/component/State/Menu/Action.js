import { api } from "../../config/api";
import {
  DELETE_MENU_ITEM_FAIURE,
  DELETE_MENU_ITEM_REQUEST,
  DELETE_MENU_ITEM_SUCCESS,
  CREATE_MENU_ITEM_FAIURE,
  CREATE_MENU_ITEM_REQUEST,
  CREATE_MENU_ITEM_SUCCESS,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
  SEARCH_MENU_ITEM_FAIURE,
  SEARCH_MENU_ITEM_REQUEST,
  SEARCH_MENU_ITEM_SUCCESS,
  UPDATE_MENU_ITEMS_AVAILABILITY_FAIURE,
  UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST,
  UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,
} from "./ActionType";

export const createMenuItem = ({ menu, jwt }) => {
  return async (dispatch) => {
    console.log("data menu------ ", menu);
    dispatch({ type: CREATE_MENU_ITEM_REQUEST });
    try {
      const { data } = await api.post(`/api/admin/food`, menu, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("data ------ ", data);

      dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: data });
      console.log("created menu", data);
    } catch (error) {
      console.log("catch error", error);
      dispatch({ type: CREATE_MENU_ITEM_FAIURE, payload: error });
    }
  };
};

export const getMenuItemsByRestaurantId = (reqData) => {
  return async (dispatch) => {
    dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });
    try {
      const { data } = await api.get(
        `/api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}&nonveg=${reqData.nonveg}&seasonal=${reqData.seasonal}&food_category=${reqData.foodCategory}`,
        {
          headers: {
            Authorization: `Bearer ${reqData.jwt}`,
          },
        }
      );
      dispatch({
        type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
        payload: data,
      });
      console.log("menu item by restaurants", data);
    } catch (error) {
      console.log("catch error", error);
      dispatch({
        type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
        payload: error,
      });
    }
  };
};

export const searchMenuItem = ({ keyword, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_MENU_ITEM_REQUEST });
    try {
      const { data } = await api.get(`/api/food/search?name=${keyword}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: SEARCH_MENU_ITEM_SUCCESS,
        payload: data,
      });
      console.log("search data", data);
    } catch (error) {
      console.log("catch error", error);
      dispatch({
        type: SEARCH_MENU_ITEM_FAIURE,
        payload: error,
      });
    }
  };
};

export const updateMenuItemsAvailabilty = ({ foodId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST });
    try {
      const { data } = await api.put(
        `/api/admin/food/${foodId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,
        payload: data,
      });
      console.log("update menu items availabitity", data);
    } catch (error) {
      console.log("catch error", error);
      dispatch({
        type: UPDATE_MENU_ITEMS_AVAILABILITY_FAIURE,
        payload: error,
      });
    }
  };
};

export const deleteFoodAction = ({ foodId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_MENU_ITEM_REQUEST });
    try {
      const { data } = await api.delete(`/api/admin/food/${foodId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({
        type: DELETE_MENU_ITEM_SUCCESS,
        payload: foodId,
      });
      console.log("delete food success", foodId);
    } catch (error) {
      console.log("catch error", error);
      dispatch({
        type: DELETE_MENU_ITEM_FAIURE,
        payload: error,
      });
    }
  };
};
