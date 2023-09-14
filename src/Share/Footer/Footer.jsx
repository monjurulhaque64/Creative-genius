import React from "react";
import logo from "../../assets/Logo - white.png";
import { Link } from "react-router-dom";
import {  MdPhone, MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import './footer.css'



function getCurrentYear() {
  return new Date().getFullYear();
}

const Footer = () => {
 
  
  return (
    <div className="">
      <footer className="container lg:w-[1245px]  mx-auto p-4 lg:p-0 lg:mb-6 text-base-content mt-[160px]">
        <div className="lg:flex">
        <div className="flex flex-col lg:w-[500px]">
          <img className="w-[148px] " src={logo} alt="logo" />
          <p className="mt-6 text-[14px] font-[400] lg:w-[320px]  text-justify pragraph text-white">
          At Creative Campus, we believe in
                using innovative approaches to help our clients. Our experienced
                professionals are dedicated to providing exceptional service
                according to your needs.
          </p>
        </div>
        <div className="lg:flex  justify-between  gap-6 lg:w-[700px]">
        <div className="flex flex-col lg:mb-0 mb-2">
          <span className=" text-white text-[30px] font-[700] heading mb-[5px] md:mb-[10px] ">About</span>
          <Link to={"/"}>
            <span className=" text-white text-[14px] font-[400] font-and-line  mb-[5px]">
              Home
            </span>
          </Link>
          <Link to={"/about"}>
            {" "}
            <span className=" text-white text-[14px] font-[400] font-and-line  mb-[5px]">
              About Us
            </span>
          </Link>
          <Link to={"/products"}>
            {" "}
            <span className=" text-white text-[14px] font-[400] font-and-line  mb-[5px]">
              Products
            </span>
          </Link>
          <Link to={"/pricing"}>
            {" "}
            <span className=" text-white text-[14px] font-[400] font-and-line  mb-[5px]">
              Pricing Table
            </span>
          </Link>
          <Link to={"/client-says"}>
            <span className=" text-white text-[14px] font-[400] font-and-line  mb-[5px]">
              Client Says
            </span>
          </Link>
          <Link to={"/contact-us"}>
            {" "}
            <span className=" text-white text-[14px] font-[400] font-and-line  mb-[5px]">
              Contact Us
            </span>
          </Link>
        </div>
        <div className="flex flex-col lg:mb-0 mb-2">
          <span className="text-white text-[30px] font-[700] heading mb-[5px] md:mb-[10px] ">Privacy</span>
          <Link to={"/privacy"}>
            <span className=" text-white text-[14px]font-[400] font-and-line  mb-[5px]">
              Privacy Policy
            </span>
          </Link>
          <Link to={"/payment"}>
            <span className=" text-white text-[14px]font-[400] font-and-line  mb-[5px]">
              Payment
            </span>
          </Link>
          <Link to={"/terms"}>
            <span className=" text-white text-[14px]font-[400] font-and-line  mb-[5px]">
              Terms and conditions
            </span>
          </Link>
        </div>
        <div className="flex flex-col lg:mb-0 mb-2">
          <span className="text-white text-[30px] font-[700] heading mb-[5px] md:mb-[10px] ">
            Contact Us
          </span>
          <div className=" text-white flex text-[14px] font-[400] font-and-line  mb-[5px]">
          <span className="mr-2">
              <MdPhone size={20}></MdPhone>
            </span>
            +88 01332-393009 (Head Office)
          </div>
          <div className=" text-white flex text-[14px] font-[400] font-and-line  mb-[5px]">
          <span className="mr-2">
              <MdPhone size={20}></MdPhone>
            </span>
            +88 01632-677577 (Rangpur Branch)
          </div>
          <div className=" text-white flex text-[14px] font-[400] font-and-line  mb-[5px]">
          <span className="mr-2">
              <MdPhone size={20}></MdPhone>
            </span>
            +88 01885-352802 (Dinajpur Branch)
          </div>
          <div className=" text-white flex text-[14px] font-[400] font-and-line  mb-[5px]">
          <span className="mr-2">
              <MdEmail size={20}></MdEmail>
            </span>
            info@creativec-ampus.com
          </div>
          <div className=" mt-4">
            <button className="icon-btn mr-2">
              {" "}
              <FaInstagram></FaInstagram>
            </button>
            <button className="icon-btn mr-2">
              {" "}
              <FaLinkedinIn></FaLinkedinIn>
            </button>
            <button className="icon-btn mr-2">
              {" "}
              <FaFacebookF></FaFacebookF>
            </button>
            <button className="icon-btn">
              {" "}
              <FaTwitter></FaTwitter>
            </button>
          </div>
        </div>
        </div>
        </div>
      </footer>
      <div className="hr-line container mx-auto w-full lg:w-[1245px]" />
      
      <footer className="footer container mx-auto items-center lg:w-[1236px] p-4 lg:p-0 bg-neutral text-neutral-content mb-[84px] mt-2 lg:mt-[30px]">
      <div className="items-center grid-flow-col ">
        <p className="text-white text-[14px] font-[400] pragraph mb-[16px]">
          &copy;  {getCurrentYear()} All rights reserved By<span className="font-bold spans">Creative Campus</span>. .
        </p>
      </div>
      <div className="grid-flow-col gap-4  md:place-self-center  md:justify-self-end">
        <Link to={"/contact-us"}>
          <p className="text-white text-[14px] font-[400] pragraph mb-[16px]">
            Contact Us
          </p>
        </Link>
        <Link to={"/terms"}>
          <span className="text-white text-[14px] font-[400] pragraph mb-2 md:mb-[16px]">
            Terms and conditions
          </span>
        </Link>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
