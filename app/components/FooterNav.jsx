"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaCoins, FaHistory } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { useGlobalState } from "../context/globalProvider";

const FooterNav = () => {
  const { userReferralId } = useGlobalState();

  const router = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  const footerLinks = [
    {
      route: "Home",
      href: "/dashboard/home",
      Icon: IoIosHome,
    },
    {
      route: "Earnings",
      href: `/dashboard/earnings?userId=${userReferralId}`,
      Icon: FaCoins,
    },
    {
      route: "History",
      href: "/dashboard/history",
      Icon: FaHistory,
    },
  ];

  const isCurrentPath = (href) => {
    const url = new URL(href, window.location.origin);
    return (
      pathname === url.pathname &&
      searchParams.toString() === url.searchParams.toString()
    );
  };

  return (
    <footer className="fixed bottom-0 w-full grid grid-cols-3 z-[90]">
      {footerLinks.map(({ route, href, Icon }, index) => (
        <div
          key={index}
          onClick={() => router.push(href)}
          className={`flex items-center justify-center gap-2 border py-2 cursor-pointer ${
            isCurrentPath(href) ? "bg-slate-500" : "bg-slate-800"
          }`}
        >
          <Icon color="white" className="text-[22px] max-sm:text-[14px]" />
          <p className="text-white font-bold text-lg max-sm:text-sm">{route}</p>
        </div>
      ))}
    </footer>
  );
};

export default FooterNav;
