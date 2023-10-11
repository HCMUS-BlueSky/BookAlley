import React from "react";

const SignUpPage = () => {
  return (
    <div>
      <div className="container">
        <h1>Register</h1>
        <form action="">
          <label htmlFor="email">Username</label>
          <input type="text" required />
          <label htmlFor="email">Email</label>
          <input type="text" required />
          <label htmlFor="">Password</label>
          <input type="text" required />
          <p className="noti-info">Wrong password</p>
          <button type="button">Submit</button>
        </form>
        <p>
          Already have an account? <a href="">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
