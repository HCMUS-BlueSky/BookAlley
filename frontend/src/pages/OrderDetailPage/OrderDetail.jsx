import React from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const OrderDetail = () => {
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
        <div className="container orders-detail">
          <div className="order-info">
            <div className="self-info">
              <h2>JOHN DOE</h2>
              <p>
                Address: 275 Điện Biên Phủ, Võ Thị Sáu, Quận 3 Thành phố Hồ Chí
                Minh
              </p>
              <p>Phone: 069696969</p>
            </div>
            <div className="delivery-info">
              <p>Delivery: Same-day delivery</p>
              <p>Arrive on: 7/9/2003</p>
              <p>Status: Shipped</p>
              <p>Payment: Cash</p>
            </div>
            <div className="payment-info">
              <p>Provisonal: 276.000đ</p>
              <p>Shipping: 50.000đ</p>
              <p>Total: 326.000đ</p>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default OrderDetail;
