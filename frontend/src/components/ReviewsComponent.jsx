import { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { addNewReview } from "../actions/reviewsAction";

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

const ReviewsComponent = ({ product_id }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.reviews);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(0);

  const [rating, setRating] = useState(0);
  const [reviewContent, setReviewContent] = useState("");
  const [reviewImage, setReviewImage] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const handleReviewContent = (e) => {
    setReviewContent(e.target.value);
  };

  const handleSendReview = () => {
    dispatch(
      addNewReview({
        content: reviewContent,
        rating: rating,
      })
    );
  };

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
            value={reviewContent}
            onChange={handleReviewContent}
            rows="10"
            style={{ width: "500px", outline: "none", fontFamily: "inherit" }}
          ></textarea>
          <label htmlFor="review-images"></label>
          <input type="file" />
          <button type="button" className="send-btn" onClick={handleSendReview}>
            Send review
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ReviewsComponent;
