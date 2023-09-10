import React from "react";
import img1 from "../../../assets/Images/Group11.png";
import img2 from "../../../assets/Images/Group12.png";
import "./WorkProcess.css";

const WorkProcess = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="container mx-auto mt-[127px]">
      <div className="flex justify-end">
        <div className="circle "></div>
      </div>
      <div className=" left-circle "></div>
      <div className="mx-auto text-center h-[200px]">
        <h1 className="heading font-[600] text-[48px] text-white">
          Work Process
        </h1>
        <p className="heading font-[400] mt-[17px] text-[18px] text-white">
          Work process can be a great way to learn more about how the company’s
          employees create value for their projects.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 mx-auto gap-12 text-center justify-center items-center max-w-full mt-[95px]">
        <div className="flex mx-auto">
          <div className="w-[250px] ">
            <h1 className=" w-[89px] h-[89px] bg-[#3C4FF8] rounded-full text-center flex justify-center items-center font-[Roboto] font-[700] text-white text-[30px] mx-auto">
              1
            </h1>
            <h1 className="text-center heading font-[400] text-[32px] text-white">
              Strategy
            </h1>
            <p className="text-center  heading font-[400] text-[18px] text-white mt-3">
              We make a strategy with a general set of plans to achieve your
              company’s goals.
            </p>
          </div>
          {/* Conditional rendering for the SVG */}
          {isMobile ? null : (
            <div className="my-[8%] mx-auto">
              <svg
                width="104"
                height="43"
                viewBox="0 0 104 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.57001 4.32202C1.57001 20.5161 36.5121 26.1474 47.6165 27.3041C64.1242 29.0236 85.5758 25.5889 97.9464 13.2183"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M66.4594 1.71289C66.4594 6.83465 77.2415 10.0704 81.0221 11.0746C87.0769 12.6829 92.6972 11.0746 98.5454 11.0746C99.975 11.0746 102.39 9.55797 101.706 11.1546C100.456 14.0713 98.0259 16.8073 96.545 19.7162C92.9402 26.7971 90.2238 32.5668 90.2238 40.6001"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="flex mx-auto">
          <div className="w-[250px] ">
            <h1 className=" w-[89px] h-[89px] bg-[#3C4FF8] rounded-full text-center flex justify-center items-center font-[Roboto] font-[700] text-white text-[30px] mx-auto">
              2
            </h1>
            <h1 className="text-center heading font-[400] text-[32px] text-white">
              Research
            </h1>
            <p className="text-center heading font-[400] text-[18px] text-white mt-10">
              We do research to know more about the topic, collect data from
              organizations, and analyze them for better understanding.
            </p>
          </div>
          {/* Conditional rendering for the SVG */}
          {isMobile ? null : (
            <div className="my-[8%] mx-auto">
              <svg
                width="97"
                height="40"
                viewBox="0 0 97 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 35.6898C2 20.6511 34.4491 15.4216 44.7613 14.3474C60.0912 12.7506 80.0124 15.9403 91.5003 27.4282"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M62.2598 38.1128C62.2598 33.3565 72.2726 30.3516 75.7835 29.419C81.4064 27.9254 86.6257 29.419 92.0566 29.419C93.3842 29.419 95.6271 30.8274 94.9917 29.3447C93.8309 26.6361 91.5741 24.0953 90.1989 21.3939C86.8513 14.8182 84.3287 9.46019 84.3287 2.00002"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="flex mx-auto">
          <div className="w-[250px] ">
            <h1 className=" w-[89px] h-[89px] bg-[#3C4FF8] rounded-full text-center flex justify-center items-center font-[Roboto] font-[700] text-white text-[30px] mx-auto">
              3
            </h1>
            <h1 className="text-center heading font-[400] text-[32px] text-white">
              Design
            </h1>
            <p className="text-center heading font-[400] text-[18px] text-white mt-4">
              We design our projects based on our research and to fulfill our
              client’s requirements.
            </p>
          </div>
          {/* Conditional rendering for the SVG */}
          {isMobile ? null : (
            <div className="my-[8%] mx-auto">
              <svg
                width="104"
                height="43"
                viewBox="0 0 104 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.57001 4.32202C1.57001 20.5161 36.5121 26.1474 47.6165 27.3041C64.1242 29.0236 85.5758 25.5889 97.9464 13.2183"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M66.4594 1.71289C66.4594 6.83465 77.2415 10.0704 81.0221 11.0746C87.0769 12.6829 92.6972 11.0746 98.5454 11.0746C99.975 11.0746 102.39 9.55797 101.706 11.1546C100.456 14.0713 98.0259 16.8073 96.545 19.7162C92.9402 26.7971 90.2238 32.5668 90.2238 40.6001"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="flex mx-auto">
          <div className="w-[250px] ">
            <h1 className=" w-[89px] h-[89px] bg-[#3C4FF8] rounded-full text-center flex justify-center items-center font-[Roboto] font-[700] text-white text-[30px] mx-auto">
              4
            </h1>
            <h1 className="text-center heading font-[400] text-[32px] text-white">
              Development
            </h1>
            <p className="text-center heading font-[400] text-[18px] text-white mt-4">
              We start developing the project with the highest possible quality
              to ensure value for your potential customers.
            </p>
          </div>
          {/* Conditional rendering for the SVG */}
          {isMobile ? null : (
            <div className="my-[8%] mx-auto">
              <svg
                width="97"
                height="40"
                viewBox="0 0 97 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 35.6898C2 20.6511 34.4491 15.4216 44.7613 14.3474C60.0912 12.7506 80.0124 15.9403 91.5003 27.4282"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M62.2598 38.1128C62.2598 33.3565 72.2726 30.3516 75.7835 29.419C81.4064 27.9254 86.6257 29.419 92.0566 29.419C93.3842 29.419 95.6271 30.8274 94.9917 29.3447C93.8309 26.6361 91.5741 24.0953 90.1989 21.3939C86.8513 14.8182 84.3287 9.46019 84.3287 2.00002"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="flex mx-auto">
          <div className="w-[250px] ">
            <h1 className=" w-[89px] h-[89px] bg-[#3C4FF8] rounded-full text-center flex justify-center items-center font-[Roboto] font-[700] text-white text-[30px] mx-auto">
              5
            </h1>
            <h1 className="text-center heading font-[400] text-[32px] text-white">
              Deliver
            </h1>
            <p className="text-center heading font-[400] text-[18px] text-white mt-4">
              We deliver your desirable projects to you with more care and
              determination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
