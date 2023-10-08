import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ForgotPasswordScreen = () => {
  // non-existent email, cái này tính sau :D 
  const handleEmail = () => {

  }
  return (
    <>
      <div className="main">
        <Header />
        <section>
          <div className="login-card">
            <h2>Forgot password</h2>
            <form action="">
              <label htmlFor=""></label>
              <input type="text" placeholder="Enter recovery email:"/>
              <button type="button">
                <p>Next</p>
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default ForgotPasswordScreen;
