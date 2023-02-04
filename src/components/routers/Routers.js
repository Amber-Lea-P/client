import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../layouts/Landing";
import Register from "../auth/Register";
import Login from "../auth/Login";

export const Routers = () => {
  return (
  <>
    <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
    </Routes>
  </>
  );
};


