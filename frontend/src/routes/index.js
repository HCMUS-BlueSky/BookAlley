import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Products from "../pages/ProductsPage/ProductsPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
  },
  {
    path: "/products",
    page: Products,
  },
  {
    path: "/signin",
    page: SignInPage,
  },
  {
    path: "/signup",
    page: SignUpPage,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];

export default routes;
