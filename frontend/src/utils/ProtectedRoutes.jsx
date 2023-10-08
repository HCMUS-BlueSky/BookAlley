import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  console.log(localStorage.getItem("user-token"));
  const userToken = localStorage.getItem("user-token");
  return userToken ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
