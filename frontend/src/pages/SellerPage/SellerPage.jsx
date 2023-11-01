import React, { useEffect } from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import CategoriesComponent from "../../components/CategoriesComponent";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productsAction";
import ProductsCardComponent from "../../components/ProductCardComponent";

const SellerPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const sidebarNavs = [
    "Home",
    "Orders",
    "Products",
    "Inventory",
    "Payment",
    "Analytics",
    "Review",
    "Setting",
  ];
  return (
    <>
      <HeaderComponent />
      <div className="wrapper">
        <div className="left">
          <CategoriesComponent tags={sidebarNavs} />
        </div>
        <div className="right">
          <div className="analytic">
            <h2>Analytic</h2>
            <p>Total order this month</p>
            <h2>69</h2>
            <p>Monthly Income</p>
            <h2>$ 69.420</h2>
            <p>Compare to the previous month</p>
            <hr />
            <h3>Accounting</h3>
            <p>October 1st, 2023 - October 31th, 2023</p>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="seller-products">
          <h2>Products</h2>
          <button type="button">Add new book</button>
          <div className="product-cards">
            {products &&
              products.map((product) => {
                return (
                  <ProductsCardComponent key={product._id} product={product} />
                );
              })}
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default SellerPage;
