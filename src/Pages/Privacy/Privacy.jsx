import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="container mx-auto mt-[72px]">
      <Helmet>
        <title>Creative Campus || Privacy Policy</title>
      </Helmet>
      <div className="my-8 m-2 p-8 lg:m-0 shadow-xl">
        <div className="my-2">
          <h1 className="font-[Poppins] font-[600] text-[48px] text-[#ff0000] ">
            Privacy Policy
          </h1>
          <p className="font-[Poppins] font-[400] text-[18px] text-black ">
            Updated: September 7, 2023
          </p>
          <p className="font-[Poppins] font-[400] text-[18px] text-black">
            At Creative Campus, we are committed to safeguarding your privacy.
            This Privacy Policy explains how we collect, use, and protect your
            personal information. By using our website and services, you consent
            to the practices described in this policy.
          </p>
        </div>

        <div className="my-4 mt-8">
          <h2 className="font-[Poppins] font-[600] text-[30px] text-black">
            Information We Collect:
          </h2>
          <h3 className="font-[Poppins] font-[600] text-[20px] text-black">
            We may collect the following types of information:
          </h3>
          <p className="font-[Poppins] font-[400] text-[18px] text-black ">
            <span className="font-[600]">Personal Information:</span> Your name,
            email address, and contact details when you register, place an
            order, or contact us.
          </p>
          <p className="font-[Poppins] font-[400] text-[18px] text-black ">
            <span className="font-[600]">Usage Information:</span> Data on how
            you interact with our website, such as pages visited, device
            information, and IP address.
          </p>
        </div>

        <div className="my-4 mt-8">
          <h2 className="font-[Poppins] font-[600] text-[30px] text-black">
            How We Use Your Information:
          </h2>
          <h3 className="font-[Poppins] font-[600] text-[20px] text-black">
            We use your information for the following purposes:
          </h3>
          <p className="font-[Poppins] font-[400] text-[18px] text-black ">
            <span className="font-[600]">Providing Services:</span> To fulfill
            orders, respond to inquiries, and offer customer support.
          </p>
          <p className="font-[Poppins] font-[400] text-[18px] text-black ">
            <span className="font-[600]">Improving Our Website:</span> Analyzing
            usage data helps us enhance our website and tailor content to your
            interests.
          </p>
          <p className="font-[Poppins] font-[400] text-[18px] text-black ">
            <span className="font-[600]">Marketing:</span> With your consent, we
            may send you promotional materials or updates about our services.
          </p>
          <h3 className="font-[Poppins] font-[600] text-[20px] text-black">
            Data Security:
          </h3>
          <p className="font-[Poppins] font-[400] text-[18px] text-black ">
            We take data security seriously and employ industry-standard
            measures to protect your information. However, no online
            transmission or storage is entirely secure.
          </p>
          <h3 className="font-[Poppins] font-[600] text-[20px] text-black">
            Data Sharing:
          </h3>
          <p className="font-[Poppins] font-[400] text-[18px] text-black ">
            We do not share your personal information with third parties for
            their marketing purposes. We may share data with service providers
            who assist us in delivering our services.
          </p>
          <h3 className="font-[Poppins] font-[600] text-[20px] text-black">
            Your Choices:
          </h3>
          <p className="font-[Poppins] font-[400] text-[18px] text-black ">
            You can access, correct, or delete your personal information. You
            may also opt out of marketing communications
          </p>
          <h3 className="font-[Poppins] font-[600] text-[20px] text-black">
            Changes to this Policy:
          </h3>
          <p className="font-[Poppins] font-[400] text-[18px] text-black ">
            We may update this Privacy Policy to reflect changes in our
            practices or legal requirements. We encourage you to review this
            policy periodically.
          </p>
          <h3 className="font-[Poppins] font-[600] text-[20px] text-black">
            Contact Us:
          </h3>
          <p className="font-[Poppins] font-[400] text-[18px] text-black ">
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at{" "}
            <Link to={"/contact-us"}>
              <span className="link link-hover font-[Poppins] font-[600] text-[18px] text-[#ff0000]">
                Contact Information
              </span>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
