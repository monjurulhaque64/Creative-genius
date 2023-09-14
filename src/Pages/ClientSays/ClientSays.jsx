import React, { useEffect, useState } from "react";
import ClientSaysCard from "./ClientSaysCard";
import { Helmet } from "react-helmet-async";

const ClientSays = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 12; 

  useEffect(() => {
    fetch("https://creative-server.vercel.app/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Calculate the index range for the current page
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages
  const totalPageCount = Math.ceil(reviews.length / reviewsPerPage);

  return (
    <div className="container mx-auto mt-[40px] md:mt-[72px]">
      <Helmet>
        <title>Creative Campus || Client Says</title>
      </Helmet>
      <div className="mx-auto text-center h-[130px] md:h-[200px]">
        <h1 className="heading font-[600] text-[28px] md:text-[48px] text-white">
        Reviews
        </h1>
        <p className="heading font-[400] w-[300px] md:w-[650px] text-center mx-auto text-[14px] md:text-[16px] text-white mt-[20px]">
          There are some reviews from our clients as a result of trusting our business.
        </p>
      </div>
      <div className="mt-[71px] ">
        <ClientSaysCard reviews={currentReviews}></ClientSaysCard>
      </div>
      <div className="join mt-10 flex gap-2 justify-center mr-4  md:mr-10  mb-[198px]">
        <button
          className={`join-item pagination btn text-white bg-[#3d4854d4] hover:bg-[#3d4854d4] ${currentPage === 1 ? "btn-disabled" : ""}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ border: '1px solid #404040' }}
        >
          « Previous
        </button>
        <button className="join-item pagination btn rounded-md text-white bg-[#3d4854d4]   hover:bg-[#3d4854d4]"
        style={{ border: '1px solid #404040' }}
        >0{currentPage}</button>
        <button
          className={`join-item btn pagination text-white bg-[#3d4854d4]    hover:bg-[#3d4854d4] ${
            currentPage === totalPageCount ? "btn-disabled" : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPageCount}
          style={{ border: '1px solid #404040' }}
        >
          Next »
        </button>
      </div>
    </div>
  );
};

export default ClientSays;
