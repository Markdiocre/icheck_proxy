import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/static/stylesheet.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import reportWebVitals from "./reportWebVitals";

//Routes import
import LoginView from "./routes/LoginView";
import MenuView from "./routes/MenuView";
import CodeView from "./routes/CodeView";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginView />,
  },
  {
    path: "/menu",
    element: <MenuView />,
  },
  ,
  {
    path: "/qr",
    element: <CodeView />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
