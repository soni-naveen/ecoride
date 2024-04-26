import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Verification from "../pages/Verification";
import Aboutus from "../pages/Aboutus";
import Howitworks from "../pages/Howitworks";
import Helpcenter from "../pages/Helpcenter";
import Ourteam from "../pages/Ourteam";
import Completeprofile from "../pages/Completeprofile";
import Searchride from "../pages/Searchride";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/howitworks" element={<Howitworks />} />
      <Route path="/helpcenter" element={<Helpcenter />} />
      <Route path="/ourteam" element={<Ourteam />} />
      <Route path="/completeprofile" element={<Completeprofile />} />
      <Route path="/searchride" element={<Searchride />} />
    </Routes>
  );
};

export default Router;
