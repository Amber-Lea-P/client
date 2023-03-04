import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../layouts/Landing";
import Login from "../auth/Login";
import Register2 from "../auth/Register2";
import Alert from "../layouts/Alert";
import Dashboard from "../dashboard/Dashboard";
import CreateProfile from "../profile/CreateProfile";
import Profile from "../profile/Profile";
import Profiles from "../profiles/Profiles";

export const Routers = () => {
  return (
  <>
    <Alert></Alert>
    <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register2></Register2>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/create-profile" element={<CreateProfile></CreateProfile>}></Route>
        <Route path="/edit-profile" element={<CreateProfile></CreateProfile>}></Route>
        <Route path="/profile/:id" element={<Profile></Profile>}></Route>
        <Route path="/profiles" element={<Profiles></Profiles>}></Route>
    </Routes>
  </>
  );
};


