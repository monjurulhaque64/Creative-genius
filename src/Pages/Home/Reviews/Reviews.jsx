import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/review.json') 
          .then(response => response.json())
          .then(data => {
            const slicedData = data.slice(0, 6);
            setReviews(slicedData);
            console.log(slicedData)
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);


  return (
    <div className="container mx-auto mt-[200px]">
      <div className="mx-auto text-center h-[200px]">
        <h1 className="font-[Poppins] font-[600] text-[48px] text-white">
        Reviews
        </h1>
        <p className="font-[Poppins] font-[400] text-[18px] text-white">
          There are some collections of the most common questions and brief,
          easy-to-understand answers about a particular product, service, or
          topic.
        </p>
      </div>
      <div>
        <ReviewCard></ReviewCard>
      </div>
    </div>
  );
};

export default Reviews;
