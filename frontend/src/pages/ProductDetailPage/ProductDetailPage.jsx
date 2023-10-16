import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GetFirebaseUrl } from "../../utils/GetFirebaseUrl";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div className="detail-product">
          <div className="detail-main">
            <img src={product.image} alt="" />
            <h2>{product.name}</h2>
            <p>Author: {product.author}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
          </div>
          <div className="detail-info"></div>
        </div>
      )}
    </>
  );
};

export default ProductDetailPage;
