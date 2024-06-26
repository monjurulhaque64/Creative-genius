import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import "./ContectUs.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactUs = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q0cwxq6",
        "template_ex1924u",
        formRef.current,
        "1J9PfIjlNDdL1bmif"
      )
      .then(
        (result) => {
          formRef.current.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Massage Sent Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="mt-4 md:mt-[125px] container mx-auto overflow-hidden mb-[20px] lg:mb-[0px]">
      <Helmet>
        <title>Creative Campus || Contact Us</title>
      </Helmet>
      <div className="mx-auto text-center h-[130px] md:h-[200px]">
        <h1 className="heading  font-[600] text-[28px] md:text-[48px] text-white">
          Contact Us
        </h1>
        <p className=" heading font-[400]  w-[300px] md:w-[500px] text-center mx-auto text-[15px] text-white md:mt-[20px]">
          Here's our contact details so visitors can get in touch with us on
          their first attempt.
        </p>
      </div>
      {/* <div className="contuct-circle-right"></div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="lg:mt-[130px] ml-4 lg:ml-0">
          {/* <div className="contuct-circle-left"></div> */}
          <h1 className="heading font-[600] heading text-[20px] md:text-[30px] text-white mb-[22px]">
            Get In Touch
          </h1>
          <p className="pragraph  font-[400] lg:w-[500px] !text-[16px] text-white mb-8 md:mb-[70px]">
            We're eager to hear from you! Feel free to reach out for inquiries,
            collaborations, or just to say hello.
          </p>

          <div className="mx-2 md:mx-0">
            <h3 className="heading  font-[600] heading text-[20px] text-white flex mb-[10px]">
              Head Office 
            </h3>
            <h3 className=" pragraph  font-[200]  text-[16px] text-white flex mb-[5px]">
              <span className="mr-2">
              <MdPhone size={20}></MdPhone>
            </span>
               +88 01332-393009
            </h3>
            <h3 className="  font-[200] pragraph text-[16px] text-white flex mb-[5px]">
              <span className="mr-2">
              <MdLocationOn size={20}></MdLocationOn>
            </span>
               Uttarkhan, Gazipara, Hashemgazi Road, Uttara Dhaka -
              1230.
            </h3>
          </div>
          <div className="my-6   mx-2 md:mx-0">
            <h3 className="heading  font-[600]  text-[20px] text-white flex mb-[10px]">
              Rangpur Branch
            </h3>
            <h3 className=" pragraph  font-[200]  text-[16px]  text-white flex mb-[5px]">
              <span className="mr-2">
              <MdPhone size={20}></MdPhone>
            </span>
               +88 01632-677577
            </h3>
            <h3 className="  font-[200] pragraph text-[16px]  text-white flex mb-[5px]">
              <span className="mr-2">
              <MdLocationOn size={20}></MdLocationOn>
            </span>
               Mahiganj, Rangpur - 5400.
            </h3>
          </div>
          <div className="mx-2 md:mx-0">
            <h3 className="heading  font-[600] heading text-[20px]  text-white flex mb-[10px]">
              Dinajpur Branch
            </h3>
            <h3 className=" pragraph  font-[200]  text-[16px] md:text-[16px] text-white flex mb-[5px]">
              <span className="mr-2">
              <MdPhone size={20}></MdPhone>
            </span>
               +88 01885-352802
            </h3>
            <h3 className="  font-[200] pragraph text-[16px] md:text-[16px] text-white flex  mb-[5px]">
              <span className="mr-2">
              <MdLocationOn size={20}></MdLocationOn>
            </span>
             M Abdur Rahim Medical Road, Dinajpur - 5200.
            </h3>
          </div>
        </div>
        <div className="form-container contect-container mt-[106px]">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label
                htmlFor="name"
                className="font-[500] heading  text-[16px] text-white mb-[9px]"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="!text-[#A0A0A0] !font-[500]  input border-opacity-0 bg-[#171717]  !heading !text-[14px]  mb-[20px]"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="email"
                className="font-[500] heading text-[16px] text-white mb-[9px]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="!text-[#A0A0A0] !font-[500] input border-opacity-0 bg-[#171717]  !heading !text-[14px]  mb-[20px]"
                placeholder="Enter Email Address"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="reason"
                className="font-[500] heading text-[16px] text-white mb-[9px]"
              >
                Reason
              </label>
              <input
                type="text"
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Reason"
                className="!text-[#A0A0A0] !font-[500] input border-opacity-0 bg-[#171717]  !heading !text-[14px]  mb-[20px]"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="message"
                className="font-[500] heading text-[16px] text-white mb-[9px]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write Your Message"
                className="!text-[#A0A0A0] border-castom h-32 !font-[500] input border-opacity-0 bg-[#302e2e]  !heading !text-[14px] mb-[30px]"
              />
            </div>
            <div className=" text-center ">
              <button
                className="contect-button border-[#374352] bg-[#2e3742]  font-[400] heading lg:px-[50px] text-[14px] text-white mb-[30px]"
                type="submit"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


