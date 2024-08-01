"use client";

import { useState } from "react";

const InvestmentsPage = () => {
  const [subscriptionAmount, setSubscriptionAmount] = useState("0");

  const subscriptionAmounts = [
    "20",
    "100",
    "300",
    "500",
    "1000",
    "3000",
    "5000",
    "10000",
    "25000",
    "50000",
    "100000",
  ];

  const investmentEarningsSectionContents = [
    {
      title: "Total Direct",
      body: "$100",
    },
    {
      title: "Total Downlines",
      body: "$100",
    },
    {
      title: "Total Business",
      body: "$100",
    },
    {
      title: "Direct Earnings",
      body: "$100",
    },
    {
      title: "Team Earnings",
      body: "$100",
    },
  ];

  return (
    <main className="flex flex-col min-h-[calc(100vh-80px)] bg-[#464040] max-sm:px-6">
      {/* SUBSCRIPTIONS SECTION */}
      <div className="bg-[#F29F23] px-8 py-[66px] max-sm:py-[64px] max-sm:-mx-6" />

      {/* Subscriptions Container */}
      <div className="-mt-16 mx-auto w-[50%]  max-xl:w-[70%] max-lg:w-[80%] max-md:w-[90%] max-sm:w-full flex flex-col mb-14">
        {/* header */}
        <div className="bg-[#464040] py-3 px-4 rounded-t-xl">
          <h6 className="text-white font-semibold text-xl max-sm:text-base text-left">
            Subscriptions
          </h6>
        </div>

        {/* body */}
        <div className="bg-[#F4F4F4] min-h-[20vh] p-4 max-sm:p-2 flex flex-col gap-2 rounded-b-xl">
          <p className="text-[#808080] text-base max-sm:text-sm font-bold text-center mb-2">
            Grab a New Plan or Upgrade before slots are full
          </p>

          <div className="bg-sky-950 py-4 px-1 flex items-center justify-center flex-wrap gap-4 mb-10">
            {subscriptionAmounts.map((amount, index) => (
              <button
                key={index}
                className={`px-4 py-1 text-white text-sm font-medium rounded-lg w-[120px] ${
                  amount === subscriptionAmount
                    ? "border-green-300 bg-green-500"
                    : "bg-orange-400"
                }`}
                onClick={() =>
                  setSubscriptionAmount(
                    amount === subscriptionAmount ? 0 : amount
                  )
                }
              >
                ${amount}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between gap-2 mb-10">
            <p className="text-black font-bold text-lg max-sm:text-base">
              PV Tokens to Receive
            </p>
            <p className="text-black font-bold text-lg max-sm:text-base">10</p>
          </div>

          <div className="flex items-center justify-center mb-10">
            <button className="cursor-pointer px-20 max-sm:px-12 py-2 text-white font-bold text-lg max-sm:text-base rounded-lg bg-[#F29F23]">
              Invest
            </button>
          </div>
        </div>
      </div>

      {/* RECENT INVESTMENTS SECTION */}
      <div className="flex flex-col gap-6 items-start rounded-lg bg-[#605C5C] p-4 mx-auto w-[50%]  max-xl:w-[70%] max-lg:w-[80%] max-md:w-[90%] max-sm:w-full mb-10">
        <p className="text-white font-semibold text-xl max-sm:text-base text-left">
          Recent Investments
        </p>
      </div>

      {/* EARNINGS SECTION */}
      <div className="mx-auto w-[50%] max-xl:w-[70%] max-lg:w-[80%] max-md:w-[90%] max-sm:w-full flex flex-col mb-14">
        {/* header */}
        <div className="bg-[#605C5C] py-3 px-4 rounded-t-xl">
          <h6 className="text-white font-semibold text-xl max-sm:text-base text-left">
            Earnings
          </h6>
        </div>

        {/* body */}
        <div className="bg-[#F4F4F4] min-h-[20vh] p-8 max-sm:p-4 flex flex-col gap-5 rounded-b-xl">
          {investmentEarningsSectionContents.map((earningSection, index) => (
            <div
              key={index}
              className="bg-[#FABB5D] rounded-lg p-4 max-sm:p-2 flex flex-col justify-between gap-8"
            >
              <h4 className="text-black font-bold text-base max-sm:text-sm text-start">
                {earningSection.title}
              </h4>

              <p className="text-black font-bold text-lg max-sm:text-base text-end">
                {earningSection.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default InvestmentsPage;
