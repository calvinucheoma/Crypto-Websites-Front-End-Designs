"use client";

import { useState } from "react";

const DashboardPage = () => {
  const [referralLink, setReferralLink] = useState("fgvhgy6yhfdr4rdt");

  //  Copy Referral Link Function
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(referralLink)
      .then(() => {
        alert("Referral link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <main className="flex flex-col min-h-[calc(100vh-80px)] bg-[#464040] max-sm:px-6">
      {/* UPCOMING LISTINGS SECTION */}
      <div className="bg-[#F29F23] px-8 pt-6 pb-20 max-sm:-mx-6">
        <h6 className="text-black font-bold text-xl max-sm:text-base text-left">
          Upcoming Listings
        </h6>
      </div>

      {/* Listings */}
      <div className="-mt-16 mx-auto w-[50%] max-xl:w-[70%] max-lg:w-[80%] max-md:w-[90%] max-sm:w-full flex flex-col mb-20">
        {/* header */}
        <div className="bg-[#464040] py-3 px-4 rounded-t-xl">
          <h6 className="text-white font-semibold text-xl max-sm:text-base text-left">
            Listings
          </h6>
        </div>

        {/* body */}
        <div className="bg-[#D9D9D9] min-h-[20vh] rounded-b-xl"></div>
      </div>

      {/* REFERRAL LINK SECTION */}
      <div className="flex flex-col gap-6 items-start rounded-lg bg-[#795217] p-4 mx-auto w-[50%] max-xl:w-[70%] max-lg:w-[80%] max-md:w-[90%] max-sm:w-full mb-10">
        <p className="text-white font-semibold text-base max-md:text-sm">
          Referral Link
        </p>
        <input
          type="text"
          readOnly
          className="bg-[#D9D9D9] outline-none border-none w-full p-2 text-gray-700 font-semibold"
          value={referralLink}
        />

        <button
          className="text-black bg-[#F29F23] text-sm font-semibold rounded-md px-3 py-1 cursor-pointer"
          onClick={handleCopyClick}
        >
          Copy
        </button>
      </div>

      {/* RECENT TRANSACTIONS SECTION */}
      <div className="flex flex-col gap-6 items-start rounded-lg bg-[#605C5C] p-4 mx-auto w-[50%] max-xl:w-[70%] max-lg:w-[80%] max-md:w-[90%] max-sm:w-full mb-10">
        <p className="text-white font-semibold text-base max-md:text-sm">
          Recent Transactions
        </p>
      </div>
    </main>
  );
};

export default DashboardPage;
