"use client";

import { useGlobalState } from "@/app/context/globalProvider";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const UserDashboardPage = () => {
  const { user } = useGlobalState();

  const searchParams = useSearchParams();

  const search = searchParams.get("userId");

  // I am fetching the userID from search parameters so fine tune and use it anywhere you want to
  const [referralLink, setReferralLink] = useState(search);

  const [usdtBalance, setUsdtBalance] = useState("0.00");
  const [depositAmount, setDepositAmount] = useState("0");
  const [profitLimitValue, setProfitLimitValue] = useState("0.00");

  const router = useRouter();

  if (!user) {
    return router.push("/");
  }

  const depositAmounts = [
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

  // Top Up USDT Function
  const topUpUSDT = () => {};

  // Invest Functionality
  const invest = () => {};

  // Claim Dividend Functionality
  const claimDividend = () => {};

  // Claim Level Income
  const claimLevelIncome = () => {};

  // Claim Matching Income
  const claimMatchingIncome = () => {};

  // Claim Reward Income
  const claimRewardIncome = () => {};

  // View Tree Functionality
  const viewTree = () => {
    router.push("/dashboard/history");
  };

  return (
    <main className="p-10 max-md:p-5">
      {/* USER REFERRAL LINK SECTION */}
      <section className="flex flex-col gap-3 w-full mb-10 bg-[rgba(5,5,25,0.4)] py-8 px-4 rounded-lg max-sm:py-4">
        <h4 className="text-lg max-sm:text-sm text-white font-bold">
          Your Referral Link
        </h4>

        <div className="flex gap-2 items-center justify-between">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="p-2 max-sm:py-1 max-sm:px-2 text-lg max-sm:text-sm text-gray-900 rounded-lg border-none outline-none w-[50%] max-sm:w-full"
          />
          <p
            className="text-lg max-sm:text-[12px] text-white font-medium cursor-pointer"
            onClick={handleCopyClick}
          >
            Copy
          </p>
        </div>
      </section>

      {/* WALLET BALANCE */}
      <section className="flex flex-col gap-7 w-full mb-10 bg-[rgba(5,5,25,0.4)] py-8 px-4 rounded-lg max-sm:py-4">
        <h4 className="text-lg max-sm:text-sm text-white font-bold">
          Wallet Balance
        </h4>

        <div className="flex items-center justify-between gap-4">
          <p className="text-base max-sm:text-sm text-white font-medium">
            USDT
          </p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              className="rounded-lg py-1 px-2 text-base max-sm:text-sm text-end font-bold text-black w-full outline-none"
              value={usdtBalance}
            />
            <p className="text-base max-sm:text-sm text-white font-medium">
              Balance
            </p>
          </div>
        </div>
      </section>

      {/* TOP-UP SECTION */}
      <section className="flex flex-col gap-3 w-full mb-10 bg-[rgba(5,5,25,0.4)] py-8 px-4 rounded-lg max-sm:py-4">
        <h4 className="text-lg max-sm:text-sm text-white font-bold">Top Up</h4>

        <button
          className="text-center px-16 py-2 border-none rounded-lg bg-white text-black font-semibold uppercase w-[60%] max-sm:w-full mx-auto max-md:text-sm max-sm:px-8"
          onClick={topUpUSDT}
        >
          USDT
        </button>

        <div className="flex flex-col gap-5 mb-10 mt-10">
          <h4 className="text-lg max-sm:text-sm text-white font-bold">
            Deposit Amount
          </h4>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            {depositAmounts.map((deposit, index) => (
              <button
                key={index}
                className={`px-4 py-1 text-white text-sm font-medium rounded-lg w-[120px] ${
                  deposit === depositAmount
                    ? "border-green-300 bg-green-500"
                    : "bg-orange-400"
                }`}
                onClick={() =>
                  setDepositAmount(deposit === depositAmount ? 0 : deposit)
                }
              >
                {deposit}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2 items-center justify-end text-base max-sm:text-sm text-white font-bold my-2">
          <p>20$</p> - <p>1Neo</p>
        </div>

        <div className="flex gap-2 items-center justify-between text-base max-sm:text-sm text-white font-bold mb-5">
          <p>Neo points to receive</p>
          <p>xx</p>
        </div>

        <button
          className="text-center px-16 py-2 border-none rounded-lg bg-white text-black font-semibold uppercase w-[60%] max-sm:w-full mx-auto max-md:text-sm max-sm:px-8"
          onClick={invest}
        >
          Invest
        </button>
      </section>

      {/* HISTORY SECTION */}
      <section className="flex flex-col gap-3 w-full mb-10 bg-[rgba(63,63,114,0.2)] py-8 px-4 rounded-lg max-sm:py-4">
        <p
          className="cursor-pointer text-white text-end font-medium text-base max-sm:text-sm"
          onClick={() => router.push("/dashboard/history")}
        >
          View More
        </p>
        <h4 className="text-white text-center font-bold text-xl max-sm:text-base">
          HISTORY
        </h4>
      </section>

      {/* YOUR RANK SECTION */}
      <section className="flex items-start justify-between gap-3 w-full mb-10 bg-[rgba(63,63,114,0.2)] py-8 px-4 rounded-lg max-sm:py-4">
        <div className="flex flex-col gap-3">
          <h4 className="text-lg max-sm:text-sm text-white font-bold">
            Your Rank
          </h4>
        </div>

        <div className="border-l border-white h-40" />

        <div className="flex flex-col gap-3">
          <h4 className="text-lg max-sm:text-sm text-white font-bold">
            Total Business
          </h4>
        </div>
      </section>

      {/* PROFIT LIMIT SECTION */}
      <section className="flex flex-col gap-5 w-full mb-10 bg-[rgba(63,63,114,0.2)] py-8 px-4 rounded-lg max-sm:py-4">
        <h4 className="text-lg max-sm:text-sm text-white font-bold">
          Profit Limit
        </h4>

        <input
          type="text"
          readOnly
          value={profitLimitValue}
          className="text-end p-2 max-sm:py-1 max-sm:px-2 text-lg max-sm:text-sm text-gray-900 rounded-lg border-none outline-none w-[50%] max-sm:w-full"
        />

        <div className="flex items-center justify-between gap-2 text-base max-sm:text-sm text-white font-medium my-5">
          <p>Earnings in Holdings - </p>
          <p>xx</p>
        </div>

        <div className="flex items-center justify-between gap-2 text-base max-sm:text-sm text-white font-medium mb-5">
          <p>Missed Earnings - </p>
          <p>xx</p>
        </div>
      </section>

      {/* DIVIDEND SECTION */}
      <section className="flex flex-col gap-5 w-full mb-10 bg-[rgba(63,63,114,0.2)] py-8 px-4 rounded-lg max-sm:py-4">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-lg max-sm:text-sm text-white font-bold">
            Dividend
          </h4>
          <h4 className="text-lg max-sm:text-sm text-white font-bold">
            Neo points - xx
          </h4>
        </div>

        <div className="flex items-center justify-between gap-2 text-base max-sm:text-sm text-white font-medium my-5">
          <p>Total Dividends - </p>
          <p>xx</p>
        </div>

        <div className="flex items-center justify-between gap-2 text-base max-sm:text-sm text-white font-medium mb-5">
          <p>Available Earnings - </p>
          <p>xx</p>
        </div>

        <button
          className="ml-auto text-center px-8 py-2 border-none rounded-lg bg-white text-black font-medium uppercase w-fit max-sm:w-full max-md:text-sm max-sm:px-4"
          onClick={claimDividend}
        >
          Claim
        </button>
      </section>

      {/* LEVEL INCOME SECTION */}
      <section className="flex flex-col gap-5 w-full mb-10 bg-[rgba(63,63,114,0.2)] py-8 px-4 rounded-lg max-sm:py-4">
        <h4 className="text-lg max-sm:text-sm text-white font-bold">
          Level Income
        </h4>

        <div className="flex items-center justify-between gap-2 text-base max-sm:text-sm text-white font-medium my-5">
          <p>Total Earnings - </p>
          <p>xx</p>
        </div>

        <div className="flex items-center justify-between gap-2 text-base max-sm:text-sm text-white font-medium mb-5">
          <p>Available Earnings - </p>
          <p>xx</p>
        </div>

        <button
          className="ml-auto text-center px-8 py-2 border-none rounded-lg bg-white text-black font-medium uppercase w-fit max-sm:w-full max-md:text-sm max-sm:px-4"
          onClick={claimLevelIncome}
        >
          Claim
        </button>
      </section>

      {/* REWARD INCOME SECTION */}
      <section className="flex flex-col gap-5 w-full mb-10 bg-[rgba(63,63,114,0.2)] py-8 px-4 rounded-lg max-sm:py-4">
        <h4 className="text-lg max-sm:text-sm text-white font-bold">
          Reward Income
        </h4>

        <div className="flex items-center justify-between gap-2 text-base max-sm:text-sm text-white font-medium mb-5">
          <p>Total Volume - </p>
          <p>xxxxxx $</p>
        </div>

        <div className="flex items-start justify-between gap-2 mb-5">
          <div className="flex flex-col gap-5">
            <h6 className="text-white font-bold text-base max-sm:text-sm">
              Rank 1
            </h6>
            <p className="text-white font-medium text-sm max-sm:text-[12px]">
              1000$ Rewards
            </p>
            <p className="text-white font-medium text-sm max-sm:text-[12px]">
              1000$ Rewards
            </p>
          </div>
          <button
            className="text-center px-4 py-1 border-none rounded-lg bg-white text-black font-medium uppercase w-fit max-md:text-sm max-sm:px-4"
            onClick={claimRewardIncome}
          >
            Claim
          </button>
        </div>
      </section>

      {/* MATCHING INCOME SECTION */}
      <section className="flex flex-col gap-5 w-full mb-10 bg-[rgba(63,63,114,0.2)] py-8 px-4 rounded-lg max-sm:py-4">
        <h4 className="text-lg max-sm:text-sm text-white font-bold">
          Matching Income
        </h4>

        <div className="flex items-center justify-between gap-2 text-base max-sm:text-sm text-white font-medium my-5">
          <p>Total Earnings - </p>
          <p>xx</p>
        </div>

        <div className="flex items-center justify-between gap-2 text-base max-sm:text-sm text-white font-medium mb-5">
          <p>Available Earnings - </p>
          <p>xx</p>
        </div>

        <button
          className="text-center px-8 py-2 border-none rounded-lg bg-white text-black font-medium uppercase w-fit max-sm:w-full ml-auto max-md:text-sm max-sm:px-4"
          onClick={claimMatchingIncome}
        >
          Claim
        </button>

        <div
          className="flex items-center justify-end gap-2 w-fit ml-auto cursor-pointer"
          onClick={viewTree}
        >
          <p className="text-base max-sm:text-sm text-white font-bold">
            View Tree
          </p>
          <FaArrowRightLong
            color="white"
            className="text-[32px] max-sm:text-[22px]"
          />
        </div>
      </section>
    </main>
  );
};

export default UserDashboardPage;
