import React, { useEffect, useState } from "react";
import ClientSaysCard from "./ClientSaysCard";
import { Helmet } from "react-helmet-async";

const ClientSays = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 10; 

  useEffect(() => {
    fetch("/review.json")
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
    <div className="container mx-auto mt-[72px]">
      <Helmet>
        <title>Creative Campus || Client Says</title>
      </Helmet>
      <div className="mx-auto text-center h-[200px]">
        <h1 className="font-[Poppins] font-[600] text-[48px] text-black">
          Client Says
        </h1>
        <p className="font-[Poppins] font-[400] text-[18px] text-black">
          There are some reviews from our clients as a result of trusting our business.
        </p>
      </div>
      <div>
        <ClientSaysCard reviews={currentReviews}></ClientSaysCard>
      </div>
      <div className="join mt-4 flex justify-end mr-4 lg:mr-16 md:mr-4">
        <button
          className={`join-item btn ${currentPage === 1 ? "btn-disabled" : ""}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          « Previous
        </button>
        <button className="join-item btn">Page {currentPage}</button>
        <button
          className={`join-item btn ${
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
