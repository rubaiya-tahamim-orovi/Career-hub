import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router";

const Job = ({ job }) => {
  const {
    logo, id,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,} = job;
  return (
    <div className="card-body bg-base-100 pt-7 border-1 border-[#75757533]  shadow-sm">
      <figure>
        <img
          src={logo} 
          alt="company_logo"
        />
      </figure>
      <div className="card py-5 space-y-3">
        <h2 className="card-title">{job_title}</h2>
        <p className="text-[#757575]">
         {company_name}
        </p>
        <div className="flex gap-4">
            <button className="font-bold px-3 py-1 rounded-sm border-1 border-[#9873FF] text-[#9873FF]">{remote_or_onsite}</button>
            <button className="font-bold px-3 rounded-sm py-1 border-1 border-[#9873FF] text-[#9873FF]">{job_type}</button>
        </div>
        <div className="flex">
            <p className="text-[#757575] flex items-center gap-1"> <span><CiLocationOn /> </span>{location}</p>
            <p className="text-[#757575] flex items-center gap-1"> <span className="text-lg"><HiOutlineCurrencyDollar /></span> Salary: {salary}</p>
        </div>
        <div className="card-actions justify-start">
          <Link to={`/job/${job.id}`}>
          <button className="btn bg-gradient-to-r from-[#7E90FE]  to-[#9873FF] text-white font-bold">View details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
