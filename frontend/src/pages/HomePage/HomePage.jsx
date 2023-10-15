import React, { useEffect } from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productsAction";
import ProductsCardComponent from "../../components/ProductCardComponent";

const HomePage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(products);
  return (
    <>
      <HeaderComponent />
      <div
        className="wrapper"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        {products &&
          products.map((product) => {
            return <ProductsCardComponent product={product} />;
          })}
      </div>
      <FooterComponent />
    </>
  );
};

export default HomePage;
