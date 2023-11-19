import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axios";
import { useDispatch, useSelector } from "react-redux";

const OrderDetailPage = () => {
  const { order_id } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        let data = await axiosInstance.get(`/api/order/detail/${order_id}`);
        setOrder(data.data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    fetchData();
  }, []);
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
              <h2>{order.shipping_info && order.shipping_info.fullname}</h2>
              <p>
                <span>Address: </span>
                {order.shipping_info &&
                  order.shipping_info.address +
                    ", Phường " +
                    order.shipping_info.ward +
                    ", Quận " +
                    order.shipping_info.district +
                    ", " +
                    order.shipping_info.city}
              </p>
              <p>Phone: {order.shipping_info && order.shipping_info.phone}</p>
            </div>
            <div className="delivery-info">
              <p>Delivery: {order.shipping_method}</p>
              <p>Arrive on: </p>
              <p>Status: {order.status}</p>
              <p>Payment: Cash</p>
            </div>
            <div className="payment-info">
              {/* <p>Provisonal: 276.000đ</p>
              <p>Shipping: 50.000đ</p> */}
              <p>Total: {order.total}</p>
            </div>
          </div>
          <div className="orders">
            <h2>Order detail</h2>
            {order.items &&
              order.items.map((item) => {
                return (
                  <div className="order-card" key={item._id}>
                    <div className="order-info">
                      <img src={item.product.image}></img>
                      <div>
                        <h3>{item.product.name}</h3>
                      </div>
                    </div>
                    <div className="order-total">
                      <p>{item.product.price}đ</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default OrderDetailPage;
