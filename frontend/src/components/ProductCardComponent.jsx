import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetFirebaseUrl } from "../utils/GetFirebaseUrl";

const ProductsCardComponent = ({ product }) => {
  const [photoUrl, setPhotoUrl] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   async function GetPhotoUrl() {
  //     let url = await GetFirebaseUrl(product.image);
  //     setPhotoUrl(url);
  //   }
  //   GetPhotoUrl();
  // }, []);

  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/products/${product._id}`);
      }}
    >
      <img src={product.image} alt="" />
      <div className="card-info">
        {product.name.length > 30 ? (
          <h3>{product.name.slice(0, 30)} ...</h3>
        ) : (
          <h3>{product.name}</h3>
        )}
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductsCardComponent;
