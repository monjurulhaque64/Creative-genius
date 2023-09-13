import React, { useState } from "react";
import {Collapse} from 'react-collapse';
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import "./FAQ.css";
const Fwq = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isAccordionOpen1, setIsAccordionOpen1] = useState(false);
  const [isAccordionOpen2, setIsAccordionOpen2] = useState(false);
  const [isAccordionOpen3, setIsAccordionOpen3] = useState(false);
  const [isAccordionOpen4, setIsAccordionOpen4] = useState(false);
  const [isAccordionOpen5, setIsAccordionOpen5] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  const toggleAccordion1 = () => {
    setIsAccordionOpen1(!isAccordionOpen1);
  };
  const toggleAccordion2 = () => {
    setIsAccordionOpen2(!isAccordionOpen2);
  };
  const toggleAccordion3 = () => {
    setIsAccordionOpen3(!isAccordionOpen3);
  };
  const toggleAccordion4 = () => {
    setIsAccordionOpen4(!isAccordionOpen4);
  };

  const toggleAccordion5 = () => {
    setIsAccordionOpen5(!isAccordionOpen5);
  };

  const divClass = isAccordionOpen && "bg-[#FF1200] border-none";
  const divClass1 = isAccordionOpen1 && "bg-[#FF1200] border-none";
  const divClass2 = isAccordionOpen2 && "bg-[#FF1200] border-none";
  const divClass3 = isAccordionOpen3 && "bg-[#FF1200] border-none";
  const divClass4 = isAccordionOpen4 && "bg-[#FF1200] border-none";
  const divClass5 = isAccordionOpen5 && "bg-[#FF1200] border-none";

  return (
    <div className="container mx-auto mt-16 md:mt-[180px]">
      <div className="mx-auto text-center md:h-[200px]">
        <h1 className="heading font-[600] text-[38px] md:text-[48px] text-white">
          Frequently Ask Question
        </h1>
        <p className="font w-[300px] md:w-[650px] text-center mx-auto  font-[400] text-[16px] mt-[17px] text-white">
          There are some collections of the most common questions and brief,
          easy-to-understand answers about a particular product, service, or
          topic.
        </p>
      </div>
      <Accordion>
        <div className="flex  items-center md:gap-6  gap-3 lg:w-[680px]    faq-card  md:mb-10">
          <div
            className={`border-[1px] mt-6 relative border-[#9F9F9F] text-[14px] font-[600] flex w-[75px] h-[65px] rounded-[50%] justify-center text-center items-center ${divClass} `}
          >
            01
          </div>
          {/* <div className=" line1 h-[88px] !ml-[25px]  lg:mt-[167px] hidden lg:block border-[1px] border-[#747474] rotate-180 border-solid  absolute"></div> */}

          <AccordionItem isOpened={isAccordionOpen}
            className="collapse   p-3 md:text-[24px]  text-[20px] shadow-xl lg:w-[700px] mt-6 rounded-md border-[1px] border-[#8a8a8a]"
            header={
              <div className="flex items-center justify-between lg:gap-[42px] gap-[1px]">
                <h1 className='justify-start font text-[18px]  text-justify lg:w-[500px] font-[500]'>What is your company’s goal?</h1>
              <i
                className={`fa ${isAccordionOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                style={{ marginRight: '8px' }}
              ></i>
            </div>
            }
            onClick={toggleAccordion}
          >
            <p className="  text-[16px]     mt-2 text-white pragraph font-[400] text-justify">
              Our company’s goal is to fulfill client's or customer’s
              satisfaction, financial gain, growth, and employee development..
            </p>
          </AccordionItem>
        </div>
        <div className="flex  items-center md:gap-6  gap-3 lg:w-[700px]    faq-card  md:mb-10">
          {/* <div className=" line1 h-[188px] !ml-[25px]  lg:mt-[167px] hidden lg:block border-[1px] border-[#747474] rotate-180 border-solid  absolute"></div> */}
          <div
            className={`border-[1px] mt-6 relative border-[#9F9F9F] text-[14px] font-[600] flex w-[65px] h-[65px] rounded-[50%] justify-center text-center items-center ${divClass1}`}
          >
            02
          </div>

          <AccordionItem
            className="collapse  p-3 md:text-[24px]  text-[20px] shadow-xl lg:w-[604px] mt-6 rounded-md border-[1px] border-[#8a8a8a]"
            header={
              <div className="flex items-center justify-between md:gap-[42px] gap-[1px]">
                <h1 className="justify-start text-justify font text-[18px] lg:w-[500px] font-[500]">
                  What is the target of digital marketing for your company?
                </h1>

                <i
                  className={`fa ${
                    isAccordionOpen1 ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                  style={{ marginRight: "8px" }}
                ></i>
              </div>
            }
            onClick={toggleAccordion1}
          >
            <p className="  text-[16px]     mt-2 text-white pragraph font-[400] text-justify">
              In our company digital marketing is a multifaceted strategy aimed
              to target, reach out to, and build relationships with customers
              online, across a broad range of channels, ultimately getting them
              to make a purchase and more purchases in the future.
            </p>
          </AccordionItem>
        </div>




        <div className='flex items-center md:gap-6  gap-3 md:w-[700px]    faq-card md:mb-10'>
          <div className={`border-[1px] relative mt-6 border-[#9F9F9F] text-[14px] font-[600] flex w-[65px] h-[65px] rounded-[50%] justify-center text-center items-center ${divClass2}`}>03</div>
          {/* <div className=" line1 h-[72px] !ml-[25px]  lg:mt-[152px] hidden lg:block border-[1px] border-[#747474] rotate-180 border-solid  absolute"></div> */}

          <AccordionItem className="collapse border-1 mt-6  p-3    md:text-[24px]  text-[20px] bg-[rgba(34, 34, 34, 0.80)] shadow-xl lg:w-[604px]  mt-6 rounded-md border-[1px] border-[#8a8a8a]"
          
              header={
              <div className="flex items-center justify-between lg:gap-[42px] gap-[1px]">
                <h1 className='justify-start font text-[18px] text-justify lg:w-[500px] font-[500]'>What are the services of your company?</h1>
              <i
                className={`fa ${isAccordionOpen2 ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                style={{ marginRight: '8px', }}
              ></i>
            </div>
            }
            onClick={toggleAccordion2}
          >
            <p className="  text-[15px] md:text-[16px]     mt-2 text-white pragraph font-[400] text-justify">
              Web development features, advanced mobile app application,
              Marketing services, graphic or website designs for websites,
              logos, advertisements and other promotional content for companies
              to increase public interest
            </p>
          </AccordionItem>
        </div>

        <div className="flex items-center md:gap-6  gap-3 md:w-[700px]    faq-card md:mb-10">
          <div
            className={`border-[1px] relative mt-6 border-[#9F9F9F] text-[14px] font-[600] flex w-[65px] h-[65px] rounded-[50%] justify-center text-center items-center ${divClass3}`}
          >
            04
          </div>
          {/* <div className=" line1 h-[72px] !ml-[25px]  lg:mt-[152px] hidden lg:block border-[1px] border-[#747474] rotate-180 border-solid  absolute"></div> */}

          <AccordionItem className="collapse border-1 mt-6  p-3   md:text-[24px]  text-[20px] bg-[rgba(34, 34, 34, 0.80)] shadow-xl lg:w-[604px]  mt-6 rounded-md border-[1px] border-[#8a8a8a]" 
          
             header={
              <div className="flex items-center justify-between lg:gap-[42px] gap-3">
                <h1 className='justify-start font text-[18px] lg:w-[500px] text-justify font-[500]'>How long does a project take?</h1>
               
              <i
                className={`fa ${isAccordionOpen3 ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                style={{ marginRight: '8px' }}
              ></i>
            </div>
            }
            onClick={toggleAccordion3}
          >
            <p className="  text-[15px] md:text-[16px]     mt-2 text-white pragraph font-[400] text-justify">
              {" "}
              Typically, an average project will take in the region of three –
              four months. Some of our projects are small, fully specified and
              are completed in four – six weeks. Others can take six months or
              much longer ‐ it all depends on the complexity and scope of the
              project, and whether revisions, including additional
              functionality, has been made to the original brief.
            </p>
          </AccordionItem>
        </div>

        <div className="flex items-center md:gap-6  gap-3 md:w-[700px]    faq-card md:mb-10">
          <div
            className={`border-[1px] relative mt-6 border-[#9F9F9F] text-[14px] font-[600] flex w-[65px] h-[65px] rounded-[50%] justify-center text-center items-center ${divClass4}`}
          >
            05
          </div>
          {/* <div className=" line1 h-[88px] !ml-[25px]  lg:mt-[167px] hidden lg:block border-[1px] border-[#747474] rotate-180 border-solid  absolute"></div> */}

          <AccordionItem className="collapse border-1 mt-6  p-3    md:text-[24px]  text-[20px] bg-[rgba(34, 34, 34, 0.80)] shadow-xl lg:w-[604px]  mt-6 rounded-md border-[1px] border-[#8a8a8a]"
          
             header={
              <div className="flex items-center justify-between lg:gap-[42px] gap-3">
                <h1 className='justify-start font text-[18px] text-justify lg:w-[500px] font-[500]'>How do you create content for your clients?</h1>
               
              <i
                className={`fa ${isAccordionOpen4 ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                style={{ marginRight: '8px' }}
              ></i>
            </div>
            }
            onClick={toggleAccordion4}
          >
            <p className="  text-[15px] md:text-[16px]     mt-2 text-white pragraph font-[400] text-justify">
              {" "}
              It's a great idea to make a content strategy framework first. Take
              this as our blueprint—it will contain all the details of what,
              when, where, and why that will inform and guide the content
              creation process. As an added bonus, this can help us stay on
              track by setting a content creation.
            </p>
          </AccordionItem>
        </div>

        <div className="flex items-center md:gap-6  gap-3 md:w-[700px]    faq-card ">
          <div
            className={`border-[1px] mt-6 relative  border-[#9F9F9F] text-[14px] font-[600] flex w-[65px] h-[65px] rounded-[50%] justify-center text-center items-center  ${divClass5}`}
          >
            06
          </div>

          <AccordionItem
            className="collapse border-1 mt-6  p-3    md:text-[24px]  text-[20px] bg-[rgba(34, 34, 34, 0.80)] shadow-xl lg:w-[604px]  mt-6 rounded-md border-[1px] border-[#8a8a8a]"
            header={
              <div className="flex items-center justify-between text-justify lg:gap-[42px] gap-3">
                <h1 className="justify-start text-justify font text-[18px] lg:w-[500px] font-[500]">
                  What are the qualities of a successful team?
                </h1>

                <i
                  className={`fa ${
                    isAccordionOpen5 ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                  style={{ marginRight: "8px" }}
                ></i>
              </div>
            }
            onClick={toggleAccordion5}
          >
            <p className="text-[15px] mt-2 text-white pragraph font-[400] text-justify">
              {" "}
              It's a great idea to make a content strategy framework Always be
              on the lookout for leaders, even when you’re not hiring for a
              management position. And individuals frequently have to take
              responsibility for delivering projects, and this requires
              leadership skills such as organization, motivation, positive
              thinking, delegation and communication.
            </p>
          </AccordionItem>
        </div>
      </Accordion>
    </div>
  );
};

export default Fwq;
