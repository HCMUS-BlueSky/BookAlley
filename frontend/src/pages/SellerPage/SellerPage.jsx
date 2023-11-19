import React, { useEffect } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
import CategoriesComponent from "../../components/CategoriesComponent";
import { useDispatch, useSelector } from "react-redux";
import ProductsCardComponent from "../../components/ProductCardComponent";

import { useParams } from "react-router-dom";
import { getProductsForSeller } from "../../actions/shopAction";

const SellerPage = () => {
  const dispatch = useDispatch();
  const { shop_id } = useParams();
  const { infos } = useSelector((state) => state.shop);
  useEffect(() => {
    dispatch(getProductsForSeller({ shop_id: shop_id }));
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
      <div
        className="container-fluid"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/images/bg-log.jpg")`,
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
        }}
      >
        <div className="container seller">
          <div className="seller-info">
            <div className="left">
              <CategoriesComponent tags={sidebarNavs} />
            </div>
            <div className="right">
              <div className="info">
                <h2>{infos.name}</h2>
                <p>{infos.description}</p>
              </div>
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
          <div className="seller-products">
            <h2>Products</h2>
            {/* <button type="button">Add new book</button> */}
            <div className="product-cards">
              {infos.listings &&
                infos.listings.map((product) => {
                  return (
                    <ProductsCardComponent
                      key={product._id}
                      product={product}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default SellerPage;
