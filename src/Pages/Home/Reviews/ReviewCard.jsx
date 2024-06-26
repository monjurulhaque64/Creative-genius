import React from "react";
import "./ReviewCard.css";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#808080",
};

const ReviewCard = ({ reviews }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:w-[1236px] mx-auto gap-3">
      {reviews.map((review, index) => (
        <div key={index} className="review-card p-[20px]">
          <div className="review-card-content flex gap-3 !pb-2">
            <img
              className="review-photo"
              src={review.photo}
              alt=""
            />
            <div>
              <h2 className="review-card-title heading">{review.name}</h2>
              <Rating
                style={{ maxWidth: 100 }}
                value={review.rating}
                readOnly
                itemStyles={myStyles}
              />
              
            </div>
          </div>
          <div>
          <p className="review-card-description text-justify pragraph px-5 pb-[20px]">
                {review.review}
              </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
