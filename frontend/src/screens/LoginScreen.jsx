import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    let value = e.target.value;
    let inputName = e.target.name;
    if (inputName == "username") {
      setUsername(value);
    } else if (inputName == "password") {
      setPassword(value);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!username || !password) {
        toast.error("Invalid username, email or password!");
      } else {
        const user = {
          // username: username,
          email: "example@gmail.com",
          password: password,
        };
        const response = await toast.promise(
          axios.post("/api/auth/login", user),
          {
            pending: "Loading...",
            success: "Login Successful!",
            error: "Something went wrong!",
          }
        );
        console.log(response);
        if (response.status === 200) {
          console.log("Successfully");
          navigate("/home");
        }
        setUsername("");
        setPassword("");
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
      <div className="main">
        <Header />
        <ToastContainer />
        <section>
          <div className="login-card">
            <h2>Login</h2>
            <form action="">
              <label htmlFor=""></label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
              <label htmlFor=""></label>
              <input
                type="text"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <button type="button" onClick={handleLogin}>
                <p>Login</p>
              </button>
            </form>
            <div className="nav-btn">
              <button type="button">
                <Link to="/forgotpassword">
                  <p>Forgot Password</p>
                </Link>
              </button>
              <button type="button">
                <Link to="/register">
                  <p>Sign Up</p>
                </Link>
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default LoginScreen;
