import React from "react";

const ForgotPasswordPage = () => {
  return (
    <div className="auth">
      <div className="container">
        <h1>Forgot password</h1>
        <p style={{ padding: "0 40px" }}>
          A password reset link will be sent to your email address
        </p>
        <form action="">
          <label htmlFor="">Email</label>
          <input type="email" required />
          <p className="noti-info">Wrong email</p>
          <button type="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
