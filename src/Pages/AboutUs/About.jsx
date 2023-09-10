import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Card from "./Card";
import "./singleCard.css";
import img from "../../assets/Images/ceo.png";

const About = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const memberPerPage = 12;

  useEffect(() => {
    fetch("https://creative-server.vercel.app/members")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Calculate the index range for the current page
  const indexOfLastReview = currentPage * memberPerPage;
  const indexOfFirstReview = indexOfLastReview - memberPerPage;
  const currentmember = data.slice(indexOfFirstReview, indexOfLastReview);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages
  const totalPageCount = Math.ceil(data.length / memberPerPage);

  return (
    <div className="container mx-auto mt-[40px] md:mt-[75px] ">
      <Helmet>
        <title>Creative Campus || About Us</title>
      </Helmet>
      <div className="mx-5 md:mx-0">
        <div className="mx-auto text-center ">
          <h1 className="about-title  heading">Meet Our Team</h1>
          <p className="description mt-[20px]  w-[300px] md:w-[650px] text-center mx-auto  text-[14px] md:text-[18px] text-white">
            Here are our talented individuals who drive our company's success.
            Meet the dedicated team behind this company.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[50px] md:mt-[104px] w-full lg:w-[1236px] mx-auto ">
          {currentmember.map((SingleData) => (
            <Card key={SingleData.id} SingleData={SingleData}></Card>
          ))}
        </div>
        {/* Pagination */}
        <div className="join mt-4 flex justify-end mr-4 lg:mr-16 md:mr-4">
          <button
            className={`join-item btn text-white bg-[#171717] hover:bg-[#171717]  ${
              currentPage === 1 ? "btn-disabled" : ""
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            « Previous
          </button>
          <button className="join-item btn text-white bg-[#171717] hover:bg-[#171717] ">
            Page {currentPage}
          </button>
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
        <div className="mt-16 md:mt-[172px] container mx-auto">
          <div className="flex  flex-col items-center">
            <h1 className="Title text-center ">Tanjim Chowdhury</h1>
            <p className="founder mb-3 mt-2">Founder & CEO</p>
          </div>
          <div className="md:flex md:justify-between gap-10 my-24 ">
            <div className="relative mb-10">
              <div className="md:h-60 h-24 border-2 border-blue-700 rotate-180 border-dotted  absolute"></div>
              <div className="md:ml-16 ml-5    md:md:w-[420px] w-[300px]">
                <h1 className="thought-title">Thoughts </h1>
                <p className="thought-description mt-[15px]">
                  Business is about being true to yourself, your ideas and
                  focusing on the essentials. Every time you make the hard
                  decision, you become a bit more courageous in your path. So,
                  push through difficult moments, you definitely have a
                  breakthrough
                </p>
              </div>
            </div>
            <div className="relative ">
              <div className="md:h-60 h-24 border-blue-700 border-2 rotate-180 border-dotted  absolute"></div>
              <div className=" md:ml-16 ml-5    md:md:w-[420px] w-[300px]">
                <h1 className="thought-title">Feelings </h1>
                <p className="thought-description mt-[15px]">
                  {" "}
                  When you're creative and get an idea, it just flows without
                  any barriers. This makes you focus on turning that idea into
                  reality. Working with a team that believes in the same vision
                  creates an amazing feeling of togetherness and purpose.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center my-20 relative">
            <div className="box">
              <div className="content">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="lg:w-[70rem] md:w-[50rem] w-[20rem] border-[1px] border-gray-400 rotate-180 mt-[12rem] border-dashed   absolute"></div>
            <div className="lg:w-[70rem] md:w-[50rem] w-[20rem] border-[1px] border-gray-400 rotate-90 mt-[12rem] border-dashed   absolute"></div>
          </div>
          <div className="md:flex md:justify-between gap-10 md:my-24 mt-5 md:mt-0 md:mb-56">
            <div className="relative mb-10">
              <div className="md:h-64 h-24 border-2 border-blue-700 rotate-180 border-dotted  absolute"></div>
              <div className="md:ml-16 ml-5    md:md:w-[420px] w-[300px]">
                <h1 className="thought-title">Does </h1>
                <p className="thought-description mt-[15px]">
                  closely observe the company's various functions, including operations, finance, marketing, sales, human resources, legal, compliance and technology, while balancing the needs of employees, customers, and investors. Also maintain the communication between the board of directors and corporate operations.
                </p>
              </div>
            </div>
            <div className="relative ">
              <div className="md:h-64 h-24 border-blue-700 border-2 rotate-180 border-dotted  absolute"></div>
              <div className=" md:ml-16 ml-5    md:md:w-[420px] w-[300px]">
                <h1 className="thought-title">Wants </h1>
                <p className="thought-description mt-[15px]">
                  Every CEO wants “Results, Results, Results”. Not only want
                  results, but they want bigger results, and wants them faster.
                  They also want an increase in revenue, productivity, employee
                  retention, decrease in expenses, reduction in employee
                  absences and increase in customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
