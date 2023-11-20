import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../reducers/authSlice";
import { clearCart } from "../reducers/cart/cartSlice";
import { getCart } from "../actions/cartAction";

const HeaderComponent = () => {
  const { cart } = useSelector((state) => state.cart);
  const { access_token } = useSelector((state) => state.auth);
  const [openAccount, setOpenAccount] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <>
      <div className="container header" style={{ backgroundColor: "#fff" }}>
        <div className="header-left">
          <Link to="/">
            <img src="/images/Logo.png" alt="" />
          </Link>
          <div className="search">
            <input type="text" />
            <button type="submit">Search</button>
          </div>
        </div>
        <div className="header-right">
          <a href="">
            <img src="/images/vietnam.png" alt="" />
          </a>
          <a href="">
            <img src="/images/Bell.png" alt="" />
          </a>
          <a href="">
            <img src="/images/Chat.png" alt="" />
          </a>
          <Link to="/checkout/cart">
            <div className="icon-wrapper">
              <div className="bubble">
                {cart.items
                  ? cart.items.reduce((total, item) => {
                      return total + item.quantity;
                    }, 0)
                  : 0}
              </div>
              <img src="/images/Cart.png" alt="" />
            </div>
          </Link>
          {access_token ? (
            <div
              className="account"
              onMouseEnter={() => setOpenAccount(true)}
              onMouseLeave={() => setOpenAccount(false)}
            >
              <img src="/images/Account.png" alt="" />
              {openAccount && (
                <div className="account-content">
                  <a href="#">Profile</a>
                  <Link to="/order/history">My orders</Link>
                  <a
                    onClick={() => {
                      dispatch(logout());
                      dispatch(clearCart());
                    }}
                  >
                    Log out
                  </a>
                </div>
              )}
            </div>
          ) : (
            <Link to="/signin">
              <img src="/images/Account.png" alt="" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;