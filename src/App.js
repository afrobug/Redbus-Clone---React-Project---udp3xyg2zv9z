import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import BookMySeat from "./Pages/BookMySeat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/booking",
    element: <BookMySeat />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
