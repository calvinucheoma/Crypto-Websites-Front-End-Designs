'use client';

import Image from 'next/image';
import { useState } from 'react';

const Dashboard = () => {
  const [token, setToken] = useState('BNB');

  const [bnbValue, setBnbValue] = useState('');

  const [ebnValue, setEbnValue] = useState('');

  const claimReferralEarnings = () => {};

  const copyReferralLink = () => {};

  const swapCoin = () => {};

  const claimEbnToken = () => {};

  return (
    <section className="bg-[#0F0727] min-h-[100vh] flex flex-col h-full px-5 py-10 mt-5 md:px-15 md:py-20 gap-20 lg:flex-row lg:justify-evenly lg:items-start">
      <aside className="flex flex-col w-full lg:w-[500px] gap-y-10">
        <div className="flex flex-col bg-[#2B3242] gap-y-8 p-8 rounded-lg">
          <div className="flex items-center justify-between">
            <h6 className="text-white text-base md:text-lg">BNB Balance</h6>
            <h6 className="text-white text-base md:text-lg">{24}</h6>
          </div>
          <div className="flex items-center justify-between">
            <h6 className="text-white text-base md:text-lg">USDT Balance</h6>
            <h6 className="text-white text-base md:text-lg">{24}</h6>
          </div>
          <div className="flex items-center justify-between">
            <h6 className="text-white text-base md:text-lg">
              EBN Token Holding
            </h6>
            <h6 className="text-white text-base md:text-lg">{24}</h6>
          </div>
        </div>

        {/* HIDE THIS SECTION ON MOBILE DEVICES BUT COPY THE CODE AGAIN TO MAKE IT LAST DIV ON MOBILE DEVICES */}

        <div className="flex flex-col bg-[#2B3242] gap-y-8 p-8 rounded-lg max-lg:hidden">
          <div className="flex flex-col gap-y-4 justify-start">
            <h6 className="text-white text-base md:text-lg">
              Referral Program
            </h6>
            <div className="flex items-center gap-x-4">
              <input
                type="text"
                className="outline-none border-none bg-white text-black focus:border-none w-full"
              />
              <span
                className="text-white font-normal text-xs md:text-sm cursor-pointer"
                onClick={copyReferralLink}
              >
                COPY
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-y-6 justify-start">
            <h6 className="text-white">Referral Earnings</h6>
            <div className="flex items-center justify-start gap-x-8 md:gap-x-12 pl-4">
              <div className="flex flex-col justify-center gap-y-2">
                <p className="text-white text-xs md:text-sm font-light text-center">
                  Total Earnings
                </p>
                <p className="text-white text-xs md:text-sm font-light text-center">
                  {23}
                </p>
              </div>
              <div className="flex flex-col justify-center gap-y-2">
                <p className="text-white text-xs md:text-sm font-light text-center">
                  Available Earnings
                </p>
                <p className="text-white text-xs md:text-sm font-light text-center">
                  {24}
                </p>
              </div>
              <button
                className="bg-[#FFC92C] cursor-pointer rounded-lg border-none px-4 py-1 text-white text-xs md:text-sm font-light mt-5 max-md:mt-10"
                onClick={claimReferralEarnings}
              >
                Claim
              </button>
            </div>
          </div>
        </div>
      </aside>

      <aside className="flex flex-col w-full lg:w-[500px] max-lg:-mt-12">
        <div className="flex flex-col">
          <div className="flex flex-col bg-[#2B3242] rounded-lg mb-2">
            <div className="flex items-center justify-around border-b border-b-white">
              <p
                className="text-white font-medium text-base md:text-lg cursor-pointer border-r-2 flex-1 text-center py-2"
                onClick={() => setToken('USDT')}
                style={{ color: `${token === 'USDT' ? '#FFC92C' : ''}` }}
              >
                USDT
              </p>
              {/* <div className="bg-white w-[0.25px] h-12" /> */}
              <p
                className="text-white font-medium text-base md:text-lg cursor-pointer flex-1 text-center py-2"
                style={{ color: `${token === 'BNB' ? '#FFC92C' : ''}` }}
                onClick={() => setToken('BNB')}
              >
                BNB
              </p>
            </div>
            <div className="flex flex-col gap-y-4 p-6">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-x-4 bg-[#252B36] py-2 px-4 rounded-lg">
                  <Image
                    src={token === 'BNB' ? '/ETH.svg' : '/usdt.svg'}
                    alt="token icon"
                    width={0}
                    height={0}
                    // layout="responsive"
                    className="rounded-full w-[20px] h-[20px]"
                  />
                  <span className="text-[#717A8C] font-medium text-xs md:text-sm">
                    {token}
                  </span>
                </p>
                {/* <p className="text-[#717A8C] font-medium text-lg md:text-2xl">
                  0.00
                </p> */}
                <input
                  type="text"
                  placeholder="0.00"
                  className="text-black font-medium text-sm md:text-2xl placeholder:text-[#717A8C] border-none focus:border-none outline-none focus:outline-none rounded-lg text-end py-1 px-1 w-[50%]"
                  value={bnbValue}
                  onChange={(e) => setBnbValue(e.target.value)}
                />
              </div>
              <div className="flex iems-center justify-between">
                <p className="flex items-center gap-x-4">
                  <span className="text-[#717A8C] font-medium max-sm:text-[10px] text-xs md:text-sm">
                    Balance:
                  </span>
                  <span className="text-[#717A8C] font-medium max-sm:text-[10px] text-xs md:text-sm">
                    2.8989 ETH (Max)
                  </span>
                </p>
                <p className="text-[#717A8C] font-medium max-sm:text-[10px] text-xs md:text-sm">
                  ≈$ 6726.2307
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-[#2B3242] rounded-lg mb-4">
            <div className="flex flex-col gap-y-4 p-6">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-x-4 bg-[#252B36] py-2 px-4 rounded-lg">
                  <Image
                    src="/Vector.svg"
                    alt="ETH icon"
                    width={0}
                    height={0}
                    layout="responsive"
                  />
                  <span className="text-[#717A8C] font-medium text-xs md:text-sm">
                    EBN
                  </span>
                </p>
                {/* <p className="text-[#717A8C] font-medium text-lg md:text-2xl">
                  0.00
                </p> */}
                <input
                  type="text"
                  placeholder="0.00"
                  className="text-black font-medium text-sm md:text-2xl placeholder:text-[#717A8C] border-none focus:border-none outline-none focus:outline-none rounded-lg text-end py-1 px-1 w-[50%]"
                  value={ebnValue}
                  onChange={(e) => setEbnValue(e.target.value)}
                />
              </div>
              <div className="flex iems-center justify-between">
                <p className="flex items-center gap-x-4">
                  <span className="text-[#717A8C] font-medium max-sm:text-[10px] text-xs md:text-sm">
                    Balance:
                  </span>
                  <span className="text-[#717A8C] font-medium max-sm:text-[10px] text-xs md:text-sm">
                    400.8989 EOS
                  </span>
                </p>
                <p className="text-[#717A8C] font-medium max-sm:text-[10px] text-xs md:text-sm">
                  ≈$ 284.6382
                </p>
              </div>
            </div>
          </div>

          <p className="text-[#717A8C] font-medium text-xs md:text-sm mb-4 text-end">
            1 EOS = 0.0003064ETH
          </p>

          <button
            className="w-full bg-[#FFC92C] text-white font-medium text-base md:text-xl p-2 md:p-4 rounded-lg cursor-pointer hover:bg-[#FFC92C]/90"
            onClick={swapCoin}
          >
            Swap
          </button>
        </div>

        <div className="flex flex-col bg-[#2B3242] rounded-lg px-8 py-6 gap-y-4 mt-12">
          <p className="text-white text-end font-medium text-base md:text-lg">
            Passive income 0.5%
          </p>

          <p className="flex items-center justify-between">
            <span className="text-white font-medium text-base md:text-lg">
              EBN Token locked
            </span>
            <span className="text-white font-medium text-base md:text-lg">
              {24}
            </span>
          </p>

          <p className="flex items-center justify-between">
            <span className="text-white font-medium text-base md:text-lg">
              EBN Token for claim
            </span>
            <span className="text-white font-medium text-base md:text-lg">
              {24}
            </span>
          </p>

          <button
            className="w-full bg-[#FFC92C] text-white font-medium text-base md:text-xl p-2 md:p-4 rounded-lg cursor-pointer hover:bg-[#FFC92C]/90 mt-8"
            onClick={claimEbnToken}
          >
            Claim
          </button>
        </div>

        {/* DISPLAY IT AT THE END OF THE SECTION ON MOBILE DEVICES */}

        <div className="flex flex-col bg-[#2B3242] gap-y-8 p-8 rounded-lg lg:hidden mt-8">
          <div className="flex flex-col gap-y-4 justify-start">
            <h6 className="text-white text-base md:text-lg">
              Referral Program
            </h6>
            <div className="flex items-center gap-x-4">
              <input
                type="text"
                className="outline-none border-none bg-white text-black focus:border-none w-full"
              />
              <span
                className="text-white font-normal text-xs md:text-sm cursor-pointer"
                onClick={copyReferralLink}
              >
                COPY
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-y-6 justify-start">
            <h6 className="text-white">Referral Earnings</h6>
            <div className="flex items-center justify-start gap-x-8 md:gap-x-12 pl-4">
              <div className="flex flex-col justify-center gap-y-2">
                <p className="text-white text-xs md:text-sm font-light text-center">
                  Total Earnings
                </p>
                <p className="text-white text-xs md:text-sm font-light text-center">
                  {23}
                </p>
              </div>
              <div className="flex flex-col justify-center gap-y-2">
                <p className="text-white text-xs md:text-sm font-light text-center">
                  Available Earnings
                </p>
                <p className="text-white text-xs md:text-sm font-light text-center">
                  {24}
                </p>
              </div>
              <button
                className="bg-[#FFC92C] cursor-pointer rounded-lg border-none px-4 py-1 text-white text-xs md:text-sm font-light mt-5 max-md:mt-10"
                onClick={claimReferralEarnings}
              >
                Claim
              </button>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Dashboard;
