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
        formRef.current, // Use formRef instead of form
        "XloRTSZt0TbtYT7Nq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(formData);
  };
  return (
    <div className="mt-[40px] md:mt-[125px] container mx-auto mb-[20px] lg:mb-[0px]">
      <Helmet>
        <title>Creative Campus || Contact Us</title>
      </Helmet>
      <div className="mx-auto text-center h-[130px] md:h-[200px]">
        <h1 className="heading font-[600] text-[28px] md:text-[48px] text-white">
          Contact Us
        </h1>
        <p className="heading font-[400] text-[14px] md:text-[18px] text-white mt-[20px]">
          Here's our contact details so visitors can get in touch with us on
          their first attempt.
        </p>
      </div>
      <div className="contuct-circle-right"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="lg:mt-[255px] ml-4 lg:ml-0">
        <div className="contuct-circle-left"></div>
          <h1 className="heading font-[600] text-[28px] text-white mb-[22px]">
            Get In Touch
          </h1>
          <p className="heading  font-[400] text-[14px] md:text-[18px] text-white mb-[70px]">
            We're eager to hear from you! Feel free to reach out for inquiries,
            collaborations, or just to say hello.
          </p>
          <h3 className="heading w-[271px] font-[500] text-[18px] text-white flex mb-[30px]">
            <span className="mr-2">
              <MdLocationOn size={30}></MdLocationOn>
            </span>
            Mirpur, Dhaka, Bangladesh
          </h3>
          <h3 className="heading w-[271px] font-[500] text-[18px] text-white flex mb-[30px]">
            <span className="mr-2">
              <MdPhone size={30}></MdPhone>
            </span>
            +880123456789
          </h3>
          <h3 className="heading w-[271px] font-[500] text-[18px] text-white flex mb-[30px]">
            <span className="mr-2">
              <MdEmail size={30}></MdEmail>
            </span>
            info@creativec-ampus.com
          </h3>
        </div>
        <div className="form-container contect-container mt-[106px]">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="!text-white"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="!text-white"
                placeholder="Enter Email Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="reason">Reason</label>
              <input
                type="text"
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Reason"
                className="!text-white"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Text Your Message"
                className="!text-white"
              />
            </div>
            <button className="contect-button" type="submit">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
