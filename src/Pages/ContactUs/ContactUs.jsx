import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import "./ContectUs.css";
import emailjs from "@emailjs/browser";


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
        "service_87yggjg",
        "template_3jfmzwq",
        formRef.current, 
        "XloRTSZt0TbtYT7Nq"
      )
      .then(
        (result) => {
      formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="mt-4 md:mt-[125px] container mx-auto mb-[20px] lg:mb-[0px]">
      <Helmet>
        <title>Creative Campus || Contact Us</title>
      </Helmet>
      <div className="mx-auto text-center h-[130px] md:h-[200px]">
        <h1 className="heading  font-[600] text-[28px] md:text-[48px] text-white">
          Contact Us
        </h1>
        <p className="heading font-[400]  w-[300px] md:w-[650px] text-center mx-auto text-[16px] text-white md:mt-[20px]">
          Here's our contact details so visitors can get in touch with us on
          their first attempt.
        </p>
      </div>
      <div className="contuct-circle-right"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="lg:mt-[255px] ml-4 lg:ml-0">
        <div className="contuct-circle-left"></div>
          <h1 className="heading font-[600] heading text-[20px] md:text-[30px] text-white mb-[22px]">
            Get In Touch
          </h1>
          <p className="heading  font-[400] text-[14px] md:text-[20px] text-white mb-8 md:mb-[70px]">
            We're eager to hear from you! Feel free to reach out for inquiries,
            collaborations, or just to say hello.
          </p>
          <h3 className="heading  font-[500] heading text-[14px] md:text-[20px] text-white flex mb-5 md:mb-[31px]">
            <span className="mr-2">
              <MdLocationOn size={30}></MdLocationOn>
            </span>
            Mirpur, Dhaka, Bangladesh
          </h3>
          <h3 className="heading  font-[500] heading text-[14px] md:text-[20px] text-white flex mb-5 md:mb-[30px]">
            <span className="mr-2">
              <MdPhone size={30}></MdPhone>
            </span>
            +880123456789
          </h3>
          <h3 className="heading  font-[500] heading text-[14px] md:text-[20px] text-white flex  mb-8 md:mb-[30px]">
            <span className="mr-2">
              <MdEmail size={30}></MdEmail>
            </span>
            info@creativec-ampus.com
          </h3>
        </div>
        <div className="form-container contect-container mt-[106px]">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="font-[500] heading text-[14px] md:text-[20px] text-white mb-[9px]">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="!text-[#A0A0A0] !font-[500] !heading !text-[14px] !md:text-[16px] !hover:border-[#A0A0A0] mb-[20px]"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="font-[500] heading text-[14px] md:text-[20px] text-white mb-[9px]">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="!text-[#A0A0A0] !font-[500] !heading !text-[14px] !md:text-[16px] mb-[20px]"
                placeholder="Enter Email Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="reason" className="font-[500] heading text-[14px] md:text-[20px] text-white mb-[9px]">Reason</label>
              <input
                type="text"
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Reason"
                className="!text-[#A0A0A0] !font-[500] !heading !text-[14px] !md:text-[16px] mb-[20px]"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="font-[500] heading text-[14px] md:text-[20px] text-white mb-[9px]">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Text Your Message"
                className="!text-[#A0A0A0] !font-[500] !heading !text-[16px] mb-[30px]"
              />
            </div>
            <button className="contect-button font-[500] heading text-[20px] text-white mb-[30px]" type="submit">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
