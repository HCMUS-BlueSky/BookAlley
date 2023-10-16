import React from "react";

const HeaderComponent = () => {
  return (
    <>
      <header>
        <div className="header-left">
          <img src="/images/Logo.png" alt="" />
          <div className="search">
            <input type="text" />
            <button type="submit">Search</button>
          </div>
        </div>
        <div className="header-right">
          <div className="cart">
            <img src="/images/Cart.png" alt="" />
            <p>Cart</p>
          </div>
          <div className="account">
            <img src="/images/Account.png" alt="" />
            <p>Account</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
