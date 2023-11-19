import React, { useEffect } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
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
        <div className="container seller">
          <div className="seller-info">
            <div className="left">
              <div className="nav-btn">
                <h2>Home</h2>
              </div>
            </div>
            <div className="right">
              <div className="info">
                <h2>{infos.name}</h2>
                <p>{infos.description}</p>
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
