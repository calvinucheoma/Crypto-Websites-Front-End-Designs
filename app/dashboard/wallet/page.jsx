'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import WalletBalance from '@/app/components/WalletBalance';
import TableData from '@/app/components/TableData';
import useCurrentUser from '@/app/hooks/useCurrentUser';
import AddProjectModal from '@/app/components/modals/AddProjectModal';
import { Select, SelectItem } from '@nextui-org/react';
import { IoLogoUsd } from 'react-icons/io5';
import { SiBinance } from 'react-icons/si';

const WalletPage = () => {
  const { currentProjects, selectedProject, setSelectedProject } =
    useCurrentUser();

  useEffect(() => {
    // Ensure selectedProject is set when component mounts
    if (currentProjects.length > 0 && !selectedProject) {
      setSelectedProject(currentProjects[0]);
    }
  }, [currentProjects, selectedProject, setSelectedProject]);

  const [transactionSectionDetails, setTransactionSectionDetails] =
    useState('send');

  const [receiverWalletAddress, setReceiverWalletAddress] = useState(
    'dvjnfgut4hyr8r3hu3nrfjfhi'
  );

  const [senderWalletAddress, setSenderWalletAddress] = useState(
    '45dgrhthytjy5tt44r45y6y5'
  );

  const [amountToSend, setAmountToSend] = useState(500);

  const [amountToReceive, setAmountToReceive] = useState(800);

  // Send USDT
  const sendUSDT = () => {};

  // Receive USDT
  const receiveUSDT = () => {};

  return (
    <>
      {currentProjects.length === 0 ? (
        <AddProjectModal />
      ) : (
        <main className="flex flex-col gap-6 px-8 pb-10 pt-4">
          <h1 className="text-center font-bold text-2xl">{selectedProject}</h1>

          <div className="flex max-lg:flex-col items-start gap-8">
            {/* CRYPTO ASSERT SECTION */}
            <section className="flex-[0.5] flex flex-col gap-8 max-lg:flex-1 w-full">
              <div className="bg-gray-50 flex flex-col gap-4 p-4 rounded-3xl  min-h-[80vh] max-md:min-h-[40vh]">
                <TableData
                  tableHeaderColumns={['Crypto Assert', 'Holding', 'Value']}
                  tableBodyRows={[
                    { values: ['BNB - Smart Chain', '0.12 BNB', '100$'] },
                    { values: ['USDT - Smart Chain', '1000$', '1000$'] },
                  ]}
                />
              </div>
            </section>

            {/* WALLET BALANCE AND INITIATE TRANSACTIONS SECTION */}
            <section className="flex-[0.5] flex flex-col gap-8 max-lg:flex-1 w-full">
              {/* Wallet Balance Section */}
              <WalletBalance />

              {/* Initiate Transactions Section */}
              <div className="bg-white flex flex-col gap-4 p-4 rounded-3xl">
                <h6 className="text-center font-bold text-lg max-md:text-base">
                  Initiate Transactions
                </h6>

                {/* Transaction Section Togglers */}
                <div className="flex items-center mb-8 w-[80%] mx-auto">
                  {/* SEND */}
                  <div
                    className={clsx(
                      'flex-[0.5] p-[10px] cursor-pointer border rounded-tl-xl rounded-bl-xl',
                      transactionSectionDetails === 'send'
                        ? 'bg-black'
                        : 'bg-gray-200'
                    )}
                    onClick={() => setTransactionSectionDetails('send')}
                  >
                    <p
                      className={clsx(
                        'font-semibold text-sm text-center',
                        transactionSectionDetails === 'send' && 'text-white'
                      )}
                    >
                      Send
                    </p>
                  </div>
                  {/* RECEIVE */}
                  <div
                    className={clsx(
                      'flex-[0.5] p-[10px] cursor-pointer border rounded-tr-xl rounded-br-xl',
                      transactionSectionDetails === 'receive'
                        ? 'bg-black'
                        : 'bg-gray-200'
                    )}
                    onClick={() => setTransactionSectionDetails('receive')}
                  >
                    <p
                      className={clsx(
                        'font-semibold text-sm text-center',
                        transactionSectionDetails === 'receive' && 'text-white'
                      )}
                    >
                      Receive
                    </p>
                  </div>
                </div>

                {/* Transaction Section Details */}
                <div className="flex flex-col gap-8 w-full">
                  {transactionSectionDetails === 'send' ? (
                    // SEND TO DETAILS
                    <>
                      <div className="flex flex-col gap-1 justify-start">
                        <p className="text-black font-semibold text-sm max-md:text-xs">
                          Pay to
                        </p>
                        <input
                          type="text"
                          value={receiverWalletAddress}
                          onChange={(e) =>
                            setReceiverWalletAddress(e.target.value)
                          }
                          className="outline-none w-full text-black font-medium text-sm bg-gray-200 border rounded-3xl py-2 px-4"
                        />
                        <p
                          style={{ alignSelf: 'center' }}
                          className="text-gray-500 font-light text-xs"
                        >
                          Please enter the wallet address
                        </p>
                      </div>

                      <div className="flex items-center gap-3 max-md:flex-col">
                        {/* Amount */}
                        <div className="flex-[0.5] flex flex-col gap-3 justify-start max-md:flex-1 max-md:w-full">
                          <p className="text-black font-semibold text-sm max-md:text-xs">
                            Amount
                          </p>
                          <div className="flex items-center justify-between bg-gray-200 border rounded-3xl py-2 px-4">
                            <div className="flex items-center gap-1">
                              <p className="text-black font-medium text-xs">
                                $
                              </p>
                              <input
                                type="number"
                                value={amountToSend}
                                onChange={(e) =>
                                  setAmountToSend(e.target.value)
                                }
                                className="no-spinners outline-none bg-transparent text-black font-medium text-xs"
                              />
                            </div>
                            <p className="text-black font-medium text-xs">
                              MAX
                            </p>
                          </div>

                          <span className="flex items-center justify-between">
                            <p className="text-black font-medium text-xs pl-3">
                              Gas fee
                            </p>
                            <p className="text-black font-medium text-xs pr-3">
                              $5
                            </p>
                          </span>
                        </div>

                        {/* Currency */}
                        <div className="flex-[0.5] flex flex-col gap-3 justify-start max-md:flex-1 max-md:w-full">
                          <p className="text-black font-semibold text-sm max-md:text-xs">
                            Currency
                          </p>

                          <Select
                            radius="full"
                            className="max-w-xs"
                            placeholder="Select a token"
                          >
                            <SelectItem
                              key="usdt"
                              startContent={<IoLogoUsd size={14} />}
                              value="usdt"
                            >
                              USDT
                            </SelectItem>
                            <SelectItem
                              key="bnb"
                              startContent={<SiBinance size={14} />}
                              value="bnb"
                            >
                              BNB
                            </SelectItem>
                          </Select>

                          <span className="flex items-center justify-between">
                            <p className="text-black font-medium text-xs pl-3">
                              Total
                            </p>
                            <p className="text-black font-medium text-xs pr-3">
                              $395
                            </p>
                          </span>
                        </div>
                      </div>

                      {/* Withdraw Button */}
                      <button
                        onClick={sendUSDT}
                        className="text-sm p-2 rounded-3xl bg-blue-700 text-white text-center cursor-pointer shadow-gray-700 shadow-2xl transition hover:bg-blue-500"
                      >
                        Send
                      </button>
                    </>
                  ) : (
                    // RECEIVE FROM DETAILS
                    <>
                      <div className="flex flex-col gap-1 justify-start">
                        <p className="text-black font-semibold text-sm max-md:text-sm">
                          Receive from
                        </p>
                        <input
                          type="text"
                          readOnly
                          value={senderWalletAddress}
                          className="outline-none w-full text-black font-medium text-sm max-md:text-sm bg-gray-200 border rounded-3xl py-2 px-4"
                        />
                      </div>

                      <div>
                        {/* Currency */}
                        <div className="flex flex-col gap-3 justify-start w-full">
                          <p className="text-black font-semibold text-sm max-md:text-sm">
                            Currency
                          </p>
                          <Select
                            radius="full"
                            className="max-w-xs"
                            placeholder="Select a token"
                          >
                            <SelectItem
                              key="usdt"
                              startContent={<IoLogoUsd size={14} />}
                              value="usdt"
                            >
                              USDT
                            </SelectItem>
                            <SelectItem
                              key="bnb"
                              startContent={<SiBinance size={14} />}
                              value="bnb"
                            >
                              BNB
                            </SelectItem>
                          </Select>
                        </div>
                      </div>

                      {/* Receive Button */}
                      <button
                        onClick={receiveUSDT}
                        className="text-sm p-2 rounded-3xl bg-blue-700 text-white text-center cursor-pointer shadow-gray-700 shadow-2xl transition hover:bg-blue-500"
                      >
                        Receive
                      </button>
                    </>
                  )}
                </div>
              </div>
            </section>
          </div>
        </main>
      )}
    </>
  );
};

export default WalletPage;
