import React from "react";
import "../../styles/partials/_SignInUp.scss";

const SignInPage = () => {
  return (
    <div>
      <div className="container">
        <h1>Login</h1>
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="text" required />
          <label htmlFor="">Password</label>
          <input type="text" required />
          <p className="noti-info">Wrong password</p>
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
