import React from "react";

const Banner = () => {
  return (
    <div className="md:flex items-center md:px-0 px-5 mt-5">
      <div className="space-y-4 md:text-start text-center">
        <h2 className="text-5xl font-semibold">
          One Step Closer To Your
          
          <span className=" ml-2 bg-gradient-to-r from-[#7E90FE]  to-[#9873FF] text-transparent bg-clip-text">
            Dream Job
          </span>
        </h2>
        <p className="text-[#474747]">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="bg-gradient-to-r from-[#7E90FE]  to-[#9873FF] px-4 py-2 rounded-md text-white font-bold">Get Started</button>
      </div>

      <div>
        <img src="https://i.ibb.co/rK95mcNx/user.png" alt="not found" />
      </div>
    </div>
  );
};

export default Banner;
