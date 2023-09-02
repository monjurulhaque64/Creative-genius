import React from "react";
import img1 from "../../../assets/Images/Group11.png";
import img2 from "../../../assets/Images/Group12.png";
import "./WorkProcess.css";

const WorkProcess = () => {
  return (
    <div className="container mx-auto mt-[200px]">
      <div className="flex justify-end">
        <div className="circle "></div>
      </div>
      <div className="circle "></div>
      <div className="mx-auto text-center h-[200px]">
        <h1 className="font-[Poppins] font-[600] text-[48px] text-white">
          Work Process
        </h1>
        <p className="font-[Poppins] font-[400] text-[18px] text-white">
          Work process can be a great way to learn more about how the company’s
          employees create value for their projects.
        </p>
      </div>
      <div className="flex gap-12 justify-center items-center">
        <div className="flex gap-6">
          <h1 className="w-[89px] h-[89px] bg-[#3C4FF8] rounded-full text-center flex justify-center items-center font-[Roboto] font-[700] text-white text-[30px] ">
            1
          </h1>
          <img className="w-[100px] h-[38px] mt-[40px]" src={img1} alt="" />
        </div>
        <div className="flex gap-6">
          <h1 className="w-[89px] h-[89px] bg-[#3C4FF8] rounded-full text-center flex justify-center items-center font-[Roboto] font-[700] text-white text-[30px] ">
            2
          </h1>
          <img className="w-[100px] h-[38px] mt-[40px]" src={img2} alt="" />
        </div>
        <div className="flex gap-6">
          <h1 className="w-[89px] h-[89px] bg-[#3C4FF8] rounded-full text-center flex justify-center items-center font-[Roboto] font-[700] text-white text-[30px] ">
            3
          </h1>
          <img className="w-[100px] h-[38px] mt-[40px]" src={img1} alt="" />
        </div>
        <div className="flex gap-6">
          <h1 className="w-[89px] h-[89px] bg-[#3C4FF8] rounded-full text-center flex justify-center items-center font-[Roboto] font-[700] text-white text-[30px] ">
            4
          </h1>
          <img className="w-[100px] h-[38px] mt-[40px]" src={img2} alt="" />
        </div>
        <div className="flex gap-6">
          <h1 className="w-[89px] h-[89px] bg-[#3C4FF8] rounded-full text-center flex justify-center items-center font-[Roboto] font-[700] text-white text-[30px] ">
            5
          </h1>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center my-8">
        <div className="w-[250px]">
          <h1 className="text-center font-[Poppins] font-[400] text-[32px] text-white">
            Strategy
          </h1>
          <p className="text-center font-[Poppins] font-[400] text-[18px] text-white mt-4">
            We make a strategy with a general set of plans to achieve your
            company’s goals.
          </p>
        </div>
        <div className="w-[250px]">
          <h1 className="text-center font-[Poppins] font-[400] text-[32px] text-white">
            Research
          </h1>
          <p className="text-center font-[Poppins] font-[400] text-[18px] text-white mt-4">
            We do research to know more about the topic, collect data from
            organizations, and analyze them for better understanding.
          </p>
        </div>
        <div className="w-[250px]">
          <h1 className="text-center font-[Poppins] font-[400] text-[32px] text-white">
            Design
          </h1>
          <p className="text-center font-[Poppins] font-[400] text-[18px] text-white mt-4">
            We design our projects based on our research and to fulfill our
            client’s requirements.
          </p>
        </div>
        <div className="w-[250px]">
          <h1 className="text-center font-[Poppins] font-[400] text-[32px] text-white">
            Development
          </h1>
          <p className="text-center font-[Poppins] font-[400] text-[18px] text-white mt-4">
            We start developing the project with the highest possible quality to
            ensure value for your potential customers.
          </p>
        </div>
        <div className="w-[250px]">
          <h1 className="text-center font-[Poppins] font-[400] text-[32px] text-white">
            Deliver
          </h1>
          <p className="text-center font-[Poppins] font-[400] text-[18px] text-white mt-4">
            We deliver your desirable projects to you with more care and
            determination.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
