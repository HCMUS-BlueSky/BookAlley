import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    let inputName = e.target.name;
    if (inputName == "username") {
      setUsername(value);
    } else if (inputName == "password") {
      setPassword(value);
    } else if (inputName == "confirmpassword") {
      setConfirmPassword(value);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (!username || !password || !confirmPassword) {
        toast.error("Invalid username, email or password!");
      } else if (password !== confirmPassword) {
        toast.error(
          "The confirmation password does not match. Please try again!"
        );
      } else if (password.length < 7) {
        toast.error("Password too short");
      } else {
        const user = {
          username: username,
          password: password,
          email: "example1@gmail.com",
        };
        const response = await toast.promise(
          axios.post("/api/auth/register", user),
          {
            pending: "Loading...",
            success: "Register Successful!",
            error: "Something went wrong!",
          }
        );
        setUsername("");
        setPassword("");
        setConfirmPassword("");
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
            <h2>Sign up</h2>
            <form action="">
              <label htmlFor="username"></label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
              <label htmlFor="password"></label>
              <input
                type="text"
                value={password}
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <label htmlFor="confirmpassword"></label>
              <input
                type="text"
                value={confirmPassword}
                name="confirmpassword"
                placeholder="Confirm password"
                onChange={handleChange}
              />
              <button type="button" onClick={handleRegister}>
                <p>Sign Up</p>
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default RegisterScreen;
