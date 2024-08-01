"use client";

const referralListTableContents = [
  {
    body: ["1", "user 1", "$10", "25-03-2024"],
  },
  {
    body: ["2", "user 2", "$20", "25-04-2024"],
  },
  {
    body: ["3", "user 3", "$40", "25-05-2024"],
  },
  {
    body: ["4", "user 4", "$30", "25-06-2024"],
  },
  {
    body: ["5", "user 5", "$50", "25-07-2024"],
  },
  {
    body: ["6", "user 6", "$70", "25-08-2024"],
  },
  {
    body: ["7", "user 7", "$60", "25-09-2024"],
  },
  {
    body: ["8", "user 8", "$80", "25-10-2024"],
  },
  {
    body: ["9", "user 9", "$90", "25-11-2024"],
  },
  {
    body: ["10", "user 10", "$12", "25-12-2024"],
  },
];

const selectOptions = [
  "Level 1",
  "Level 2",
  "Level 3",
  "Level 4",
  "Level 5",
  "Level 6",
  "Level 7",
  "Level 8",
  "Level 9",
  "Level 10",
];

const TeamPage = () => {
  function goToPreviousPage() {}

  function goToNextPage() {}

  return (
    <main className="flex flex-col min-h-[calc(100vh-80px)] bg-[#464040] max-sm:px-6">
      {/* TEAM SECTION */}
      <div className="bg-[#F29F23] px-8 pt-6 pb-20 max-sm:-mx-6" />

      {/* Referral List */}
      <div className="-mt-16 mx-auto w-[50%] max-xl:w-[70%] max-lg:w-[80%] max-md:w-[90%] max-sm:w-full flex flex-col mb-10">
        {/* header */}
        <div className="bg-[#464040] py-3 px-4 rounded-t-xl flex items-center justify-between gap-2">
          <h6 className="text-white font-semibold text-xl max-sm:text-base text-left">
            Referral List
          </h6>

          <select className="py-1 px-2 max-sm:px-1 rounded-md border-none outline-none font-bold text-base max-sm:text-sm text-black">
            {selectOptions.map((option, index) => (
              <option
                value={option}
                key={index}
                className="text-base max-sm:text-sm text-black"
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* body */}

        <div className="overflow-x-auto rounded-b-xl">
          <table className="table-fixed w-full">
            <thead className="bg-[#5E5959]">
              <tr className="text-white font-bold text-base max-sm:text-sm w-full">
                <th className="py-2 text-start pl-2 w-1/3">S.No</th>
                <th className="py-2 text-start pl-2 w-1/3">User ID</th>
                <th className="py-2 text-start pl-2 w-1/3">Investment</th>
                <th className="py-2 text-start pl-2 w-1/3">Date</th>
              </tr>
            </thead>

            {referralListTableContents.map((tableContent, index) => (
              <tbody key={index} className="bg-[#F4F4F4]">
                <tr className="text-black font-semibold text-base max-sm:text-sm w-full">
                  {tableContent.body.map((tableDescription, index) => (
                    <td
                      key={index}
                      className="py-2 text-start pl-2 overflow-x-auto w-1/3"
                    >
                      <div className="whitespace-nowrap">
                        {tableDescription}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>

      {/* PREVIOUS AND NEXT PAGE BUTTONS */}
      <div className="flex items-center justify-end gap-4 w-[50%] max-xl:w-[70%] max-lg:w-[80%] max-md:w-[90%] max-sm:w-full mx-auto mb-10">
        <button
          onClick={goToPreviousPage}
          className="text-white text-base max-sm:text-sm font-semibold rounded-lg px-4 py-2 bg-stone-800"
        >
          Back
        </button>
        <button
          onClick={goToNextPage}
          className="text-white text-base max-sm:text-sm font-semibold rounded-lg px-4 py-2 bg-stone-800"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default TeamPage;
