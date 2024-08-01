"use client";

const subscriptionHistoryTableContents = [
  {
    body: ["1", "test 1", "fghttbfwf"],
  },
  {
    body: ["2", "test 2", "fsbgjfykdtfgtdhy"],
  },
  {
    body: ["3", "test 3", "fhrjy7etwt4y5y"],
  },
  {
    body: ["4", "test 4", "rgejhdwifdnkwjihrnw"],
  },
  {
    body: ["5", "test 5", "rgejhdwifdnkwjihrnw"],
  },
  {
    body: ["6", "test 6", "rgejhdwifdnkwjihrnw"],
  },
  {
    body: ["7", "test 7", "rgejhdwifdnkwjihrnw"],
  },
  {
    body: ["8", "test 8", "rgejhdwifdnkwjihrnw"],
  },
  {
    body: ["9", "test 9", "rgejhdwifdnkwjihrnw"],
  },
  {
    body: ["10", "test 10", "rgejhdwifdnkwjihrnw"],
  },
];

const SubscriptionHistoryPage = () => {
  function goToPreviousPage() {}

  function goToNextPage() {}

  return (
    <main className="flex flex-col min-h-[calc(100vh-80px)] bg-[#464040] max-sm:px-6">
      {/* SUBSCRIPTIONS SECTION */}
      <div className="bg-[#F29F23] px-8 pt-6 pb-20 max-sm:-mx-6" />

      {/* Subscription History */}
      <div className="-mt-16 mx-auto w-[50%] max-xl:w-[70%] max-lg:w-[80%] max-md:w-[90%] max-sm:w-full flex flex-col mb-10">
        {/* header */}
        <div className="bg-[#464040] py-3 px-4 rounded-t-xl">
          <h6 className="text-white font-semibold text-xl max-sm:text-base text-left">
            Subscription History
          </h6>
        </div>

        {/* body */}

        <div className="overflow-x-auto rounded-b-xl">
          <table className="table-fixed w-full">
            <thead className="bg-[#5E5959]">
              <tr className="text-white font-bold text-base max-sm:text-sm w-full">
                <th className="py-2 text-start pl-2 w-1/3">S.No</th>
                <th className="py-2 text-start pl-2 w-1/3">Subscription</th>
                <th className="py-2 text-start pl-2 w-1/3">PV Tokens</th>
              </tr>
            </thead>

            {subscriptionHistoryTableContents.map((tableContent, index) => (
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

export default SubscriptionHistoryPage;
