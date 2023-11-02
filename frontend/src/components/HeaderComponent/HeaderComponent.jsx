import React from "react";

const HeaderComponent = () => {
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
            <img src="/images/Cart.png" alt="" />
          </a>
          <a href="">
            <img src="/images/Account.png" alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
