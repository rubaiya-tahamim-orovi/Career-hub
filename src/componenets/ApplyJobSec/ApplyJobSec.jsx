import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

const ApplyJobSec = ({apply}) => {
    const {logo, job_title, company_name, remote_or_onsite,
        job_type, location, salary
    } = apply;
    return (
        <div className='flex border border-[#E8E8E8] p-5 gap-5 items-center'>
            <div className='bg-[#F4F4F4] md:h-[150px] h-40 md:w-[200px] md:p-0 p-4 items-center flex justify-center'>
                <img src={logo} alt="" />
            </div>
          <div className='md:flex justify-between items-center'>
            <div className='space-y-2 md:mr-[450px]'>
            <h3 className='card-title text-[#474747]'>{job_title}</h3>
            <p className='text-[#757575]'>{company_name}</p>
             <div className="flex gap-4">
            <button className="font-bold px-3 py-1 rounded-sm border-1 border-[#9873FF] text-[#9873FF]">{remote_or_onsite}</button>
            <button className="font-bold px-3 rounded-sm py-1 border-1 border-[#9873FF] text-[#9873FF]">{job_type}</button>
        </div>
         <div className="md:flex gap-2">
                    <p className="text-[#757575] flex items-center gap-1"> <span><CiLocationOn /> </span>{location}</p>
                    <p className="text-[#757575] flex items-center gap-1"> <span className="text-lg"><HiOutlineCurrencyDollar /></span> Salary: {salary}</p>
                </div>
              
            </div>

            {/* button div */} 
              <div className='mt-3'>
                     <button className="btn bg-gradient-to-r from-[#7E90FE]  to-[#9873FF] text-white font-bold">View details</button>
                </div>
            
        
          </div>
            
        </div>
    );
};

export default ApplyJobSec;