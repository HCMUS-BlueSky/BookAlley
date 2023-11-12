import React from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { useSelector } from "react-redux";
import { cartTotalPriceSelector } from "../../reducers/cart/cartSelectors";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);

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
        <div className="container cart">
          <div className="cart-product">
            <h2>CART</h2>
            <div className="cart-header">
              <label class="checkmark-container">
                Product
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>
            {cart.map((cartItem) => {
              return (
                <div className="cart-item" key={cartItem._id}>
                  <label class="checkmark-container name-image">
                    <img src={cartItem.image} alt="" />
                    <p>{cartItem.name}</p>
                    <input type="checkbox" />
                    <span className="checkmark checkmark-center"></span>
                  </label>
                  <span>{cartItem.price}</span>
                  <span>{cartItem.quantity}</span>
                  <span>{totalPrice}</span>
                </div>
              );
            })}
          </div>
          <div className="cart-main">
            <div className="delivery">
              <h3>Deliver to</h3>
              <span>John Doe | 0696969696</span>
              <p>275 Điện Biên Phủ, Võ Thị Sáu, Quận 3 Thành phố Hồ Chí Minh</p>
            </div>
            <div className="voucher">
              <h3>Voucher</h3>
              <p>Choose your voucher</p>
            </div>
            <div className="total">
              <p>Provisional</p>
              <hr />
              <p>Total</p>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default CartPage;
