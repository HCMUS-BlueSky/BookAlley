import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="header-info">
            <img src="./images/Logo.svg" alt="" />
            <h1>Book Alley</h1>
          </div>
          <div className="header-btn">
            <button type="button">
              <p>Home</p>
            </button>
            <button type="button">
              <p>About us</p>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
