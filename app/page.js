"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useGlobalState } from "./context/globalProvider";

export default function Home() {
  const { user } = useGlobalState();

  const [openRegisterForm, setOpenRegisterForm] = useState(false);

  const [walletAddress, setWalletAddress] = useState("");
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const [referralName, setReferralName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [registerEmailAddress, setRegisterEmailAddress] = useState("");

  const router = useRouter();

  // CONNECT WALLET FUNCTION
  const connectWallet = () => {
    // other codes
    if (user) {
      router.push("/dashboard/home");
    } else {
      setOpenRegisterForm(true);
    }
  };

  // VALIDATE OTP FUNCTION
  const validateOTP = () => {};

  // SUBMIT LOGIN FORM
  const submitLoginForm = () => {};

  // REGISTER USER
  const registerUser = () => {};

  return (
    <main className="max-md:px-10">
      <h1 className="text-5xl text-white font-bold text-center my-20 max-md:my-10 max-md:text-2xl">
        NEONEX
      </h1>

      {/* CONNECT WALLET */}
      <section className="flex flex-col gap-4 items-center justify-center w-full mb-20">
        <input
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          className="w-[70%] outline-none border-none p-2 rounded-lg max-md:w-full max-md:text-sm"
        />
        <button
          onClick={connectWallet}
          className="text-center px-4 py-2 border-none rounded-lg bg-white text-black font-semibold uppercase max-md:text-sm"
        >
          Connect Wallet
        </button>
      </section>

      {openRegisterForm && (
        <section className="flex flex-col gap-10 items-center justify-center w-full mb-5">
          {/* LOGIN SECTION */}
          <div className="w-[70%] flex flex-col gap-4 border rounded-lg px-6 py-8 max-md:w-full">
            <div className="flex flex-col mx-auto w-[70%] max-md:w-full">
              <label
                htmlFor="loginEmail"
                className="text-white text-base font-semibold max-md:text-sm"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="e.g johndoe@gmail.com"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="w-full outline-none border-none p-2 rounded-lg max-md:text-sm"
                id="loginEmail"
              />
            </div>

            <button
              onClick={submitLoginForm}
              className="text-center px-8 py-2 border-none rounded-lg bg-white text-black font-semibold uppercase w-fit mx-auto max-md:text-sm"
            >
              Submit
            </button>
          </div>

          {/* REGISTER SECTION */}
          <div className="mb-5 w-[70%] flex flex-col gap-6 border rounded-lg px-6 py-8 max-md:w-full max-md:px-4 max-md:py-4">
            <div className="flex flex-col mx-auto w-[70%] max-md:w-full">
              <label
                htmlFor="registerEmail"
                className="text-white text-base font-semibold max-md:text-sm"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="e.g johndoe@gmail.com"
                value={registerEmailAddress}
                onChange={(e) => setRegisterEmailAddress(e.target.value)}
                className="w-full mx-auto outline-none border-none p-2 rounded-lg max-md:text-sm"
                id="registerEmail"
              />
            </div>

            <div className="w-[70%] flex gap-2 items-center justify-between mx-auto max-md:w-full">
              <input
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full outline-none border-none p-2 rounded-lg flex-[0.8] max-md:text-sm"
              />
              <button
                onClick={validateOTP}
                className="flex-[0.2] text-center p-2 border-none rounded-lg bg-white text-black font-semibold uppercase max-md:text-sm"
              >
                Submit
              </button>
            </div>

            <div className="flex flex-col mx-auto w-[70%] max-md:w-full">
              <label
                htmlFor="username"
                className="text-white text-base font-semibold max-md:text-sm"
              >
                User Name
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g johndoe123"
                className="w-full mx-auto outline-none border-none p-2 rounded-lg max-md:text-sm"
                id="username"
              />
            </div>

            <div className="flex flex-col mx-auto w-[70%] max-md:w-full">
              <label
                htmlFor="referralName"
                className="text-white text-base font-semibold max-md:text-sm"
              >
                Referral Name
              </label>

              <input
                type="text"
                value={referralName}
                onChange={(e) => setReferralName(e.target.value)}
                placeholder="e.g janedoe123"
                className="w-full mx-auto outline-none border-none p-2 rounded-lg max-md:text-sm"
                id="referralName"
              />
            </div>

            <button
              onClick={registerUser}
              className="mt-5 text-center px-8 py-2 border-none rounded-lg bg-white text-black font-semibold uppercase w-fit mx-auto max-md:text-sm"
            >
              Register
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
