import React from "react";
import logo from "../../assets/Images/Logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 text-base-content">
        <div className="ml-[80px]">
          <img className="w-[148px] h-[51px] " src={logo} alt="logo" />
          <p className="mt-6 font-medium text-white">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor <br /> incididunt
          </p>
        </div>
        <div>
          <span className=" text-white text-2xl font-bold mb-8 ">About</span>
          <a className="link link-hover text-white text-lg font-medium mb-2">
            Home
          </a>
          <a className="link link-hover text-white text-lg font-medium mb-2">
            About Us
          </a>
          <a className="link link-hover text-white text-lg font-medium mb-2">
            Products
          </a>
          <a className="link link-hover text-white text-lg font-medium mb-2">
            Pricing Table
          </a>
          <a className="link link-hover text-white text-lg font-medium mb-2">
            Contact Us
          </a>
          <a className="link link-hover text-white text-lg font-medium">
            Client Says
          </a>
        </div>
        <div>
          <span className="text-white text-2xl font-bold mb-8 ">Privacy</span>
          <a className="link link-hover text-white text-lg font-medium mb-2">
            Privacy
          </a>
          <a className="link link-hover text-white text-lg font-medium mb-2">
            Policy
          </a>
          <a className="link link-hover text-white text-lg font-medium mb-2">
            Payment
          </a>
          <a className="link link-hover text-white text-lg  font-medium">
            Terms
          </a>
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
            <button className="btn btn-info bg-[#3C4FF8] text-xl text-white mr-2">
              {" "}
              <FaInstagram></FaInstagram>
            </button>
            <button className="btn btn-info bg-[#3C4FF8] text-xl text-white mr-2">
              {" "}
              <FaLinkedinIn></FaLinkedinIn>
            </button>
            <button className="btn btn-info bg-[#3C4FF8] text-xl text-white mr-2">
              {" "}
              <FaFacebookF></FaFacebookF>
            </button>
            <button className="btn btn-info bg-[#3C4FF8] text-xl text-white">
              {" "}
              <FaTwitter></FaTwitter>
            </button>
          </div>
        </div>
      </footer>
      <hr className="bg-[#3F3F3F] lg:mr-32 lg:ml-28" />
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col lg:ml-[90px]">
          <p className="font-medium text-white">
            © Copyright 2023 <span className="font-bold">Creative Campus</span>.
            All rights reserved.
          </p>
        </div>
        <div className="grid-flow-col gap-4 lg:mr-28 md:place-self-center  md:justify-self-end ">
          <a className="link link-hover text-white text-lg font-medium">
            Contact Us
          </a>
          <a className="link link-hover text-white text-lg font-medium">
          Terms
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
