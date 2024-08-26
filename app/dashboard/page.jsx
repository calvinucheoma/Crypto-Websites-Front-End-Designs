'use client';

import { BsThreeDots } from 'react-icons/bs';
import { FaAddressBook, FaLocationDot, FaLock } from 'react-icons/fa6';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { IoIosCheckmark, IoMdWallet } from 'react-icons/io';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import WalletBalance from '../components/WalletBalance';
import useCurrentUser from '../hooks/useCurrentUser';
import TableData from '../components/TableData';
import AddProjectModal from '../components/modals/AddProjectModal';
import { getLocation } from '../actions/getUserLocation';

export default function DashboardHomePage() {
  const [toggle2FA, setToggle2FA] = useState(false);

  const {
    currentProjects,
    selectedProject,
    setSelectedProject,
    location,
    setLocation,
  } = useCurrentUser();

  useEffect(() => {
    // Ensure selectedProject is set when component mounts
    if (currentProjects.length > 0 && !selectedProject) {
      setSelectedProject(currentProjects[0]);
    }
  }, [currentProjects, selectedProject, setSelectedProject]);

  useEffect(() => {
    const fetchLocation = async () => {
      if (!location) {
        const locationData = await getLocation();
        if (locationData && locationData.country_name) {
          setLocation(locationData.country_name);
        }
      }
    };

    fetchLocation();
  }, [location, setLocation]);

  // User Information
  const walletID = 'dfhte5y4htju7erght5';

  return (
    <>
      {currentProjects.length === 0 ? (
        <AddProjectModal />
      ) : (
        <main className="flex flex-col gap-6 px-8 pb-10 pt-4">
          <h1 className="text-center font-bold text-2xl">{selectedProject}</h1>

          <div className="flex max-lg:flex-col items-start gap-8">
            {/* WALLET BALANCE ET AL SECTION */}
            <section className="flex-[0.5] flex flex-col gap-8 max-lg:flex-1 w-full">
              {/* Wallet Balance */}
              <WalletBalance />

              {/* User Information */}
              <div className="bg-white flex flex-col gap-4 p-4 rounded-3xl">
                <h4 className="text-lg font-bold max-sm:text-base">
                  User Information
                </h4>

                <div className="flex gap-1">
                  <span className="flex-[0.3] flex gap-2 items-center  w-full">
                    <FaLocationDot />
                    <p className="text-sm max-sm:text-xs font-medium text-gray-600">
                      Location:
                    </p>
                  </span>

                  <p className="flex-[0.7] text-sm max-sm:text-xs font-semibold w-full">
                    {location ? location : 'Loading...'}
                  </p>
                </div>

                <div className="flex gap-1">
                  <span className="flex-[0.3] flex gap-2 items-center  w-full">
                    <FaAddressBook />
                    <p className="text-sm max-sm:text-xs font-medium text-gray-600">
                      Project:
                    </p>
                  </span>

                  <p className="flex-[0.7] text-sm max-sm:text-xs font-semibold  w-full">
                    {selectedProject}
                  </p>
                </div>

                <div className="flex gap-1">
                  <span className="flex-[0.3] flex gap-2 items-center  w-full">
                    <IoMdWallet />
                    <p className="text-sm max-sm:text-xs font-medium text-gray-600">
                      Wallet ID:
                    </p>
                  </span>

                  <p className="flex-[0.7] text-sm max-sm:text-xs font-semibold  w-full">
                    {walletID}
                  </p>
                </div>
              </div>

              {/* Security */}
              <div className="bg-white flex flex-col gap-4 p-4 rounded-3xl">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold max-sm:text-base">
                    Security
                  </h4>
                  <BsThreeDots size={24} className="cursor-pointer" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="bg-black p-2 rounded-lg">
                      <IoShieldCheckmarkSharp size={14} color="white" />
                    </span>

                    <p className="text-sm max-sm:text-xs font-semibold">
                      2X A Enabled
                    </p>
                  </div>

                  {/* toggle button */}
                  <div
                    className={clsx(
                      'w-10 h-5 border rounded-[50px] cursor-pointer flex items-center justify-between relative',
                      toggle2FA ? 'bg-black' : 'bg-gray-400'
                    )}
                    onClick={() => setToggle2FA((prevState) => !prevState)}
                  >
                    <IoIosCheckmark color="white" size={22} />
                    <div
                      className={clsx(
                        'w-[15px] h-[15px] border rounded-[50%] absolute',
                        toggle2FA ? 'right-px bg-white' : 'left-px bg-gray-300'
                      )}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="bg-gray-300 p-2 rounded-lg">
                      <FaLock size={14} />
                    </span>

                    <p className="text-sm max-sm:text-xs font-semibold">Key</p>
                  </div>

                  <button className="py-1 px-5 rounded-md border border-gray-400 bg-transparent font-normal text-sm max-sm:text-xs transition-all hover:bg-black hover:text-white">
                    Change
                  </button>
                </div>
              </div>
            </section>

            {/* RECENT TRANSACTIONS SECTION */}
            <section className="flex-[0.5] max-lg:flex-1 w-full bg-gray-50 rounded-3xl flex flex-col gap-4 p-4 min-h-[60vh]">
              <h6 className="text-center font-bold text-lg max-md:text-base">
                Recent Transactions
              </h6>

              {/* Recent Transactions Table */}

              <TableData
                tableHeaderColumns={['Curency', 'Quantity', 'Value']}
                tableBodyRows={[
                  { values: ['BNB', 0.1, '100$'] },
                  { values: ['USDT', 100, '100$'] },
                ]}
              />
            </section>
          </div>
        </main>
      )}
    </>
  );
}
