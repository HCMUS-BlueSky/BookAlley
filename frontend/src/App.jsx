import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginScreen from "./screens/LoginScreen";

const App = () => {
  return (
    <>
      <div className="main">
        <Header />
        <LoginScreen />
        <Footer />
      </div>
    </>
  );
};

export default App;
