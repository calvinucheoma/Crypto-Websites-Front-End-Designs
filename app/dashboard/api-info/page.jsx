'use client';

import AddProjectModal from '@/app/components/modals/AddProjectModal';
import useCurrentUser from '@/app/hooks/useCurrentUser';
import { useEffect } from 'react';

const ApiInfoPage = () => {
  const { currentProjects, selectedProject, setSelectedProject, currentUser } =
    useCurrentUser();

  // console.log(currentUser);

  useEffect(() => {
    // Ensure selectedProject is set when component mounts
    if (currentProjects.length > 0 && !selectedProject) {
      setSelectedProject(currentProjects[0]);
    }
  }, [currentProjects, selectedProject, setSelectedProject]);

  const createdOn = '12-05-2024';

  const depositAddress = 'njrfejhdu3hdwnjkfe3j';

  const ccaWalletAddress = 'frjnfehfejnenvrvvgffffffffffffffffffffffffffffffb';

  const apiCode1 = 'fbejheujffhefbejf';

  const apiCode2 = 'jhebefuhefjedi3hrffnhe3';

  // Copy Referral Link Function
  //   const copyToClipboard = async (text) => {
  //     try {
  //       await navigator.clipboard.writeText(text);
  //       setCopySuccess("Copied!");
  //     } catch (err) {
  //       setCopySuccess("Failed to copy!");
  //     }
  //   };
  async function copyReferralLink(text) {
    await navigator.clipboard.writeText(text);
    alert(`Text copied to clipboard: ${text}`);
  }

  return (
    <>
      {currentProjects.length === 0 ? (
        <AddProjectModal />
      ) : (
        <main className="flex flex-col gap-6 px-8 pb-10 pt-4">
          <h1 className="text-center font-bold text-2xl">{selectedProject}</h1>

          {/* API KEY INFO */}
          <div className="flex flex-col gap-6 bg-white rounded-3xl min-h-[80vh] py-8 px-8 max-md:px-4">
            <h4 className="text-xl font-bold max-sm:text-lg">API KEY INFO</h4>

            {/* API Key Details */}
            <div className="flex flex-col gap-3 justify-start mb-10">
              {/* Created On */}
              <span className="flex items-center gap-1">
                <p className="flex-[0.3] max-sm:flex-[0.5] font-medium text-base max-sm:text-sm">
                  Created On:
                </p>
                <p className="flex-[0.7] max-sm:flex-[0.5] font-semibold text-base max-sm:text-sm w-full overflow-x-auto">
                  {createdOn}
                </p>
              </span>

              {/* Email */}
              <span className="flex items-center gap-1">
                <p className="flex-[0.3] max-sm:flex-[0.5] font-medium text-base max-sm:text-sm">
                  Email:
                </p>
                <p className="flex-[0.7] max-sm:flex-[0.5] font-semibold text-base max-sm:text-sm w-full overflow-x-auto">
                  {currentUser && currentUser.email ? currentUser.email : ''}
                </p>
              </span>

              {/* Project Name */}
              <span className="flex items-center gap-1">
                <p className="flex-[0.3] max-sm:flex-[0.5] font-medium text-base max-sm:text-sm">
                  Project Name:
                </p>
                <p className="flex-[0.7] max-sm:flex-[0.5] font-semibold text-base max-sm:text-sm w-full overflow-x-auto">
                  {selectedProject}
                </p>
              </span>

              {/* Deposit Address */}
              <span className="flex items-center gap-1">
                <p className="flex-[0.3] max-sm:flex-[0.5] font-medium text-base max-sm:text-sm">
                  Deposit Address:
                </p>
                <p className="flex-[0.7] max-sm:flex-[0.5] font-semibold text-base max-sm:text-sm w-full overflow-x-auto">
                  {depositAddress}
                </p>
              </span>

              {/* CCA Wallet Address */}
              <span className="flex items-center gap-1">
                <p className="flex-[0.3] max-sm:flex-[0.5] font-medium text-base max-sm:text-sm">
                  CCA Wallet Address:
                </p>
                <p className="flex-[0.7] max-sm:flex-[0.5] font-semibold text-base max-sm:text-sm w-full overflow-x-auto">
                  {ccaWalletAddress}
                </p>
              </span>
            </div>

            {/* CCA API COPY CODE */}
            <div className="flex flex-col gap-2 justify-start">
              {/* Header */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">CCA API</p>
                <button className="cursor-pointer text-sm font-medium border rounded-lg transition bg-gray-200 p-2 hover:text-gray-500 hover:bg-gray-100">
                  Add IP Restrictions
                </button>
              </div>

              {/* Copy API Code Section */}
              <div className="flex flex-col gap-6 bg-gray-200 border rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{apiCode1}</p>
                  <p
                    className="text-sm font-semibold max-sm:text-xs cursor-pointer"
                    onClick={() => copyReferralLink(apiCode1)}
                  >
                    COPY
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{apiCode2}</p>
                  <p
                    className="text-sm font-semibold max-sm:text-xs cursor-pointer"
                    onClick={() => copyReferralLink(apiCode2)}
                  >
                    COPY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default ApiInfoPage;
