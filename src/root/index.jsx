import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import { RequireAuth } from "react-auth-kit";

const Root = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth loginPath={"/login"}>
            <Navbar />
          </RequireAuth>
        }
      ></Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Root;
