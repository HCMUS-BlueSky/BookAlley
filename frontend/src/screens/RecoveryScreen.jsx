import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    let value = e.target.value;
    let inputName = e.target.name;
    if (inputName == "username") {
      setUsername(value);
    } else if (inputName == "newPassword") {
      setPassword(value);
    } else if (inputName == "confirmNewPassword") {
      setConfirmPassword(value);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !password || !confirmPassword) {
      toast.error("Invalid username, email or password!");
      return;
    }
    const user = {
      username: username,
      password: password,
      email: "example4@gmail.com",
    };
    try {
      const response = await toast.promise(
        axios.post("/api/auth/register", user),
        {
          pending: "Loading...",
          success: "Register Successful!",
          error: "Something went wrong!",
        }
      );
      if (response.status === 201) {
        setInterval(navigate("/"), 500);
      }
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      toast.warning(err.response.data);
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
                name="newPassword"
                placeholder="Password"
                onChange={handleChange}
              />
              <label htmlFor="confirmpassword"></label>
              <input
                type="text"
                value={confirmPassword}
                name="newConfirmPassword"
                placeholder="Confirm password"
                onChange={handleChange}
              />
              <button type="button" onClick={handleRegister}>
                <p>Change password</p>
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
