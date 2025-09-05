import React from "react";
import { useLoaderData, useParams } from "react-router";
// icons
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { IoIosCalendar } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import { saveApplication } from "../../Utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  // console.log(id);
  // console.log(job)
  // console.log(jobs)

  const handleApplyJob = () => {
    saveApplication(idInt);
    toast('Applied successfully')
  }
  return (
    <div>
      <h2 className="text-3xl">Job details</h2>

      {/* section start from here */}
      <div className="grid gap-4 md:grid-cols-6">
        <div className="md:col-span-4  space-y-6">
          <h3>
            <span className="font-bold">Job description :</span>
            <span className="text-[#757575]">{job.job_description} </span>
          </h3>

          <h3>
            <span className="font-bold">Job Responsibility :</span>
            <span className="text-[#757575]">{job.job_responsibility} </span>
          </h3>

          <h3>
            <span className="font-bold">Educational requirements :</span>
            <br />
            <span className="text-[#757575]">{job.educational_requirements} </span>
          </h3>

          <h3>
            <span className="font-bold">Experience :</span>
            <br />
            <span className="text-[#757575]">{job.experiences} </span>
          </h3>
          
        </div>
        <div className="md:col-span-2">
           <div className="bg-gradient-to-r from-[#7E90FE1A]  to-[#9873FF1A] space-y-3  px-5 py-3  rounded-lg">
             <h4 className="text-lg font-bold border-b-1 border-[#7E90FE66] pb-2">Job details</h4>
            <p className="md:flex items-center gap-1">
           <span className="text-lg text-[#9873FF]"><HiOutlineCurrencyDollar /></span> <span className="text-[#474747] font-semibold">Salary :</span> <span className="text-[#757575]  items-center">{job.salary} (Per month)</span>
            </p>
            <p className="flex items-center gap-1">
            <span className="text-lg text-[#9873FF]"><IoIosCalendar /></span> <span className="text-[#474747] font-semibold">Job Title : </span> <span className="text-[#757575]">{job.job_title}</span> 
            </p>

            {/* contact info */}
             <h4 className="text-lg font-bold border-b-1 border-[#7E90FE66] pb-2">Contact information</h4>
            <p className="flex items-center gap-1">
            <span className="text-lg text-[#9873FF]"><FiPhone /></span> <span className="text-[#474747] font-semibold">Phone : </span> <span className="text-[#757575]">{job.contact_information.phone} (Per month)</span>
            </p>
            <p className="flex items-center gap-1">
              <span className="text-lg text-[#9873FF]"><MdOutlineMail /></span> <span className="text-[#474747] font-semibold">Email : </span> <span className="text-[#757575]">{job.contact_information.email}</span> 
            </p>
            <p>
            <span className="flex gap-1 items-center"><span className="text-lg text-[#9873FF] "><IoLocationOutline /> </span>   <span className="text-[#474747] font-semibold">Adress : </span></span> <span className="text-[#757575]">{job.contact_information.address}</span> 
            </p>
           </div>

           <button onClick={handleApplyJob} className="cursor-pointer bg-gradient-to-r from-[#7E90FE]  to-[#9873FF] w-full py-3 rounded-lg text-white font-bold mt-4">Apply Now</button>
            
        </div>
        
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
