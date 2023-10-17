import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GetFirebaseUrl } from "../../utils/GetFirebaseUrl";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        let data = await axios.get(`/api/book/get-detail/${id}`);
        setProduct(data.data);
        let url = await GetFirebaseUrl(data.data.image);
        setProduct({ ...data.data, image: url });
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleCountChange = (e) => {
    const newValue = parseInt(e.target.value);
    setCount(newValue);
  };

  const decreaseValue = () => {
    if (count - 1 >= 0) setCount(count - 1);
  };

  const increaseValue = () => {
    setCount(count + 1);
  };

  return (
    <>
      <HeaderComponent />
      {loading ? (
        "Loading..."
      ) : (
        <div className="product-detail">
          <div className="product-detail-card">
            <div className="product-image">
              <img src={product.image} alt="" />
            </div>
            <div className="detail-info">
              <h2>{product.name}</h2>
              <p className="author">Author: {product.author}</p>
              {product.translator && (
                <p className="translator">Translator: {product.translator}</p>
              )}
              <p className="price">
                {product.price && product.price.toLocaleString("en-US")}
                <span>đ</span>
              </p>
              {/* <p className="rating">{product.rating}</p> */}
              <div className="btn">
                <div className="value-btn" onClick={decreaseValue}>
                  -
                </div>
                <input
                  type="number"
                  id="number"
                  value={count}
                  onChange={handleCountChange}
                />
                <div className="value-btn" onClick={increaseValue}>
                  +
                </div>
              </div>
              <div className="cart-btn">
                <button className="buy-btn">Buy</button>
                <button className="add-btn">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="detail-info">
            <h2>DETAILS</h2>
            <div className="info-group">
              <p>
                Author: <span>{product.author}</span>
              </p>
              {product.translator ? (
                <p>
                  Translator: <span>{product.translator}</span>
                </p>
              ) : null}

              <p>
                Publisher: <span>{product.publisher}</span>
              </p>
              <p>
                Publish Date: <span>{product.year_published}</span>
              </p>
              <p>
                Page Count: <span>{product.pages}</span>
              </p>
              <p>
                Dimensions: <span>{product.size}</span>
              </p>
            </div>
            <h2>OVERVIEW</h2>
            <p className="description">
              {product.description && product.description.length > 100
                ? product.description.slice(0, 500) + "..."
                : product.description}
            </p>
          </div>
          <div className="customer-reviews">
            <h2>CUSTOMER REVIEWS</h2>
          </div>
        </div>
      )}
      <FooterComponent />
    </>
  );
};

export default ProductDetailPage;
