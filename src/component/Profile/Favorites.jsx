import React from "react";
import { RestaurantCard } from "../Restaurant/RestaurantCard";
import { useSelector } from "react-redux";

export const Favorites = () => {
  const { auth } = useSelector((store) => store);
  return (
    <div className="">
      <h1 className="py-5 text-xl font-semibold text-center">My Favorites</h1>
      <div className="flex gap-3 flex-wrap justify-center">
        {auth.favorites.map((item) => (
          <RestaurantCard item={item} />
        ))}
      </div>
    </div>
  );
};
