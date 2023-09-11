import React from "react";
import logo from "../../assets/Images/Logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="container mx-auto footer p-7 text-base-content mt-[120px]">
        <div className="lg:ml-[80px] ml-[0px]">
          <img className="w-[148px] " src={logo} alt="logo" />
          <p className="mt-6 text-[14px] font-[400] heading text-white">
            The future of digital learning technology <br /> in teaching and
            learning.
          </p>
        </div>
        <div>
          <span className=" text-white text-[30px] font-[700] heading mb-[51px] ">About</span>
          <Link to={"/"}>
            <span className="link link-hover text-white text-[14px]font-[400] heading  mb-[16px]">
              Home
            </span>
          </Link>
          <Link to={"/about"}>
            {" "}
            <span className="link link-hover text-white text-[14px]font-[400] heading  mb-[16px]">
              About Us
            </span>
          </Link>
          <Link to={"/products"}>
            {" "}
            <span className="link link-hover text-white text-[14px]font-[400] heading  mb-[16px]">
              Products
            </span>
          </Link>
          <Link to={"/pricing"}>
            {" "}
            <span className="link link-hover text-white text-[14px]font-[400] heading  mb-[16px]">
              Pricing Table
            </span>
          </Link>
          <Link to={"/client-says"}>
            <span className="link link-hover text-white text-[14px]font-[400] heading  mb-[16px]">
              Client Says
            </span>
          </Link>
          <Link to={"/contact-us"}>
            {" "}
            <span className="link link-hover text-white text-[14px]font-[400] heading  mb-[16px]">
              Contact Us
            </span>
          </Link>
        </div>
        <div>
          <span className="text-white text-[30px] font-[700] heading mb-[51px] ">Privacy</span>
          <Link to={"/privacy"}>
            <span className="link link-hover text-white text-[14px]font-[400] heading  mb-[16px]">
              Privacy Policy
            </span>
          </Link>
          <Link to={"/payment"}>
            <span className="link link-hover text-white text-[14px]font-[400] heading  mb-[16px]">
              Payment
            </span>
          </Link>
          <Link to={"/terms"}>
            <span className="link link-hover text-white text-[14px]font-[400] heading  mb-[16px]">
              Terms and conditions
            </span>
          </Link>
        </div>
        <div>
          <span className="text-white text-[30px] font-[700] heading mb-[51px] ">
            Contact Us
          </span>
          <a className=" text-white text-[14px]font-[400] heading  mb-[16px]">
            +880123456789
          </a>
          <a className=" text-white text-[14px]font-[400] heading  mb-[16px]">
            info@creativec-ampus.com
          </a>
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
      </footer>
      <hr className="bg-[#000000] container mx-auto lg:w-[1340px]" />
      <footer className="footer container mx-auto items-center p-4 bg-neutral text-neutral-content mb-[84px]">
        <div className="items-center grid-flow-col lg:ml-[90px]">
          <p className="link link-hover text-white text-[14px]font-[400] heading  mb-[16px]">
            © Copyright 2023 <span className="font-bold">Creative Campus</span>.
            All rights reserved.
          </p>
        </div>
        <div className="grid-flow-col gap-4 lg:mr-28 md:place-self-center  md:justify-self-end ">
          <Link to={"/contact-us"}>
            <a className="link link-hover text-white text-[14px]font-[400] heading  mb-[16px]">
              Contact Us
            </a>
          </Link>
          <Link to={"/terms"}>
            <span className="link link-hover text-white text-[14px]font-[400] heading  mb-[16px]">
              Terms and conditions
            </span>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
