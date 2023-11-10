import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const cartSelector = useSelector((state) => state.cart);

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
          <a href="">
            <div className="icon-wrapper">
              <div className="bubble">{cartSelector.length}</div>
              <img src="/images/Cart.png" alt="" />
            </div>
          </a>
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
