import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../actions/authAction";

const SignInPage = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(userLogin({ email, password }));
  };

  return (
    <div className="auth">
      <div className="container">
        <h1>Login</h1>
        <form action="">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmail}
            placeholder=""
            required
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            required
          />
          <p className="noti-info">{error}</p>
          <button type="button" onClick={handleLogin}>
            {loading ? "Loading..." : "Log In"}
          </button>
        </form>
        <p>
          Don't have an account? Register<a href=""> now</a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
