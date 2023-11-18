import React, { useEffect } from "react";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../actions/orderAction";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);
  const navigate = useNavigate();

  const handleClickOrderDetail = (orderId) => {
    navigate(`/order/view/${orderId}`);
  };

  useEffect(() => {
    dispatch(getOrders());
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
        <div className="container orders">
          <h2>My order</h2>
          {orders.map((order) => {
            return (
              <div
                className="order-card"
                key={order._id}
                onClick={() => handleClickOrderDetail(order._id)}
              >
                <img src={order.items[0].product.image}></img>
                <div>
                  <h3>{order.items[0].product.name}</h3>
                  <p>Shop Name</p>
                  <p>Status: </p>
                </div>
                <div>
                  <p>{order.total}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default OrderPage;
