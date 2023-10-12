import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../actions/authAction";

const SignInPage = () => {
  const dispatch = useDispatch();
  // const { loading, error } = useSelector((state) => state.user);
  // const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    // setLoading(true);
    dispatch(userLogin({ email, password }));
  };

  // useEffect(() => {
  //   if (userLogin) {
  //     navigate("/");
  //   }
  // }, [navigate, userLogin]);

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
            required
          />
          <label htmlFor="">Password</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={handlePassword}
            required
          />
          <p className="noti-info">Something went wrong</p>
          <button type="button" onClick={handleLogin}>
            Submit
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
