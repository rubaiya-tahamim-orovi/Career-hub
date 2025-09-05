import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredJobApplication } from "../../Utility/localStorage";
import ApplyJobSec from "../ApplyJobSec/ApplyJobSec";
import { IoIosArrowDown } from "react-icons/io";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFiter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find(job => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <h2 className="text-3xl font-bold mt-7 mb-20 text-center">
        Applied Jobs : {appliedJobs.length}
      </h2>

      <div className="my-5 space-y-4 md:px-0 px-3">
        <div className="flex justify-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Filter by <IoIosArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => handleJobsFiter("all")}>
                <a>All</a>
              </li>
              <li onClick={() => handleJobsFiter("remote")}>
                <a>Remote</a>
              </li>
              <li onClick={() => handleJobsFiter("onsite")}>
                <a>Onsite</a>
              </li>
            </ul>
          </div>
        </div>
        {displayJobs.map(apply => (
          <ApplyJobSec apply={apply}></ApplyJobSec>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
