import React, { useState } from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import "./FAQ.css"
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

  const divClass = isAccordionOpen && 'bg-[#3C4FF8]';
  const divClass1 = isAccordionOpen1 && 'bg-[#3C4FF8]';
  const divClass2 = isAccordionOpen2 && 'bg-[#3C4FF8]';
  const divClass3 = isAccordionOpen3 && 'bg-[#3C4FF8]';
  const divClass4 = isAccordionOpen4 && 'bg-[#3C4FF8]';
  const divClass5 = isAccordionOpen5 && 'bg-[#3C4FF8]';



  return (
    <div className="container mx-auto mt-16 md:mt-[180px]">
      <div className="mx-auto text-center md:h-[200px]">
        <h1 className="heading font-[600] text-[38px] md:text-[48px] text-white">
          Frequently Ask Question
        </h1>
        <p className="pragraph w-[300px] md:w-[650px] text-center mx-auto  font-[400] text-[18px] mt-[17px] text-white">
          There are some collections of the most common questions and brief,
          easy-to-understand answers about a particular product, service, or
          topic.
        </p>
      </div>
      <Accordion>
        <div className='flex  items-center md:gap-6  gap-3 md:w-1/2  faq-card  md:mb-10'>
          <div className={`border-2 mt-6 relative border-gray-700 rounded-[50%] p-4 ${divClass} `}>1</div>
          {/* <div className=" line1 h-20  lg:mt-[160px] hidden lg:block border-[1px] border-blue-700 rotate-180 border-solid  absolute"></div> */}

          <AccordionItem
            className="collapse  p-3 text-2xl shadow-xl lg:w-[604px] mt-6 rounded-md border-[1px] border-[#8a8a8a]"
            header="What is your company’s goal?"
            onClick={toggleAccordion}
          >
            <p className='text-[15px] mt-2 text-white heading font-[400] text-justify'>
              Our company’s goal is to fulfill client's or customer’s satisfaction, financial gain, growth, and employee development..
            </p>
          </AccordionItem>
        </div>
        <div className='flex  items-center md:gap-6  gap-3 md:w-1/2  faq-card  md:mb-10'>
          <div className={`border-2 mt-6 relative border-gray-700 rounded-[50%] p-4 ${divClass1}`}>2</div>
            {/* <div className="line1 hidden lg:block  lg:mt-[160px] h-20 border-[1px] border-blue-700 rotate-180 border-solid  absolute"></div> */}

          <AccordionItem
            className="collapse  p-3 text-2xl shadow-xl lg:w-[604px] mt-6 rounded-md border-[1px] border-[#8a8a8a]"
            header=" What is the target of digital marketing for your company?"
            onClick={toggleAccordion1}
          >
            <p className='text-[15px] mt-2 text-white heading font-[400] text-justify'>
            In our company digital marketing is a multifaceted strategy aimed to target, reach out to, and build relationships with customers online, across a broad range of channels, ultimately getting them to make a purchase and more purchases in the future.

            </p>
          </AccordionItem>
        </div>




        <div className='flex items-center md:gap-6  gap-3 md:w-1/2  faq-card md:mb-10'>
          <div className={`border-2 relative mt-6 border-gray-700 rounded-[50%] p-4 ${divClass2}`}>3</div>
          {/* <div className="line1 hidden lg:block  lg:mt-[150px]  h-16  border-[1px] border-blue-700 rotate-180 border-solid  absolute"></div> */}

          <AccordionItem className="collapse border-2 mt-6  p-3    text-2xl bg-[rgba(34, 34, 34, 0.80)] shadow-xl lg:w-[604px]  mt-6 rounded-md border-[1px] border-[#8a8a8a]"
            header="What are the services of your company?"
            onClick={toggleAccordion2}>
            <p className='text-[15px] mt-2 text-white heading font-[400] text-justify'>
              Web development features, advanced mobile app application,
              Marketing services, graphic or website designs for websites,
              logos, advertisements and other promotional content for companies
              to increase public interest
            </p>
          </AccordionItem>
        </div>



        <div className='flex items-center md:gap-6  gap-3 md:w-1/2  faq-card md:mb-10'>
          <div className={`border-2 relative mt-6 border-gray-700 rounded-[50%] p-4 ${divClass3}`}>4</div>
          {/* <div className="line1 hidden lg:block  lg:mt-[150px] h-16 border-[1px] border-blue-700 rotate-180 border-solid  absolute"></div> */}

          <AccordionItem className="collapse border-2 mt-6  p-3   text-2xl bg-[rgba(34, 34, 34, 0.80)] shadow-xl lg:w-[604px]  mt-6 rounded-md border-[1px] border-[#8a8a8a]" 
          header="  How long does a project take? "
          onClick={toggleAccordion3}
          >

            <p className='text-[15px] mt-2 text-white heading font-[400] text-justify'> Typically, an average project will take in the region of three –
              four months. Some of our projects are small, fully specified and
              are completed in four – six weeks. Others can take six months or
              much longer ‐ it all depends on the complexity and scope of the
              project, and whether revisions, including additional
              functionality, has been made to the original brief.</p>
          </AccordionItem>
        </div>


        <div className='flex items-center md:gap-6  gap-3 md:w-1/2  faq-card md:mb-10'>
          <div className={`border-2 relative mt-6 border-gray-700 rounded-[50%] p-4 ${divClass4}`}>5</div>
          {/* <div className="line1 hidden lg:block  lg:mt-[150px] h-16 border-[1px] border-blue-700 rotate-180 border-solid  absolute"></div> */}

          <AccordionItem className="collapse border-2 mt-6  p-3    text-2xl bg-[rgba(34, 34, 34, 0.80)] shadow-xl lg:w-[604px]  mt-6 rounded-md border-[1px] border-[#8a8a8a]"
          onClick={toggleAccordion4}
           header="  How do you create content for your clients?">
            <p className='text-[15px] mt-2 text-white heading font-[400] text-justify'>  It's a great idea to make a content strategy framework first. Take
              this as our blueprint—it will contain all the details of what,
              when, where, and why that will inform and guide the content
              creation process. As an added bonus, this can help us stay on
              track by setting a content creation.</p>
          </AccordionItem>
        </div>


        <div className='flex items-center md:gap-6  gap-3 md:w-1/2  faq-card '>
          <div className={`border-2  mt-6 border-gray-700 rounded-[50%] p-4 ${divClass5}`}>6</div>

          <AccordionItem className="collapse border-2 mt-6  p-3    text-2xl bg-[rgba(34, 34, 34, 0.80)] shadow-xl lg:w-[604px]  mt-6 rounded-md border-[1px] border-[#8a8a8a]"
          header="  What are the qualities of a successful team?"
          onClick={toggleAccordion5}
          >
            <p className='text-[15px] mt-2 text-white heading font-[400] text-justify'>  It's a great idea to make a content strategy framework Always be on the lookout for leaders, even when you’re not hiring
                for a management position. And individuals frequently have to take
                responsibility for delivering projects, and this requires
                leadership skills such as organization, motivation, positive
                thinking, delegation and communication.</p>
          </AccordionItem>
        </div>



      </Accordion>
    </div>
  );
};

export default Fwq;
