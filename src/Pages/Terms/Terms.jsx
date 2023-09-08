import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="container mx-auto mt-[72px] mb-6">
      <Helmet>
        <title>Creative Campus || Terms and conditions</title>
      </Helmet>
      <div className="my-8 m-2 p-8 lg:m-0 shadow-xl rounded-lg">
        <div className="my-2">
          <h1 className="font-[Poppins] font-[600] text-[48px] text-[#ff0000] ">
            Terms and conditions
          </h1>
          <p className="font-[Poppins] font-[400] text-[18px] text-white ">
            Updated: September 7, 2023
          </p>
          <p className="font-[Poppins] font-[400] text-[18px] text-white text-justify">
            Welcome to Creative Campus. Before you use our products and
            services, please take a moment to review the following Terms and
            Conditions carefully. By accessing or using any of our offerings,
            you agree to comply with and be bound by these terms. If you do not
            agree with these terms, please refrain from using our services
          </p>
        </div>

        <div className="my-4 mt-8">
          <h2 className="font-[Poppins] font-[600] text-[30px] text-white">
            Acceptance of Terms
          </h2>
          <p className="font-[Poppins] font-[400] text-[18px] text-white text-justify">
            By accessing and using our services, you acknowledge that you have
            read, understood, and agreed to these Terms and Conditions. These
            terms may be updated from time to time, and your continued use
            constitutes acceptance of any changes.
          </p>
        </div>
        <div className="my-4 mt-8">
          <h2 className="font-[Poppins] font-[600] text-[30px] text-white">
            Use of Services
          </h2>
          <p className="font-[Poppins] font-[400] text-[18px] text-white text-justify">
            You may use our services for personal or business purposes, provided
            you adhere to all applicable laws and regulations. You are
            responsible for maintaining the security of your account credentials
            and agree not to engage in any unauthorized activities on our
            platform.
          </p>
        </div>
        <div className="my-4 mt-8">
          <h2 className="font-[Poppins] font-[600] text-[30px] text-white">
            Privacy
          </h2>
          <p className="font-[Poppins] font-[400] text-[18px] text-white text-justify">
            We are committed to protecting your privacy. Our Privacy Policy
            outlines how we collect, use, and disclose your personal
            information. By using our services, you consent to our data
            practices as described in the Privacy Policy.
          </p>
        </div>
        <div className="my-4 mt-8">
          <h2 className="font-[Poppins] font-[600] text-[30px] text-white">
            Intellectual Property
          </h2>
          <p className="font-[Poppins] font-[400] text-[18px] text-white text-justify">
            All content, trademarks, and intellectual property on our platform
            are owned or licensed by us. You may not use, reproduce, or
            distribute any of our intellectual property without our explicit
            consent
          </p>
        </div>
        <div className="my-4 mt-8">
          <h2 className="font-[Poppins] font-[600] text-[30px] text-white">
            Liability
          </h2>
          <p className="font-[Poppins] font-[400] text-[18px] text-white text-justify">
            We strive to provide accurate and reliable services, but we are not
            liable for any loss, damage, or inconvenience resulting from the use
            of our services. You use our services at your own risk.
          </p>
        </div>
        <div className="my-4 mt-8">
          <h2 className="font-[Poppins] font-[600] text-[30px] text-white">
            Termination
          </h2>
          <p className="font-[Poppins] font-[400] text-[18px] text-white text-justify">
            We reserve the right to terminate or suspend your access to our
            services at our discretion, without notice, for any violation of
            these Terms and Conditions.
          </p>
        </div>
        <div className="my-4 mt-8">
          <h2 className="font-[Poppins] font-[600] text-[30px] text-white">
            Governing Law
          </h2>
          <p className="font-[Poppins] font-[400] text-[18px] text-white text-justify">
            These Terms and Conditions are governed by and construed in
            accordance with the laws of [Your Jurisdiction]. Any disputes
            arising from these terms will be subject to the exclusive
            jurisdiction of the courts in [Your Jurisdiction].
          </p>
        </div>
        <div className="my-4 mt-8">
          <p className="font-[Poppins] font-[400] text-[18px] text-white ">
            Thank you for choosing Creative Campus. If you have any questions or
            concerns about these terms, please contact us at
            <Link to={"/contact-us"}>
              <span className="link link-hover font-[Poppins] font-[600] text-[18px] text-[#ff0000] ml-1">
                Creative Campus
              </span>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
