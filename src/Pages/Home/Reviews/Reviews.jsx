import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";

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
    <div className="container mx-auto mt-[72px] ">
      <div className="mx-auto text-center h-[130px] md:h-[200px]">
        <h1 className="font-[Poppins] font-[600] text-[28px] md:text-[48px] text-white">
          Reviews
        </h1>
        <p className="font-[Poppins] font-[400] text-[14px] md:text-[18px] text-white">
          There are some reviews for customers from our clients as a result of
          trusting our business.
        </p>
      </div>
      <div>
        <ReviewCard reviews={reviews}></ReviewCard>
      </div>
      <div className="flex justify-center items-center mb-12">
        <Link to={'/client-says'}><button className="btn btn-info bg-[#ff0000] hover:bg-[#f35454] border-[#ff0000] mt-[36px] lg:mr-[100px] text-white">
          See More
        </button></Link>
      </div>
    </div>
  );
};

export default Reviews;
