import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement();

const ReviewsComponent = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="customer-reviews">
      <h2>Reviews</h2>
      <button onClick={openModal} className="add-review-btn">
        Add new review
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterClose={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form action="" className="form-review">
          <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= (hover || rating) ? "on" : "off"}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                >
                  <span className="star">&#9733;</span>
                </button>
              );
            })}
          </div>
          <h3>Share your review</h3>
          {/* <button onClick={closeModal}>Close</button> */}
          <label htmlFor="review-content"></label>
          <textarea
            name="review-content"
            id=""
            cols="30"
            rows="10"
            style={{ width: "500px", outline: "none", fontFamily: "inherit" }}
          ></textarea>
          <label htmlFor="review-images"></label>
          <input type="file" />
          <button type="button" className="send-btn">
            Send review
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ReviewsComponent;
