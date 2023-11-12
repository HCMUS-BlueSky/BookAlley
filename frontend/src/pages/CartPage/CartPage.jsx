import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { getCart, removeItems } from "../../actions/cartAction";

const CartPage = () => {
  const { loading, cart } = useSelector((state) => state.cart);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedAllItems, setSelectedAllItems] = useState(false);
  const dispatch = useDispatch();

  const handleAllCheckboxChange = () => {
    setSelectedAllItems(() => {
      const updatedAllItems = !selectedAllItems;
      if (updatedAllItems) {
        const allProductIds = cart.items.map(
          (cartItem) => cartItem.product._id
        );
        setSelectedItems(allProductIds);
      } else {
        setSelectedItems([]);
      }
      return updatedAllItems;
    });
  };

  const handleCheckboxChange = (productId) => {
    if (selectedItems.includes(productId)) {
      setSelectedItems((prevSelected) => {
        const updatedSelected = prevSelected.filter((id) => id !== productId);
        if (selectedAllItems) {
          setSelectedAllItems(false);
        }
        return updatedSelected;
      });
    } else {
      setSelectedItems((prevSelected) => {
        const updatedSelected = [...prevSelected, productId];
        if (updatedSelected.length == cart.items.length) {
          setSelectedAllItems(true);
        }
        return updatedSelected;
      });
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.items.forEach((cartItem) => {
      if (selectedItems.includes(cartItem.product._id)) {
        totalPrice += cartItem.price * cartItem.quantity;
      }
    });
    return totalPrice;
  };

  const handleRemoveToCart = async (product_id, quantity) => {
    const result = await dispatch(
      removeItems({ product_id, quantity: quantity.toString() })
    );
    if (removeItems.fulfilled.match(result)) {
      dispatch(getCart());
    }
  };

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
              <label className="checkmark-container">
                Product
                <input
                  type="checkbox"
                  checked={selectedAllItems}
                  onChange={() => handleAllCheckboxChange()}
                />
                <span className="checkmark"></span>
              </label>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
            {cart.items &&
              cart.items.map((cartItem) => {
                return (
                  <div className="cart-item" key={cartItem._id}>
                    <label className="checkmark-container name-image">
                      <img src={cartItem.product.image} alt="" />
                      <p>{cartItem.product.name}</p>
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(cartItem.product._id)}
                        onChange={() =>
                          handleCheckboxChange(cartItem.product._id)
                        }
                      />
                      <span className="checkmark checkmark-center"></span>
                    </label>
                    <span>{cartItem.price}</span>
                    <span>{cartItem.quantity}</span>
                    <span>{cartItem.price * cartItem.quantity}</span>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      onClick={() => {
                        handleRemoveToCart(
                          cartItem.product._id,
                          cartItem.quantity
                        );
                      }}
                    />
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
                <span>{cart.items && calculateTotalPrice()}đ</span>
              </div>

              <hr />
              <div className="total-count">
                <p>Total</p>
                <span>{cart.items && calculateTotalPrice()}đ</span>
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

export default CartPage;
