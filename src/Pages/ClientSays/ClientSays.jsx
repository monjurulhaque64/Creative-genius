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
        <p className="pragraph font-[400] w-[300px] md:w-[650px] text-center mx-auto text-[14px] md:text-[18px] text-white">
          There are some reviews from our clients as a result of trusting our business.
        </p>
      </div>
      <div>
        <ClientSaysCard reviews={currentReviews}></ClientSaysCard>
      </div>
      <div className="join mt-4 flex justify-end mr-4 lg:mr-16 md:mr-4">
        <button
          className={`join-item btn text-white bg-[#171717] hover:bg-[#171717] ${currentPage === 1 ? "btn-disabled" : ""}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          « Previous
        </button>
        <button className="join-item btn text-white bg-[#171717] hover:bg-[#171717]">Page {currentPage}</button>
        <button
          className={`join-item btn text-white bg-[#171717] hover:bg-[#171717] ${
            currentPage === totalPageCount ? "btn-disabled" : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPageCount}
        >
          Next »
        </button>
      </div>
    </div>
  );
};

export default ClientSays;
