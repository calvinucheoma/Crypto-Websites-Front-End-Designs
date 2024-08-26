"use client";

import { FcBearish, FcBullish } from "react-icons/fc";
import { BsCurrencyDollar } from "react-icons/bs";

const WalletBalance = () => {
  const walletBalance = "8,453.00";
  const upBalance = "2340.00";
  const downBalance = "556.00";

  return (
    <div className="bg-white flex flex-col gap-4 p-4 rounded-3xl">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-bold max-sm:text-base">Wallet Balance</h4>
        <span className="bg-black rounded-lg p-2">
          <BsCurrencyDollar size={18} color="white" />
        </span>
      </div>

      <h5 className="font-bold text-2xl max-sm:text-lg">$ {walletBalance}</h5>

      <div className="flex items-center gap-6">
        <p className="flex items-center gap-2">
          <FcBullish size={18} />
          <span>+$ {upBalance}</span>
        </p>
        <p className="flex items-center gap-2">
          <FcBearish />
          <span>-$ {downBalance}</span>
        </p>
      </div>
    </div>
  );
};

export default WalletBalance;
