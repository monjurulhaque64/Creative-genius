import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Products/Products";
import ClientSays from "../Pages/ClientSays/ClientSays";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/products",
          element: <Products></Products>
      },
      {
        path: "/clientsays",
        element:<ClientSays></ClientSays>
      }
      ]
    },
  ]);