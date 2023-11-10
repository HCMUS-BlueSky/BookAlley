import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartTotalSelector } from "../../reducers/cart/cartSelectors";

const HeaderComponent = () => {
  const totalCart = useSelector(cartTotalSelector);
  const { access_token } = useSelector((state) => state.auth);
  const [openAccount, setOpenAccount] = useState(false);

  return (
    <>
      <div className="container header" style={{ backgroundColor: "#fff" }}>
        <div className="header-left">
          <img src="/images/Logo.png" alt="" />
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
          <Link to="/cart">
            <div className="icon-wrapper">
              <div className="bubble">{totalCart}</div>
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
                <div class="account-content">
                  <a href="#">Profile</a>
                  <a href="#">My orders</a>
                  <a href="#">Log out</a>
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
