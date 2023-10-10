import React from "react";
import "./SignInPage.scss";

const SignInPage = () => {
  return (
    <div>
      <div className="container">
        <h1>Login</h1>
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="text" />
          <button type="button">Submit</button>
        </form>
        <p>
          Don't have an account? Register<a href=""> now</a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
