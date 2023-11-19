import React, { useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productsAction";
import ProductScrollComponents from "../components/ProductScrollComponents";
import SliderComponent from "../components/SliderComponent";

const HomePage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <HeaderComponent />
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#F0F0F0",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
        }}
      >
        <div className="container home">
          <SliderComponent />
          <ProductScrollComponents
            headerContent="For you"
            products={products.docs}
          />
          <ProductScrollComponents
            headerContent="Flash sales"
            products={products.docs}
          />
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default HomePage;
