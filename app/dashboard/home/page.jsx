"use client";

import Carousel from "@/app/components/Carousel";
import Chart from "@/app/components/Chart";
import { useGlobalState } from "@/app/context/globalProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdInfo } from "react-icons/md";

const MainDashboardPage = () => {
  const { user, userReferralId } = useGlobalState();

  // You can fetch this value from the backend and append it to the context provider code. This is just for testing

  const router = useRouter();

  if (!user) {
    return router.push("/");
  }

  //  Fetch the userId from backend and insert it in a variable. Replace it with this temp useState variable later

  //  Again, fetch referral link from backend, or structure it how you want and replace this temp value with it
  const referralLink = "123456";

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
    <main className="p-10 max-md:p-5">
      {/* SERVER RUNNING TIME SECTION */}
      <section className="flex gap-3 items-center justify-between w-full mb-10 bg-[rgba(5,5,25,0.4)] py-8 px-4 rounded-lg">
        <h4 className="text-lg max-sm:text-sm text-white font-bold flex-[0.7]">
          Server Running Time
        </h4>
        <div className="flex-[0.3] bg-white text-black font-bold text-lg p-2 border-none rounded-lg max-sm:text-sm max-md:py-1 max-md:px-2">
          <p className="text-right">00:00</p>
        </div>
      </section>

      {/* DIVIDEND FLOW SECTION */}
      <section className="flex flex-col gap-3 w-full mb-10 bg-[rgba(5,5,25,0.4)] py-8 px-4 rounded-lg max-sm:py-4">
        <div className="flex items-center justify-between">
          <h4 className="text-lg max-sm:text-sm text-white font-bold">
            Dividend Flow
          </h4>
          <MdInfo
            className="cursor-pointer text-[32px] max-sm:text-[22px]"
            color="white"
          />
        </div>

        {/* CHART */}
        <div className="mb-5">
          <Chart />
        </div>

        {/* Total Dividend Paid */}
        <p className="flex items-center justify-between text-white text-lg max-sm:text-sm font-bold">
          Total Dividend Paid: <span>0.00</span>
        </p>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="flex flex-col gap-3 w-full mb-10 bg-[rgba(5,5,25,0.4)] py-8 px-4 rounded-lg max-sm:py-4">
        <div className="flex items-center justify-between mb-10">
          <h4 className="text-lg max-sm:text-sm text-white font-bold">
            Overview
          </h4>
          <MdInfo
            className="cursor-pointer text-[32px] max-sm:text-[22px]"
            color="white"
          />
        </div>

        {/* USER DETAILS */}
        <div className="flex flex-col gap-5">
          <p className="flex items-center justify-between text-white text-lg max-sm:text-sm font-bold">
            NeoNex ID: <span>{userReferralId}</span>
          </p>
          <p className="flex items-center justify-between text-white text-lg max-sm:text-sm font-bold">
            Wallet Address: <span>fhgytehjry4t5423rf3tg</span>
          </p>
          <p className="flex items-center justify-between text-white text-lg max-sm:text-sm font-bold">
            User Name: <span>John Doe</span>
          </p>
          <p className="flex items-center justify-between text-white text-lg max-sm:text-sm font-bold">
            Email: <span>johndoe@gmail.com</span>
          </p>
        </div>
      </section>

      {/* LATEST UPDATES SECTION */}
      <section className="flex flex-col gap-3 w-full mb-10 bg-[rgba(63,63,114,0.2)] py-8 px-4 rounded-lg max-sm:py-4">
        <h4 className="text-lg max-sm:text-sm text-white font-bold">
          Latest Updates
        </h4>

        {/* CAROUSEL */}
        <div className="w-full mb-2">
          <Carousel />
        </div>
      </section>

      {/* USER DASHBOARD SECTION */}
      <section
        className="flex flex-col gap-3 w-full mb-10 bg-[rgba(63,63,114,0.2)] py-8 px-4 rounded-lg cursor-pointer max-sm:py-4"
        onClick={() =>
          router.push(`/dashboard/earnings?userId=${userReferralId}`)
        }
      >
        <div className="flex items-center justify-between">
          <h4 className="text-lg max-sm:text-sm text-white font-bold">
            User Dashboard
          </h4>
          <FaArrowRightLong
            color="white"
            className="text-[32px] max-sm:text-[22px]"
          />
        </div>
      </section>

      {/* REFERRAL LINK SECTION */}
      <section className="flex flex-col gap-3 w-full mb-10 bg-[rgba(63,63,114,0.2)] py-8 px-4 rounded-lg max-sm:py-4">
        <h4 className="text-lg max-sm:text-sm text-white font-bold">
          Referral Link
        </h4>

        <div className="flex gap-2 items-center justify-between">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="p-2 max-sm:py-1 max-sm:px-2 text-lg max-sm:text-sm text-gray-900 rounded-lg border-none outline-none w-[50%] max-sm:w-full"
          />
          <p
            className="text-lg max-sm:text-[12px] text-white font-bold cursor-pointer"
            onClick={handleCopyClick}
          >
            Copy
          </p>
        </div>
      </section>
    </main>
  );
};

export default MainDashboardPage;
