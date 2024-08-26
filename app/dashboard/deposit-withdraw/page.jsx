'use client';

import AddProjectModal from '@/app/components/modals/AddProjectModal';
import TableData from '@/app/components/TableData';
import useCurrentUser from '@/app/hooks/useCurrentUser';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const DepositWithdrawPage = () => {
  const [depositSectionDetails, setDepositSectionDetails] = useState('deposit');

  const { currentProjects, selectedProject, setSelectedProject } =
    useCurrentUser();

  useEffect(() => {
    // Ensure selectedProject is set when component mounts
    if (currentProjects.length > 0 && !selectedProject) {
      setSelectedProject(currentProjects[0]);
    }
  }, [currentProjects, selectedProject, setSelectedProject]);

  return (
    <>
      {currentProjects.length === 0 ? (
        <AddProjectModal />
      ) : (
        <main className="flex flex-col gap-6 px-8 pb-10 pt-4">
          <h1 className="text-center font-bold text-2xl">{selectedProject}</h1>

          <div className="flex flex-col gap-6 bg-gray-50 rounded-3xl min-h-[80vh] py-8 px-8 max-md:px-2">
            {/* Deposit-Withdraw Section Togglers */}
            <div className="flex items-center mb-12 w-[85%] mx-auto">
              {/* Deposit */}
              <div
                className={clsx(
                  'flex-[0.5] p-[10px] cursor-pointer border rounded-tl-xl rounded-bl-xl',
                  depositSectionDetails === 'deposit'
                    ? 'bg-black'
                    : 'bg-gray-200'
                )}
                onClick={() => setDepositSectionDetails('deposit')}
              >
                <p
                  className={clsx(
                    'font-semibold text-sm text-center',
                    depositSectionDetails === 'deposit' && 'text-white'
                  )}
                >
                  Deposit
                </p>
              </div>
              {/* Withdraw */}
              <div
                className={clsx(
                  'flex-[0.5] p-[10px] cursor-pointer border rounded-tr-xl rounded-br-xl',
                  depositSectionDetails === 'withdraw'
                    ? 'bg-black'
                    : 'bg-gray-200'
                )}
                onClick={() => setDepositSectionDetails('withdraw')}
              >
                <p
                  className={clsx(
                    'font-semibold text-sm text-center',
                    depositSectionDetails === 'withdraw' && 'text-white'
                  )}
                >
                  Withdraw
                </p>
              </div>
            </div>

            {/* DEPOSIT-WITHDRAW SECTION DETAILS */}

            {depositSectionDetails === 'deposit' ? (
              <>
                <TableData
                  tableHeaderColumns={[
                    'Currency',
                    'Transaction ID',
                    'Quantity',
                    'Value',
                  ]}
                  tableBodyRows={[
                    { values: ['BNB', 'vbht45y3gh5y', 0.1, '100$'] },
                    { values: ['USDT', 'grehrgntjyj', 1000, '1000$'] },
                  ]}
                />
              </>
            ) : (
              <>
                <TableData
                  tableHeaderColumns={[
                    'Currency',
                    'Transaction ID',
                    'Quantity',
                    'Value',
                  ]}
                  tableBodyRows={[
                    { values: ['BNB', 'sfegrhthyjyh', 0.3, '20$'] },
                    { values: ['USDT', 'wdwfefgrg', 500, '60$'] },
                  ]}
                />
              </>
            )}
          </div>
        </main>
      )}
    </>
  );
};

export default DepositWithdrawPage;
