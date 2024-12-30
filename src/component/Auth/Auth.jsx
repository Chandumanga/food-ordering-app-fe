import React from "react";
import { Box, Modal } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { style } from "../Cart/Cart";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnClose = () => {
    navigate("/");
  };

  return (
    <>
      <Modal
        onClose={handleOnClose}
        open={
          location.pathname === "/account/login" ||
          location.pathname === "/account/register"
        }
      >
        <Box sx={style}>
          {location.pathname === "/account/register" ? (
            <RegisterForm />
          ) : (
            <LoginForm />
          )}
        </Box>
      </Modal>
    </>
  );
};
