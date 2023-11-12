import { useLocation } from "react-router-dom";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const CheckoutPage = () => {
  const location = useLocation();
  const { selectedItems, totalPrice } = location.state || {};
  console.log(selectedItems);

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
        <div className="container checkout">
          <div className="products-list">
            <h2>PRODUCTS LIST</h2>
            <div className="products-header">
              <div style={{ width: "390px" }}>
                <span>Product</span>
              </div>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>
            {selectedItems &&
              selectedItems.map((item) => {
                return (
                  <div className="product-item" key={item._id}>
                    <div
                      style={{
                        width: "390px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img src={item.product.image} alt="" />
                      <p>{item.product.name}</p>
                    </div>
                    <span>{item.price}</span>
                    <span>{item.quantity}</span>
                    <span>{item.price * item.quantity}</span>
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
              <div className="total-provisional">
                <p>Provisional</p>
                <span>{totalPrice}đ</span>
              </div>

              <hr />
              <div className="total-count">
                <p>Total</p>
                <span>{totalPrice}đ</span>
              </div>

              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
};

export default CheckoutPage;
