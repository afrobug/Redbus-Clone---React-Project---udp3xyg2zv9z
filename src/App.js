import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import BookMySeat from "./Pages/BookMySeat";
import SignIn from "./Pages/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignIn />,
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
