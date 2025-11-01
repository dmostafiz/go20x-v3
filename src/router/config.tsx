import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Username from "../pages/username";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
    {
    path: "/:refId",
    element: <Username />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
