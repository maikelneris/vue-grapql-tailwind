import Home from "./pages/Home"
import Event from "./pages/Event";

export const routes = [
  { path: "", component: Home },
  { path: "/event", component: Event },
  { path: "/event/lesson/:slug", component: Event }
];