import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Pricing.css";
import { Link } from "react-router-dom";
const Pricing = () => {
  const packages = [
    {
      package: "Monthly Package",
      text: [
        "Admission Management",
        "Online Class & Exam System",
        "Profile Management",
        "Library Management",
        "Financial Management",
        "Examination Management",
        "Free Management",
        "Website Management",
        "Online Account Management",
        "Human Resource Management",
        "User Management",
        "Result Management",
        "Branch Control",
        "Teacher Attendance Tracking Analytics",
        "Student Attendance Tracking Analytics",
        "Attendance Management",
        "Transportation systems management",
        "Provide Mobile Application",
      ],
      price: 15,
      duration: "per month",
    },
    {
      package: "Half Yearly Package",
      text: [
        "Admission Management",
        "Online Class & Exam System",
        "Profile Management",
        "Library Management",
        "Financial Management",
        "Examination Management",
        "Free Management",
        "Website Management",
        "Online Account Management",
        "Human Resource Management",
        "User Management",
        "Result Management",
        "Branch Control",
        "Teacher Attendance Tracking Analytics",
        "Student Attendance Tracking Analytics",
        "Attendance Management",
        "Transportation systems management",
        "Provide Mobile Application",
      ],
      price: 60,
      duration: "per 6 month",
    },
    {
      package: "Yearly Package",
      text: [
        "Admission Management",
        "Online Class & Exam System",
        "Profile Management",
        "Library Management",
        "Financial Management",
        "Examination Management",
        "Free Management",
        "Website Management",
        "Online Account Management",
        "Human Resource Management",
        "User Management",
        "Result Management",
        "Branch Control",
        "Teacher Attendance Tracking Analytics",
        "Student Attendance Tracking Analytics",
        "Attendance Management",
        "Transportation systems management",
        "Provide Mobile Application",
      ],
      price: 120,
      duration: "per year",
    },
    {
      package: "Lifetime Package",
      text: [
        "Admission Management",
        "Online Class & Exam System",
        "Profile Management",
        "Library Management",
        "Financial Management",
        "Examination Management",
        "Free Management",
        "Website Management",
        "Online Account Management",
        "Human Resource Management",
        "User Management",
        "Result Management",
        "Branch Control",
        "Teacher Attendance Tracking Analytics",
        "Student Attendance Tracking Analytics",
        "Attendance Management",
        "Transportation systems management",
        "Provide Mobile Application",
      ],
      price: 200,
      duration: "Lifetime",
    },
  ];

  return (
    <div className="container mx-auto mt-10 md:mt-[72px] ">
      <Helmet>
        <title>Creative Campus || Pricing Table</title>
      </Helmet>

      <div className="md:mb-24 mx-5">
        <div className="flex flex-col  items-center">
          <h1 className="Title">Pricing Table</h1>
          <p className="mt-3 description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:mt-28 w-full lg:w-[1236px] mx-auto gap-3">
          {packages.map((product, index) => (
            <div
              key={index}
              className="price-card mt-10 md:mt-0 w-[280px]  mx-auto md:w-[287px] h-[900px]  md:h-[900px] shadow-md p-4"
            >
              <h1 className="price-title text-center my-4">
                {product.package}
              </h1>
              {product.text.map((line, lineIndex) => (
                <div key={lineIndex} className="flex items-center gap-2">
                  <svg
                    className="mt-1 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M17.0449 5.76383L7.54492 15.2638C7.48978 15.319 7.42429 15.3628 7.35221 15.3927C7.28013 15.4226 7.20287 15.438 7.12484 15.438C7.04682 15.438 6.96955 15.4226 6.89747 15.3927C6.82539 15.3628 6.75991 15.319 6.70477 15.2638L2.54851 11.1076C2.4371 10.9962 2.37451 10.8451 2.37451 10.6875C2.37451 10.5299 2.4371 10.3788 2.54851 10.2674C2.65993 10.156 2.81103 10.0934 2.96859 10.0934C3.12615 10.0934 3.27726 10.156 3.38867 10.2674L7.12484 14.0043L16.2048 4.92367C16.3162 4.81226 16.4673 4.74967 16.6248 4.74967C16.7824 4.74967 16.9335 4.81226 17.0449 4.92367C17.1563 5.03508 17.2189 5.18619 17.2189 5.34375C17.2189 5.50131 17.1563 5.65241 17.0449 5.76383Z"
                      fill="black"
                    />
                  </svg>
                  <p className="price-p mt-1" key={lineIndex}>
                    {line}
                  </p>
                </div>
              ))}
              <p className="text-center md:mt-5">
                <span className="price">{product.price}k BDT</span>{" "}
                <span className="price-month">/{product.duration}</span>
              </p>
              <div className="flex justify-center items-center">
                <Link to={""}>
                  <button className="btn btn-info bg-[#ff0000] hover:bg-[#f35454] border-[#ff0000] mt-[20px]  text-white">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;