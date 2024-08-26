"use client";

import { useGlobalState } from "@/app/context/globalProvider";

const HistoryPage = () => {
  const { user } = useGlobalState();

  if (!user) {
    return router.push("/");
  }

  return <div className="text-white">HistoryPage</div>;
};

export default HistoryPage;
