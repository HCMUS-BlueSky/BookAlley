import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import SellerPage from "../pages/SellerPage/SellerPage";
import AddProductPage from "../pages/SellerPage/AddProductPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import OrderPage from "../pages/OrderPage";
import OrderDetailPage from "../pages/OrderDetailPage";
import AddressPage from "../pages/AddressPage";
import ShopPage from "../pages/ShopPage";
import OrdersSellerPage from "../pages/SellerPage/OrdersSellerPage";
import ProductsSellerPage from "../pages/SellerPage/ProductsSellerPage";

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
  {
    path: "/checkout/cart",
    page: CartPage,
  },
  {
    path: "/checkout/payment",
    page: CheckoutPage,
  },
  {
    path: "/order/history",
    page: OrderPage,
  },
  {
    path: "/order/view/:order_id",
    page: OrderDetailPage,
  },
  {
    path: "/order/shipping",
    page: AddressPage,
  },
  {
    path: "/shop/:shop_id",
    page: ShopPage,
  },
  {
    path: "/seller",
    page: SellerPage,
  },
  {
    path: "/seller/orders",
    page: OrdersSellerPage,
  },
  {
    path: "/seller/products",
    page: ProductsSellerPage,
  },
  {
    path: "/seller/products/add",
    page: AddProductPage,
  },
];

export default routes;
