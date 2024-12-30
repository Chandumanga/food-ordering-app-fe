import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
import { green, pink } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { auth, cart } = useSelector((store) => store);
  const navigate = useNavigate();
  const handleAvatar = () => {
    if (auth.user?.role === "ROLE_CUSTOMER") {
      navigate("/my-profile");
    } else {
      navigate("/admin/restaurant");
    }
  };
  return (
    <Box className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#2d9c56] lg:px-20 flex justify-between ">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li
          onClick={() => navigate("/")}
          className="logo font-semibold text-gray-300 text-2xl"
        >
          Fortview Diner
        </li>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className="">
          {auth.user ? (
            <Avatar
              onClick={handleAvatar}
              sx={{ bgcolor: "white", color: green.A400 }}
            >
              {auth.user?.fullName[0].toUpperCase()}
            </Avatar>
          ) : (
            <IconButton
              onClick={() => {
                navigate("/account/login");
              }}
            >
              <PersonIcon />
            </IconButton>
          )}
        </div>
        <IconButton onClick={() => navigate("/cart")}>
          <Badge color="primary" badgeContent={cart.cart?.cartItems.length}>
            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
          </Badge>
        </IconButton>
      </div>
    </Box>
  );
};
