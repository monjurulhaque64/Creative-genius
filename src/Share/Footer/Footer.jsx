import React from "react";
import logo from "../../assets/Images/Logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 text-base-content mt-[184px]">
        <div className="lg:ml-[80px] ml-[0px]">
          <img className="w-[148px] " src={logo} alt="logo" />
          <p className="mt-6 font-medium text-white">
            The future of digital learning technology <br /> in teaching and
            learning.
          </p>
        </div>
        <div>
          <span className=" text-white text-2xl font-bold mb-8 ">About</span>
          <Link to={"/"}>
            <span className="link link-hover text-white text-lg font-medium mb-2">
              Home
            </span>
          </Link>
          <Link to={"/about"}>
            {" "}
            <span className="link link-hover text-white text-lg font-medium mb-2">
              About Us
            </span>
          </Link>
          <Link to={"/products"}>
            {" "}
            <span className="link link-hover text-white text-lg font-medium mb-2">
              Products
            </span>
          </Link>
          <Link to={"/pricing"}>
            {" "}
            <span className="link link-hover text-white text-lg font-medium mb-2">
              Pricing Table
            </span>
          </Link>
          <Link to={"/client-says"}>
            <span className="link link-hover text-white text-lg font-medium">
              Client Says
            </span>
          </Link>
          <Link to={"/contact-us"}>
            {" "}
            <span className="link link-hover text-white text-lg font-medium mb-2">
              Contact Us
            </span>
          </Link>
        </div>
        <div>
          <span className="text-white text-2xl font-bold mb-8 ">Privacy</span>
          <Link to={"/privacy"}>
            <span className="link link-hover text-white text-lg font-medium mb-2">
              Privacy Policy
            </span>
          </Link>
          <Link to={"/payment"}>
            <span className="link link-hover text-white text-lg font-medium mb-2">
              Payment
            </span>
          </Link>
          <Link to={"/terms"}>
            <span className="link link-hover text-white text-lg  font-medium">
              Terms and conditions
            </span>
          </Link>
        </div>
        <div>
          <span className="text-white text-2xl font-bold mb-8 ">
            Contact Us
          </span>
          <a className="link link-hover text-white text-lg font-medium mb-2">
            +880123456789
          </a>
          <a className="link link-hover text-white text-lg font-medium mb-2">
            info@creativec-ampus.com
          </a>
          <div className=" mt-4">
            <button className="btn btn-info bg-[#ff0000] hover:bg-[#f35454] border-[#ff0000] text-xl text-white mr-2">
              {" "}
              <FaInstagram></FaInstagram>
            </button>
            <button className="btn btn-info bg-[#ff0000] hover:bg-[#f35454] border-[#ff0000] text-xl text-white mr-2">
              {" "}
              <FaLinkedinIn></FaLinkedinIn>
            </button>
            <button className="btn btn-info bg-[#ff0000] hover:bg-[#f35454] border-[#ff0000] text-xl text-white mr-2">
              {" "}
              <FaFacebookF></FaFacebookF>
            </button>
            <button className="btn btn-info bg-[#ff0000] hover:bg-[#f35454] border-[#ff0000] text-xl text-white">
              {" "}
              <FaTwitter></FaTwitter>
            </button>
          </div>
        </div>
      </footer>
      <hr className="bg-[#000000] lg:mr-32 lg:ml-28" />
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col lg:ml-[90px]">
          <p className="font-medium text-white">
            © Copyright 2023 <span className="font-bold">Creative Campus</span>.
            All rights reserved.
          </p>
        </div>
        <div className="grid-flow-col gap-4 lg:mr-28 md:place-self-center  md:justify-self-end ">
          <Link to={"/contact-us"}>
            <a className="link link-hover text-white text-lg font-medium">
              Contact Us
            </a>
          </Link>
          <Link to={"/terms"}>
            <span className="link link-hover text-white text-lg  font-medium">
              Terms and conditions
            </span>
          </Link>u
        </div>
      </footer>
    </div>
  );
};

export default Footer;
