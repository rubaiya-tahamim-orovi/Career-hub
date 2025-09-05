import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  // this is not the best way to load the show all data.
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mt-14">
      <div className="text-center space-y-4 md:px-0 px-5">
        <h2 className="text-4xl font-bold">Featured Jobs</h2>
        <p className="text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-14 mb-5 md:px-0 px-5">
        {
            jobs.slice(0, dataLength).map(job => <Job job={job}></Job>)
        }
      </div>
      <div className={dataLength === jobs.length ? 'hidden' : ''}>
       <button
       onClick={() => setDataLength(jobs.length)}
        className="btn md:ml-[525px] ml-[200px] mb-10 py-6 px-5 bg-gradient-to-r from-[#7E90FE]  to-[#9873FF] text-white font-bold">See all jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
