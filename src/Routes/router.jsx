import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Products/Products";
import ClientSays from "../Pages/ClientSays/ClientSays";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SubmitReview from "../Pages/SubmitReview/SubmitReview";
import About from "../Pages/AboutUs/About";
import Pricing from "../Pages/Pricing/Pricing";
import NotFound from "../Pages/NotFound/NotFound";
import Privacy from "../Pages/Privacy/Privacy";

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
          path: '/about',
          element: <About></About>
        },
        {
          path: "/products",
          element: <Products></Products>
      },
      {
        path:"/pricing",
        element:<Pricing></Pricing>
      },
      {
        path: "/client-says",
        element:<ClientSays></ClientSays>
      },
      {
        path: "/contact-us",
        element:<ContactUs></ContactUs>
      },
      {
        path: "/review",
        element:<SubmitReview></SubmitReview>
      },
      {
        path: "/privacy",
        element:<Privacy></Privacy>
      }
      ]
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    }
  ]);