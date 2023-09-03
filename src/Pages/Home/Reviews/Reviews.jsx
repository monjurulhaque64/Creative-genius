import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((response) => response.json())
      .then((data) => {
        const slicedData = data.slice(0, 6);
        setReviews(slicedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto mt-[200px] ">
      <div className="mx-auto text-center h-[200px]">
        <h1 className="font-[Poppins] font-[600] text-[48px] text-white">
          Reviews
        </h1>
        <p className="font-[Poppins] font-[400] text-[18px] text-white">
          There are some reviews for customers from our clients as a result of
          trusting our business.
        </p>
      </div>
      <div>
        <ReviewCard reviews={reviews}></ReviewCard>
      </div>
      <div className="flex justify-center items-center mb-12">
        <button className="btn btn-info bg-[#3C4FF8] mt-[36px] lg:mr-[100px] text-white">
          See More
        </button>
      </div>
    </div>
  );
};

export default Reviews;
