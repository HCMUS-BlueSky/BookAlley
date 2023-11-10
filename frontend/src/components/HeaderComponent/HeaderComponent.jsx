import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartTotalSelector } from "../../reducers/cart/cartSelectors";

const HeaderComponent = () => {
  const totalCart = useSelector(cartTotalSelector);

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
          <Link to="/signin">
            <a href="">
              <img src="/images/Account.png" alt="" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
