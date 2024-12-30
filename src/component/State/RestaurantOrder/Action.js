import axios from "axios";

import {
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_FAILURE,
  UPDATE_ORDER_STATUS_SUCCESS,
  GET_RESTAURANTS_ORDER_FAILURE,
  GET_RESTAURANTS_ORDER_REQUEST,
  GET_RESTAURANTS_ORDER_SUCCESS,
} from "./ActionType";
import { api } from "../../config/api";

export const updateOrderStatus = ({ orderId, orderStatus, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });
    try {
      const response = await api.put(
        `/api/admin/order/${orderId}/${orderStatus}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      const updatedOrder = response.data;

      dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: updatedOrder });

      console.log("updated order", updatedOrder);
    } catch (error) {
      console.log("catch error", error);
      dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, payload: error });
    }
  };
};

export const fecthRestaurantsOrder = ({ restaurantId, orderStatus, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_ORDER_REQUEST });
    try {
      const { data } = await api.get(
        `/api/admin/order/restaurants/${restaurantId}`,
        {
          params: { order_status: orderStatus },
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      const orders = data;

      dispatch({ type: GET_RESTAURANTS_ORDER_SUCCESS, payload: orders });

      console.log("restaurants order ----- ", orders);
    } catch (error) {
      console.log("catch error in fetch Restaurants order", error);
      dispatch({ type: GET_RESTAURANTS_ORDER_FAILURE, payload: error });
    }
  };
};
