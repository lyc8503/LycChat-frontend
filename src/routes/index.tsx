import LoginPage from "./Login";
import RegisterPage from "./Register";
import {Navigate} from "react-router-dom";
import React from "react";
import MainPage from "./Main";


const routes = [
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/",
    element: <Navigate to="/login" />
  },
  {
    path: "/main",
    element: <MainPage />
  }
]


export default routes