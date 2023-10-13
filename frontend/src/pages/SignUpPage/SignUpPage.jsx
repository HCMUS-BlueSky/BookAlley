import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../actions/authAction";

const SignUpPage = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ username, email, password }));
  };

  return (
    <div className="auth">
      <div className="container">
        <h1>Register</h1>
        <form action="">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            required
          />
          <p className="noti-info">{error}</p>
          <button type="submit" onClick={handleSubmit}>
            {loading ? "Loading..." : "Register"}
          </button>
        </form>
        <p>
          Already have an account? <a href="">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
