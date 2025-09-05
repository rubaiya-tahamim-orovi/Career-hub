import React from "react";

const CatagoryList = () => {
  return (
    <div className="mt-14">
     <div className="space-y-4">
       <h2 className="text-4xl text-center">Job catagory list</h2>
      <p className="text-center text-[#757575]">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
     </div>
     {/* icons parts */}
     <div className="flex justify-between">
      <div className="bg-gradient-to-r from-[#7E90FE0D]  to-[#9873FF0D] p-10 space-y-2">
        <img className="bg-gradient-to-r from-[#7E90FE1A]  to-[#9873FF1A] p-4 rounded-lg" src="../../../public/icons/accounts.png" alt="" />
        <h3 className="text-xl font-bold">Acount & Finance</h3>
        <p className="text-[#757575]">300 Jobs Available</p>
      </div>
      <div className="bg-gradient-to-r from-[#7E90FE0D]  to-[#9873FF0D] p-10 space-y-2">
        <img className="bg-gradient-to-r from-[#7E90FE1A]  to-[#9873FF1A] p-4 rounded-lg" src="../../../public/icons/creative.png" alt="" />
        <h3 className="text-xl font-bold">Creative Design</h3>
        <p className="text-[#757575]">105 + Jobs Available</p>
      </div>
     <div className="bg-gradient-to-r from-[#7E90FE0D]  to-[#9873FF0D] p-10 space-y-2">
        <img className="bg-gradient-to-r from-[#7E90FE1A]  to-[#9873FF1A] p-4 rounded-lg" src="../../../public/icons/marketing.png" alt="" />
        <h3 className="text-xl font-bold">Marketing & Sales</h3>
        <p className="text-[#757575]">150 Jobs Available</p>
      </div>
      <div className="bg-gradient-to-r from-[#7E90FE0D]  to-[#9873FF0D] p-10 space-y-2">
        <img className="bg-gradient-to-r from-[#7E90FE1A]  to-[#9873FF1A] p-4 rounded-lg" src="../../../public/icons/chip.png" alt="" />
        <h3 className="text-xl font-bold">Engineering Job</h3>
        <p className="text-[#757575]">224 Jobs Available</p>
      </div>
     </div>
    </div>
  );
};

export default CatagoryList;
