import React from "react";

const LoginScreen = () => {
  return (
    <>
      <section>
        <div className="login-card">
          <h2>Login</h2>
          <form action="">
            <label htmlFor=""></label>
            <input type="text" placeholder="Username" />
            <label htmlFor=""></label>
            <input type="text" placeholder="Password" />
            <button type="button">
              <p>Login</p>
            </button>
          </form>
          <div className="nav-btn">
            <button type="button">
              <p>Forgot Password</p>
            </button>
            <button type="button">
              <p>Sign Up</p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginScreen;
