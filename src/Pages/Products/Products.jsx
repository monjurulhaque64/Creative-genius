import React from "react";
import iphone12Dark from "../../assets/Images/iPhone12FontView.png";
import iphone12Lignt from "../../assets/Images/iPhone12FontWhiteView.png.png";
import { FaGooglePlay } from "react-icons/fa";

import "./Products.css";
import Reviews from "../Home/Reviews/Reviews";
import { Helmet } from "react-helmet-async";

const Products = () => {
  return (
    <div className="container mx-auto mt-[40px] md:mt-[98px]">
      <Helmet>
        <title>Creative Campus || Products</title>
      </Helmet>
      <div className="mx-auto text-center h-[80px] md:h-[100px] ">
        <h1 className="heading font-[600] text-[28px] md:text-[48px] text-white">
          Our Products
        </h1>
        <p className="pragraph font-[400] w-[300px] md:w-[650px] text-center mx-auto text-[14px] md:text-[18px] text-white mt-[20px]">
          Here are some products of our company to make your life comfortable
          through technology.
        </p>
      </div>
      <div className="w-full h-[400px] lg:h-[600px] md:h-[500px] relative">
        <div className="md:flex justify-between">
          <div className="lg:ml-[100px] ml-8  lg:w-[726px] w-[250px] lg:pt-[250px] pt-[50px] ">
            <h1 className="lg:text-[48px] text-[24px] heading font-[600] text-white">
              Learning Campus
            </h1>
            <p className="pragrah text-[13px] text-white text-justify font-[400] mt-[20px]">
              The future of digital learning technology in teaching and learning.
            </p>
            <button className="product-btn mt-[14px] lg:mr-[100px] text-white">
              Download App{" "}
              <span>
                <FaGooglePlay></FaGooglePlay>
              </span>
            </button>
          </div>
          
          <div className="flex lg:mr-[250px]  mr-[100px] ml-8 lg:pt-[192px] pt-[25px] lg:gap-12 gap-10">
            <img className="lg:w-[264px] h-[180px]  md:h-full w-[200px]" src={iphone12Dark} alt="" />
            <div className="product-circle"></div>
            <img className="lg:w-[264px]  h-[180px] md:h-full w-[200px]" src={iphone12Lignt} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-[70px] md:mt-[194px]">
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Products;
