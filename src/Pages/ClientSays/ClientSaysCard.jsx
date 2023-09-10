import React from "react";
import "./ClientSays.css";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#808080",
};

const ClientSaysCard = ({ reviews }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full lg:w-[1236px] mx-auto gap-4  container-client-say">
      {reviews.map((review, index) => (
        <div key={index} className="client-card ">
          <div className="client-card-content flex gap-6">
            <img className="client-photo" src={review.photo} alt="" />
            <div>
              <h2 className="client-card-title mb-3">{review.name}</h2>
              <Rating
                style={{ maxWidth: 150 }}
                value={review.rating}
                readOnly
                itemStyles={myStyles}
              />
              <p className="client-card-description">{review.review}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientSaysCard;
