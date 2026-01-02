
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Covarage from "../Pages/Covarage/Covarage";
import { Component } from "react";
import AboutUs from "../Pages/About/AboutUs";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home},
      {path:'/covarage',
        Component:Covarage ,
        loader:()=> fetch('/warehouses.json').then(res => res.json()),
        },
        {path :'/about', Component: AboutUs}
    ]
  },
]);