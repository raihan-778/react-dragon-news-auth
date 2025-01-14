import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AboutUs from "../pages/aboutUs/AboutUs";
import Career from "../pages/career/Career";
import Home from "../pages/home/Home";
import News from "../pages/news/News";
import Login from "../pages/shared/login/Login";
import Register from "../pages/shared/register/Register";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("news.json"),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default routes;
