import About from "./pages/about";
import Home from "./pages/home";
import User from "./pages/user";
import Login from "./pages/auth/login";
import Logout from "./pages/auth/logout";

const routes = [
  {
    name: "Login",
    route: "/login",
    component: (res) => <Login {...res} />,
    isExact: false,
    needAuth: false,
  },
  {
    name: "Logout",
    route: "/logout",
    component: (res) => <Logout {...res} />,
    isExact: false,
    needAuth: true,
  },
  {
    name: "About Us",
    route: "/about",
    component: (res) => <About {...res} />,
    isExact: false,
    needAuth: true,
  },
  {
    name: "User",
    route: "/user",
    component: (res) => <User {...res} />,
    isExact: false,
    needAuth: true,
  },
  {
    name: "Home",
    route: "/",
    component: (res) => <Home {...res} />,
    isExact: true,
    needAuth: false,
  },
];

export default routes;
