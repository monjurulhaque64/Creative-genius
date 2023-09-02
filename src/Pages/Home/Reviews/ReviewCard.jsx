import React from "react";
import "./ReviewCard.css";
import { Rating } from "@smastrom/react-rating";

// Todo: Star rating

const ReviewCard = () => {
  return (
    <div>
      <div className="card ">
        <div className="card-content flex gap-6">
          <img
            className="photo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0EeASRaltQ6nT87gamEbJ3zJsU4GQ5HmNAoxHuWA&s"
            alt=""
          />
          <div>
            <h2 className="card-title mb-3">Web Development</h2>
            {/* <Rating style={{ maxWidth: 0 }} value={3} readOnly /> */}
            <p className="card-description">
              We work with our clients' preferences. We provide user-friendly,
              responsive websites. Our responsibility is to create a website
              that is capable of fulfilling your demands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
