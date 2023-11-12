import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { useDispatch } from "react-redux";
import { refreshToken } from "./actions/authAction";
import { getCart } from "./actions/cartAction";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshToken());
    dispatch(getCart());
  }, []);

  return (
    <>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            return (
              <Route key={route.path} path={route.path} element={<Page />} />
            );
          })}
        </Routes>
      </Router>
    </>
  );
};

export default App;
