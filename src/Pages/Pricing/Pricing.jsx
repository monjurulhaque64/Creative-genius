import React, { useState } from "react";
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
      price: "15 tk",
      duration: "per student",
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
      price: "60k",
      duration: "for 6 months",
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
      price: "120k",
      duration: "for year",
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
      price: "200k",
      duration: "Lifetime",
    },
  ];

  const [fullName, setFullName] = useState("");
  const [rating, setRating] = useState(1);
  const [photo, setPhoto] = useState(null);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", photo);

    const data = {
      fullName,
      rating,
      photo,
      review,
    };
  };

  return (
    <div className="container mx-auto mt-10 md:mt-[125px] ">
      <Helmet>
        <title>Creative Campus || Pricing Table</title>
      </Helmet>

      <div className="md:mb-24 mx-5">
        <div className="flex flex-col  items-center">
          <h1 className="md:text-[48px] text-[28px] pricing-title ">
            Pricing Table
          </h1>
          <p className="  heading text-[16px] font-[400]  text-white text-center mt-2 md:mt-[20px] lg:w-[564px]">
            Here is our pricing table of representation of our websites to
            display different pricing options for products to our potential
            customers to compare and choose the option that best suits their
            needs and budget
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:mt-[98px] w-full lg:w-[1236px] mx-auto gap-3 mb-[240px]">
          {packages.map((product, index) => (
            <div
              key={index}
              className="price-card mt-5 md:mt-0 w-[280px]  mx-auto md:w-[287px] h-[900px]  md:h-[900px] shadow-md p-4 "
            >
              <h1 className="price-title heading text-center my-3 mb-[20px]">
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
                      fill="white"
                    />
                  </svg>
                  <p className="price-p mt-[10px] pragraph" key={lineIndex}>
                    {line}
                  </p>
                </div>
              ))}
              <p className="text-center md:mt-5">
                <span className="price">{product.price} </span>{" "}
                <span className="price-month">/{product.duration}</span>
              </p>
              <div className="flex justify-center items-center">
                <Link to={""}>
                  <button
                    className="buy-btn mt-[20px] pragraph  text-white"
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    Active Package
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box  !max-w-[850px] overflow-y-auto  shadow-none scale-x-0 -scale-y-0 -scale-0">
          <div className="flex justify-center mx-auto modal-card mb-8 mt-[40px] md:mt-[78px] ">
            <form
              onSubmit={handleSubmit}
              className="w-[full] container-review-card"
            >
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className=" absolute right-[2.35rem] mt-2 text-lg">
                  ✕
                </button>
              </form>
              <div className="mt-[65px] lg:w-full">
                <label className="text-white block font-[500] text-[16px] heading mb-[9px]">
                  Organization Name*
                </label>
                <input
                  type="tex"
                  className="w-full input  text-[14px] input-field   border-castom mb-[20px] "
                  placeholder="Organization Name"
                  // value={''}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 mt-[65px] lg:gap-[30px] gap-[20px]">
                <div className="mb-4 lg:w-[300px]">
                  <label className="text-white block font-[500] text-[16px] heading mb-[9px]">
                    Contact Person Name*
                  </label>
                  <input
                    type="tex"
                    className="w-full input  text-[14px] input-field   border-castom mb-[20px] "
                    placeholder="Contact Person Name"
                    // value={''}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 lg:w-[300px]">
                  <label className="text-white block font-[500] text-[16px] heading mb-[9px]">
                    Designation*
                  </label>
                  <input
                    type="tex"
                    className="w-full input  text-[14px] input-field   border-castom mb-[20px] "
                    placeholder="Designation"
                    // value={''}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 mt-[65px] lg:gap-[30px] gap-[20px]">
                <div className="mb-4 lg:w-[300px]">
                  <label className="text-white block font-[500] text-[16px] heading mb-[9px]">
                    Contact No*
                  </label>
                  <input
                    type="tex"
                    className="w-full input  text-[14px] input-field   border-castom mb-[20px] "
                    placeholder="Contact No"
                    // value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 lg:w-[300px]">
                  <label className="text-white block font-[500] text-[16px] heading mb-[9px]">
                    WhatsApp
                  </label>
                  <input
                    type="tex"
                    className="w-full input  text-[14px] input-field   border-castom mb-[20px] "
                    placeholder="WhatsApp"
                    // value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-[65px] lg:w-full">
                <label className="text-white block font-[500] text-[16px] heading mb-[9px]">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full input  text-[14px] input-field   border-castom mb-[20px] "
                  placeholder="Email"
                  // value={''}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 mt-[65px] lg:gap-[30px] gap-[20px]">
                <div className="mb-4 lg:w-[300px]">
                  <label className="text-white block font-[500] text-[16px] heading mb-[9px]">
                    Country*
                  </label>
                  <input
                    type="tex"
                    className="w-full input  text-[14px] input-field   border-castom mb-[20px] "
                    placeholder="Country"
                    // value={''}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 lg:w-[300px]">
                  <label className="text-white block font-[500] text-[16px] heading mb-[9px]">
                    City*
                  </label>
                  <input
                    type="tex"
                    className="w-full input  text-[14px] input-field   border-castom mb-[20px] "
                    placeholder="City"
                    // value={''}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mt-[65px] lg:w-full">
                <label className="text-white block font-[500] text-[16px] heading mb-[9px]">
                  Organization Address*
                </label>
                <input
                  type="Organization Address"
                  className="w-full input  text-[14px] input-field   border-castom mb-[20px] "
                  placeholder="Email"
                  // value={''}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 mt-[65px] lg:gap-[30px] gap-[20px]">
                <div className="mb-4 lg:w-[300px]">
                  <label className="text-white block font-[500] text-[16px] heading mb-[9px]">
                    Student Quantity*
                  </label>
                  <input
                    type="tex"
                    className="w-full input  text-[14px] input-field   border-castom mb-[20px] "
                    placeholder="Student Quantity"
                    // value={''}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="text-white block font-[500] text-[16px] heading mb-[9px]">
                  Choose Plan
                  </label>
                  <select className="select select-bordered border-castom !bg-[#302e2e] mix-blend-luminosity" required>
                    <option disabled selected>
                      Pick one
                    </option>
                    <option>Monthly Package</option>
                    <option>Half Yearly Package</option>
                    <option>Yearly Package</option>
                    <option>Lifetime Package</option>
                  </select>
                </div>
              </div>


              <div className="mb-4 mt-[32px]">
                <label className="text-white block mb-[9px] font-[500] text-[16px] heading">
                Descriptions
                </label>
                <textarea
                  className="w-full h-32 input-field input review-field border-castom text-white text-[14px] px-4"
                  placeholder="Descriptions"
                  // value={''}
                  onChange={(e) => setReview(e.target.value)}
                  required
                />
              </div>
              {/* Submit Button */}
              <div className="text-center mt-[60px]">
                <button
                  type="submit"
                  className="review-button text-white py-[11px] lg:px-[60px] font-[400] text-[14px]  font-[Poppins] mb-[60px]"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Pricing;
