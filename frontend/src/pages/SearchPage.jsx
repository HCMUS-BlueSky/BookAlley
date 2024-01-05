import React, { useEffect } from "react";
import { searchProduct } from "../actions/productsAction";
import { useDispatch } from "react-redux";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const SearchPage = () => {
  const searchParams = new URLSearchParams(document.location.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchProduct({ searchTerm: searchParams.toString() }));
  }, []);

  return (
    <>
      <HeaderComponent />
      <FooterComponent />
    </>
  );
};

export default SearchPage;
