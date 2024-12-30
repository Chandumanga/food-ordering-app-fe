import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { createIngredientCategory } from "../../component/State/Ingredients/Action";
import { useDispatch, useSelector } from "react-redux";

export const CreateIngrdientCategoryForm = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant } = useSelector((store) => store);

  const [formData, setFormdata] = useState({
    name: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      restaurantId: restaurant.usersRestaurant.id,
    };

    console.log("data --- ", data);
    dispatch(createIngredientCategory({ data, jwt }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="">
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Ingredient Category Name
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Category"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.name}
          ></TextField>
          <Button variant="contained" type="submit">
            Create Category
          </Button>
        </form>
      </div>
    </div>
  );
};
