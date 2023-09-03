import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import "./ContectUs.css";

const ContactUs = () => {
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
    // Handle form submission here (e.g., send data to a server)
    console.log(formData);
  };
  return (
    <div className="mt-[72px] container mx-auto">
      <Helmet>
        <title>Creative Campus || Contact Us</title>
      </Helmet>
      <div className="mx-auto text-center h-[200px]">
        <h1 className="font-[Poppins] font-[600] text-[48px] text-white">
          Contact Us
        </h1>
        <p className="font-[Poppins] font-[400] text-[18px] text-white">
          Here's our contact details so visitors can get in touch with us on
          their first attempt.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="lg:mt-[255px] ml-4 lg:ml-0">
          <div className="circle"></div>
          <h1 className="font-[Poppins] font-[600] text-[30px] text-white mb-[22px]">
            Get In Touch
          </h1>
          <p className="font-[Poppins]  font-[400] text-[18px] text-white mb-[70px]">
            We're eager to hear from you! Feel free to reach out for inquiries,
            collaborations, or just to say hello.
          </p>
          <h3 className="font-[Poppins] w-[271px] font-[500] text-[18px] text-white flex mb-[30px]">
            <span className="mr-2">
              <MdLocationOn size={30}></MdLocationOn>
            </span>
            Mirpur, Dhaka, Bangladesh
          </h3>
          <h3 className="font-[Poppins] w-[271px] font-[500] text-[18px] text-white flex mb-[30px]">
            <span className="mr-2">
              <MdPhone size={30}></MdPhone>
            </span>
            +880123456789
          </h3>
          <h3 className="font-[Poppins] w-[271px] font-[500] text-[18px] text-white flex mb-[30px]">
            <span className="mr-2">
              <MdEmail size={30}></MdEmail>
            </span>
            info@creativec-ampus.com
          </h3>
        </div>
        <div className="form-container contect-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
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