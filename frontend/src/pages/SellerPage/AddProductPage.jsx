import React from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const AddProductPage = () => {
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
        <div className="container seller-add">
          <div className="general-info-card">
            <h2>1. General Information</h2>
            <hr />
            <label htmlFor="">Product name</label>
            <input type="text" />
            <label htmlFor="">Genre</label>
            <input type="text" />
          </div>
          <div className="detail-card">
            <h2>2. Detail</h2>
            <hr />
            <form action="">
              <label htmlFor="">Author</label>
              <input type="text" />
            </form>
            <form action="">
              <label htmlFor="">Publisher</label>
              <input type="text" />
            </form>
            <form action="">
              <label htmlFor="">Translator</label>
              <input type="text" />
            </form>
            <form action="">
              <label htmlFor="">Page count</label>
              <input type="number" />
            </form>
            <form action="">
              <label htmlFor="">Publish date</label>
              <input type="date" />
            </form>
            <form action="">
              <label htmlFor="">Language</label>
              <input type="text" />
            </form>
          </div>
          <div className="pricing-image-card">
            <h2>3. Pricing and Pictures</h2>
            <hr />
            <label htmlFor="">Price</label>
            <input type="number" />
            <label htmlFor="">Product code</label>
            <input type="text" />
            <label htmlFor="">Weight</label>
            <input type="number" />
            <label htmlFor="">Dimensions</label>
            <input type="text" />
            <label htmlFor="">Product picture</label>
            <input type="file" />
          </div>
          <div className="description-card">
            <h2>4. Description</h2>
            <hr />
            <label htmlFor="">Product description</label>
            <input type="text" />
          </div>
          <div className="nav-btn">
            <button type="button">Cancel</button>
            <button type="button">Submit</button>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default AddProductPage;
