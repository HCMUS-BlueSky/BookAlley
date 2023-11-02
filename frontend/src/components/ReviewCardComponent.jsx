import React from "react";
import moment from "moment";

const ReviewCardComponent = ({ review }) => {
  return (
    <>
      <div className="review-card">
        <h4>{review.user.username}</h4>
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= review.rating ? "on" : "off"}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </div>
        <p>{moment(review.created_at).format("MMMM Do YYYY, h:mm:ss a")}</p>
        <p>{review.content}</p>
        {review.images.map((image) => {
          return <img src={image} alt="" width="100px" />;
        })}
      </div>
      <hr />
    </>
  );
};

export default ReviewCardComponent;
