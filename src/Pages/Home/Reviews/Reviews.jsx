import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";
import './reviews.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://creative-server.vercel.app/reviews")
      .then((response) => response.json())
      .then((data) => {
        const slicedData = data.slice(0, 6);
        setReviews(slicedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto mt-16 md:mt-[117px] relative mb-[40px]">
      <div className="mx-auto text-center h-[150px] md:h-[200px]">
        <h1 className="heading font-[600] text-[28px] md:text-[48px] text-white">
          Reviews
        </h1>
        <p className="pragraph font-[400] w-[300px] md:w-[650px] text-center mx-auto text-[16px] mt-[17px] text-white">
          There are some reviews for customers from our clients as a result of
          trusting our business.
        </p>
      </div>
      <div>
        <ReviewCard reviews={reviews}></ReviewCard>
      </div>
      <div className="gradient-bottom inset-x-0 "></div>
      <div className="flex justify-center items-center  mb-24 absolute inset-x-0 mt-[20px]">
        <Link to={'/client-says'}><button className="see-more-btn">
          See More
        </button></Link>
      </div>
    </div>
  );
};

export default Reviews;
