import React, { useEffect } from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../../actions/productsAction";
import ProductsCardComponent from "../../components/ProductCardComponent";
import CategoriesComponent from "../../components/CategoriesComponent";

const HomePage = () => {
  const dispatch = useDispatch();
  const { tags, products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);
  console.log(tags);
  return (
    <>
      <HeaderComponent />
      <div className="wrapper">
        <div className="categories">
          <CategoriesComponent tags={tags.tags} />
        </div>
        <div className="products">
          <h2>Sản phẩm bán chạy</h2>
          <div className="product-cards">
            {products &&
              products.map((product) => {
                return <ProductsCardComponent product={product} />;
              })}
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
};

export default HomePage;
