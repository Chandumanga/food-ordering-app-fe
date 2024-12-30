import React, { useEffect } from "react";
import { AdminSideBar } from "./AdminSideBar";
import { Route, Routes } from "react-router-dom";
import { RestaurantDashboard } from "../Dashboard/Dashboard";
import { Orders } from "../Orders/Orders";
import { Menu } from "../Menu/Menu";
import { Events } from "../Events/Events";
import { FoodCategory } from "../FoodCategory/FoodCategory";
import { Ingredients } from "../Ingredients/Ingredients";
import { RestaurantDetails } from "./RestaurantDetails";
import { CreateMenuForm } from "../Menu/CreateMenuForm";
import { useDispatch, useSelector } from "react-redux";
import {
  getRestaurantById,
  getRestaurantsCategory,
} from "../../component/State/Restaurant/Action";
import { getMenuItemsByRestaurantId } from "../../component/State/Menu/Action";
import { getUserOrders } from "../../component/State/Order/Action";
import { fecthRestaurantsOrder } from "../../component/State/RestaurantOrder/Action";

export const Admin = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant } = useSelector((store) => store);
  const handleClose = () => {};
  useEffect(() => {
    dispatch(
      getRestaurantsCategory({
        jwt,
        restaurantId: restaurant.usersRestaurant?.id,
      })
    );
    dispatch(
      fecthRestaurantsOrder({
        jwt,
        restaurantId: restaurant.usersRestaurant?.id,
      })
    );

   
  }, []);

  return (
    <div>
      <div className="lg:flex justify-between ">
        <div>
          <AdminSideBar handleClose={handleClose} />
        </div>
        <div className="lg:w-[80%]">
          <Routes>
            <Route path="/" element={<RestaurantDashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/foodCategory" element={<FoodCategory />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/events" element={<Events />} />
            <Route path="/details" element={<RestaurantDetails />} />
            <Route path="/add-menu" element={<CreateMenuForm />} />
            <Route />
          </Routes>
        </div>
      </div>
    </div>
  );
};
