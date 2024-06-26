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
        <div key={index} className="client-card p-[20px] ">
          <div className="client-card-content flex gap-3 !pb-2">
            <img className="client-photo" src={review.photo} alt="" />
            <div>
              <h2 className="client-card-title heading">{review.name}</h2>
              <Rating
                style={{ maxWidth: 100 }}
                value={review.rating}
                readOnly
                itemStyles={myStyles}
              />
            </div>
          </div>
          <div>
          <p className="client-card-description pragraph px-4  text-justify pb-[20px]">{review.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientSaysCard;
