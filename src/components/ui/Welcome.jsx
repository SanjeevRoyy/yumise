import React from "react";

const Welcome = () => {
  return (
    <div className="mt-10 flex ">
      <img src="assets/images/welcome.png" width={600} alt="welcome" />
      <div className="p-10">
        <h1
          className="
  text-[#951B81] 
  font-poppins 
  text-[30px] 
  font-bold 
  text-nowrap

"
        >
          WELCOME TO YUMISE CONSULTANCY
        </h1>

        <p className="text-[#272727] font-poppins text-[16px] font-normal leading-[30px]">
          Connecting World with Human power Consultancy can encompass various
          fields and industries. It typically involves providing expert advice,
          guidance, or solutions to individuals, businesses, or organizations
          seeking specialized knowledge or assistance. Consultants leverage
          their expertise, experience, and analytical skills to help clients
          solve problems, improve performance, make strategic decisions, or
          achieve specific goals. <br /> <br /> Consultancies can exist in
          numerous sectors, such as management, finance, technology, marketing,
          healthcare, and more. They might offer services like strategy
          development, process improvement, project management, market research,
          or specialized expertise in a particular niche.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
