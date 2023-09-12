import React from "react";
import "./OurServices.css";
import { FaBrain, FaEdit, FaFileVideo, FaLaptopCode, FaReact, FaVideo } from "react-icons/fa";


const OurServices = () => {
  return (
    <div className="md:mt-[190px]  mt-16 container mx-auto">
      <div className="mx-auto text-center h-[80px] md:h-[200px]">
        <h1 className="heading font-[600] text-[38px] md:text-[48px] text-white">
          Our Services
        </h1>
        <p className="heading font-[400] text-[16px] mt-[17px] text-white">
          Here are our services to provide the best quality of work for your
          needs.
        </p>
      </div>
      <div className="background-overlay"></div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 w-full lg:w-[1236px] mx-auto gap-3 mt-[118px] ">
        <div className="card ">
          <div className="card-content my-2">
            <h2 className="card-title font mb-3 ">Web Development</h2>
            <p className="card-description   pragraph  ">
              We work with our clients' preferences. We provide user-friendly,
              responsive websites. Our responsibility is to create a website
              that is capable of fulfilling your demands.
            </p>
          </div>
          <span className="card-icon"> <FaReact></FaReact> </span>
        </div>
        <div className="card">
          <div className="card-content my-2">
            <h2 className="card-title mb-3 font">Apps Development</h2>
            <p className="card-description   pragraph ">
              We built apps to put you ahead with the latest trends. Our app
              development service will give you a convenient platform to
              communicate with brands and businesses.
            </p>
          </div>
          <span className="card-icon"><FaLaptopCode></FaLaptopCode></span>
        </div>
        <div className="card">
          <div className="card-content my-2">
            <h2 className="card-title mb-3 font">Graphics Design</h2>
            <p className="card-description   pragraph ">
              We are here for you to help you deliver messages in the most
              impactful way with the graphic design. We will ensure you to
              attract your targeted audience and make your website more
              appealing to them.
            </p>
          </div>
          <span className="card-icon card-icon2"><FaEdit></FaEdit></span>
        </div>
        <div className="card">
          <div className="card-content my-2">
            <h2 className="card-title mb-3 pragraph">Video Content Creating</h2>
            <p className="card-description   pragraph ">
              Our video content creation service will help you to make a
              trustable environment for your website visitors. It will give you
              the ultimate level of content flexibility for your brand and your
              customers as well.
            </p>
          </div>
          <span className="card-icon"><FaVideo></FaVideo></span>
        </div>
        <div className="card">
          <div className="card-content my-2">
            <h2 className="card-title mb-3 font">Motion Graphics</h2>
            <p className="card-description   pragraph ">
              We will provide you with an engaging way to simplify complex
              information and make that quickly understandable to your audience
              through motion graphics. It will help you to increase conversions
              and create a loyal audience that trusts your brand.
            </p>
          </div>
          <span className="card-icon"><FaFileVideo></FaFileVideo></span>
        </div>
        <div className="card ">
          <div className="card-content my-2">
            <h2 className="card-title mb-3 !font">Digital Marketing</h2>
            <p className="card-description   pragraph ">
              We are here with our digital marketing services that can lead to
              improvements in your sales and in your business growth. We are
              determined to make sure to fulfill your company’s wider goals and
              ambitions.
            </p>
          </div>
          <span className="card-icon "><FaBrain></FaBrain></span>
        </div>
      </div>
    
    </div>
  );
};

export default OurServices;
