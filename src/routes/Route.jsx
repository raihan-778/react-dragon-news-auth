import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AboutUs from "../pages/aboutUs/AboutUs";
import Career from "../pages/career/Career";
import Home from "../pages/home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
    ],
  },
]);

export default routes;
