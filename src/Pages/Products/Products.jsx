import React from "react";
import iphone12Dark from "../../assets/Images/iPhone12FontView.png";
import iphone12Lignt from "../../assets/Images/iPhone12FontWhiteView.png.png";
import { FaGooglePlay } from "react-icons/fa";

import "./Products.css";
import Reviews from "../Home/Reviews/Reviews";
import { Helmet } from "react-helmet-async";

const Products = () => {
  return (
    <div className="container mx-auto mt-[72px]">
      <Helmet>
        <title>Creative Campus || Products</title>
      </Helmet>
      <div className="mx-auto text-center h-[100px] ">
        <h1 className="font-[Poppins] font-[600] text-[48px] text-black">
          Our Products
        </h1>
        <p className="font-[Poppins] font-[400] text-[18px] text-black">
          Here are some products of our company to make your life comfortable
          through technology.
        </p>
      </div>
      <div className="w-full h-[300px] lg:h-[600px] md:h-[500px] relative]">
        <div className="flex justify-between">
          <div className="lg:ml-[100px] ml-8  lg:w-[726px] w-[250px] lg:pt-[250px] pt-[50px] ">
            <h1 className="lg:text-[64px] text-[34px] font-[Saira Stencil One] font-bold text-black">
              Learning Campus
            </h1>
            <p className="font-[Poppins] text-[17px] text-black text-justify font-medium mt-2">
              The future of digital learning technology in teaching and
              learning.
            </p>
            <button className="btn btn-info bg-[#3C4FF8] mt-[46px] lg:mr-[100px] text-black">
              Download App{" "}
              <span>
                <FaGooglePlay></FaGooglePlay>
              </span>
            </button>
          </div>
          <div className="flex lg:mr-[250px] mr-[100px] ml-4 lg:pt-[192px] pt-[102px] lg:gap-12 ">
            <img src={iphone12Dark} alt="" />
            <img src={iphone12Lignt} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-[200px]">
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Products;
