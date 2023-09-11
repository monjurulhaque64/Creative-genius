import React from "react";
import { Helmet } from "react-helmet-async";
import './payment.css'

const Payment = () => {
  return (
    <div className="container mx-auto mt-[72px] mb-6">
      <Helmet>
        <title>Creative Campus || Payment</title>
      </Helmet>
      <div className="my-8 m-2 p-8 lg:m-0 shadow-xl rounded-lg">
        <div className="my-2">
          <h1 className="font font-[600] text-[48px] text-[#3C4FF8] ">
            Payment
          </h1>
          <p className="font font-[400] text-[16px] text-white ">
            Updated: September 7, 2023
          </p>
        </div>

        <div className="my-8 mt-8 font font-[400] text-[16px] text-white text-justify">
          <p>
            Welcome to Creative Campus Payment Center! We've crafted our payment
            section to provide you with a seamless and secure payment
            experience. Whether you're purchasing our products, settling bills,
            or subscribing to our services, you can trust that your transactions
            are in safe hands.
          </p>
          <p className=" mt-4">
            Our user-friendly interface ensures swift and hassle-free payments,
            saving your time and effort. At Creative Campus, your financial
            security is our top priority, and we utilize the latest encryption
            technology to protect your data.
          </p>
          <p className=" mt-4">
            Join the countless satisfied customers who have entrusted us with
            their financial transactions and experience the peace of mind that
            comes with knowing your money is handled with care.
          </p>
          <p className=" mt-4">
            Choose Creative Campus for your payments and discover a world of
            convenience, reliability, and security. Thank you for making us your
            trusted partner for all your financial needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
