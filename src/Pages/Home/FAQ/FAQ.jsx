const FAQ = () => {
  return (
    <div className="container mx-auto mt-[200px]">
      <div className="mx-auto text-center h-[200px]">
        <h1 className="font-[Poppins] font-[600] text-[48px] text-white">
          Frequently Ask Question
        </h1>
        <p className="font-[Poppins] font-[400] text-[18px] text-white">
          There are some collections of the most common questions and brief,
          easy-to-understand answers about a particular product, service, or
          topic.
        </p>
      </div>
      <div >
        <div className="collapse collapse-plus bg-[#404040] w-[604px] mt-6 rounded-md border-[1px] border-[#8a8a8a]">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-[24px] text-white font-[Poppins] font-[400]">
            What is your company’s goal?
          </div>
          <div className="collapse-content">
            <p className="text-[18px] text-white font-[Poppins] font-[400]">
              Our company’s goal is to fulfill client's or customer’s
              satisfaction, financial gain, growth and employee development.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#404040] w-[604px] mt-6 rounded-md border-[1px] border-[#8a8a8a]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-[24px] text-white font-[Poppins] font-[400]">
            What is the target of digital marketing for your company?
          </div>
          <div className="collapse-content">
            <p className="text-[18px] text-white font-[Poppins] font-[400]">
              In our company digital marketing is a multifaceted strategy aimed
              to target, reach out to, and build relationships with customers
              online, across a broad range of channels, ultimately getting them
              to make a purchase and more purchases in the future.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#404040] w-[604px] mt-6 rounded-md border-[1px] border-[#8a8a8a]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-[24px] text-white font-[Poppins] font-[400]">
            what are the services of your company?
          </div>
          <div className="collapse-content">
            <p className="text-[18px] text-white font-[Poppins] font-[400]">
              Web development features, advanced mobile app application,
              Marketing services, graphic or website designs for websites,
              logos, advertisements and other promotional content for companies
              to increase public interest
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#404040] w-[604px] mt-6 rounded-md border-[1px] border-[#8a8a8a]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-[24px] text-white font-[Poppins] font-[400]">
            How long does a project take.?
          </div>
          <div className="collapse-content">
            <p className="text-[18px] text-white font-[Poppins] font-[400]">
              Typically, an average project will take in the region of three –
              four months. Some of our projects are small, fully specified and
              are completed in four – six weeks. Others can take six months or
              much longer ‐ it all depends on the complexity and scope of the
              project, and whether revisions, including additional
              functionality, has been made to the original brief.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#404040] w-[604px] mt-6 rounded-md border-[1px] border-[#8a8a8a]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-[24px] text-white font-[Poppins] font-[400]">
            How do you create content for your clients?
          </div>
          <div className="collapse-content">
            <p className="text-[18px] text-white font-[Poppins] font-[400]">
              It's a great idea to make a content strategy framework first. Take
              this as our blueprint—it will contain all the details of what,
              when, where, and why that will inform and guide the content
              creation process. As an added bonus, this can help us stay on
              track by setting a content creation.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#404040] w-[604px] mt-6 rounded-md border-[1px] border-[#8a8a8a]">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-[24px] text-white font-[Poppins] font-[400]">
            What are the qualities of a successful team?
          </div>
          <div className="collapse-content">
            <p className="text-[18px] text-white font-[Poppins] font-[400]">
              Always be on the lookout for leaders, even when you’re not hiring
              for a management position. And individuals frequently have to take
              responsibility for delivering projects, and this requires
              leadership skills such as organization, motivation, positive
              thinking, delegation and communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
