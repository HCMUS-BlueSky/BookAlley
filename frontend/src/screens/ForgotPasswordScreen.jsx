import Header from "../components/Header";
import Footer from "../components/Footer";

const ForgotPasswordScreen = () => {
  return (
    <>
      <div className="main">
        <Header />
        <section>
          <div className="login-card">
            <h2>Forgot password</h2>
            <form action="">
              <label htmlFor=""></label>
              <input type="text" placeholder="Username" />
              <label htmlFor=""></label>
              <input type="text" placeholder="Password" />
              <label htmlFor=""></label>
              <input type="text" placeholder="Confirm password" />
              <button type="button">
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

export default ForgotPasswordScreen;
