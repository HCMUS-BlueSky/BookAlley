import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPassword";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
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
  {
    path: "/forgot-password",
    page: ForgotPasswordPage,
  },
  {
    path: "/reset-password",
    page: ResetPasswordPage,
  },
  {
    path: "/products/:id",
    page: ProductDetailPage,
  },
];

export default routes;
