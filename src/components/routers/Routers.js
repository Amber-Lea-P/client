import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../layouts/Landing";
import Login from "../auth/Login";
import Register2 from "../auth/Register2";

export const Routers = () => {
  return (
  <>
    <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register2></Register2>}></Route>
    </Routes>
  </>
  );
};


