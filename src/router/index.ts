import { lazy } from "solid-js";

const routes = [
  {
    path: "/",
    component: lazy(() => import("../pages/Discount"))
  },
];




export default routes