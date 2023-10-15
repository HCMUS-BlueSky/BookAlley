import React, { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

const ProductsCardComponent = ({ product }) => {
  const [photoUrl, setPhotoUrl] = useState("");
  const getPhotoUrl = async () => {
    const photoRef = ref(storage, product.image);
    const url = await getDownloadURL(photoRef);
    setPhotoUrl(url);
  };

  useEffect(() => {
    getPhotoUrl();
  }, []);

  return (
    <div className="card">
      <img src={photoUrl} alt="" />
      <h3>{product.name.slice(0, 30)} ...</h3>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductsCardComponent;
