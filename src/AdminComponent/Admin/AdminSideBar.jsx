import React, { useState } from "react";
import { Dashboard, ShoppingBag } from "@mui/icons-material";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import CategoryIcon from "@mui/icons-material/Category";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../component/State/Authentication/Action";

const menu = [
  {
    title: "DashBoard",
    icon: <Dashboard />,
    path: "/",
  },
  {
    title: "Orders",
    icon: <ShoppingBag />,
    path: "/orders",
  },
  {
    title: "Menu",
    icon: <ShopTwoIcon />,
    path: "/menu",
  },
  {
    title: "FoodCategory",
    icon: <CategoryIcon />,
    path: "/foodCategory",
  },
  {
    title: "Ingredients",
    icon: <FastfoodIcon />,
    path: "/ingredients",
  },
  {
    title: "Events",
    icon: <EventIcon />,
    path: "/events",
  },
  {
    title: "Details",
    icon: <AdminPanelSettingsIcon />,
    path: "/details",
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
    path: "/",
  },
];

export const AdminSideBar = ({ handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (item) => {
    navigate(`/admin/restaurants${item.path}`);
    if (item.title === "Logout") {
      navigate("/");
      dispatch(logout());
      handleClose();
    }
  };

  return (
    <div>
      <>
        <Drawer
          onClose={handleClose}
          open={false}
          anchor="left"
          sx={{ zIndex: 1 }}
          variant={isSmallScreen ? "temporary" : "permanent"}
        >
          <div className="w-[70vw] mt-[-50px] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[1.9rem]">
            {menu.map((item, i) => (
              <>
                <div
                  onClick={() => handleNavigate(item)}
                  className="px-5 flex items-center gap-5 cursor-pointer"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                {i !== menu.length - 1 && <Divider />}
              </>
            ))}
          </div>
        </Drawer>
      </>
    </div>
  );
};
