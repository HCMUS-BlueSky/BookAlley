import React from "react";

const ResetPassword = () => {
  return (
    <div className="auth">
      <div className="container">
        <h1>Reset password</h1>
        <form action="">
          <label htmlFor="email">New password</label>
          <input type="text" required />
          <label htmlFor="">Confirm new password</label>
          <input type="text" required />
          <p className="noti-info">Wrong password</p>
          <button type="button">Submit</button>
        </form>
        <p>
          Just remember your password? <a href="">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
