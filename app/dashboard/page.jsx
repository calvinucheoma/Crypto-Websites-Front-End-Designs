"use client";

import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();

  return router.push("/dashboard/home");
};

export default DashboardPage;
