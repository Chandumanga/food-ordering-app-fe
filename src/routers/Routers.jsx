import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminRouter } from "./AdminRoute";
import { CustomerRoute } from "./CustomerRoute";

export const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin/restaurants/*" element={<AdminRouter />}></Route>
        <Route path="/*" element={<CustomerRoute />}></Route>
      </Routes>
    </div>
  );
};
