"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(pathname);

  const [screenSize, setScreenSize] = useState(28);
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  const navRoutes = [
    {
      route: "Dashboard",
      href: "/dashboard",
    },
    {
      route: "Investments",
      href: "/investments",
    },
    {
      route: "Subscriptions",
      href: "/subscription-history",
    },
    {
      route: "Referrals",
      href: "/referral-history",
    },
    {
      route: "Team",
      href: "/team",
    },
  ];

  // connect wallet function
  const connectWallet = () => {
    if (pathname === "/") {
      router.push("/dashboard");
    }
  };

  useEffect(() => {
    setScreenSize(isSmallScreen ? 24 : 28);
  }, [isSmallScreen]);

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 flex items-center justify-between px-6 h-20 max-sm:px-4",
        pathname === "/" ? "bg-black" : "bg-[#302d2d]"
      )}
    >
      <h1 className="text-2xl max-md:text-lg font-bold">
        <span className="text-white">PV</span>
        <span className="text-[#f29f23d5]">BOT</span>
      </h1>

      <div className="flex items-center gap-5">
        <button
          className="text-black bg-[#F29F23] rounded-md py-2 px-4 font-bold max-sm:text-sm max-sm:px-2 max-sm:py-1"
          onClick={connectWallet}
        >
          {pathname === "/" ? "Connect wallet" : "Connected"}
        </button>
        {pathname === "/" ? null : (
          <div
            className="relative p-1 border-none bg-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <CiMenuFries size={screenSize} color="black" />

            {isOpen && (
              <div className="absolute bg-white top-12 right-0 px-8 py-4 text-black rounded-lg transition z-[99] shadow-lg max-sm:px-4 max-sm:py-2">
                {navRoutes.map((navRoute, index) => (
                  <p
                    key={index}
                    className={clsx(
                      "text-base max-sm:text-sm font-semibold hover:underline cursor-pointer transition-all px-3 py-2 w-full",
                      activeLink === navRoute.href
                        ? "text-blue-400 underline"
                        : ""
                    )}
                    onClick={() => {
                      router.push(navRoute.href);
                      setActiveLink(navRoute.href);
                      setIsOpen(false);
                    }}
                  >
                    {navRoute.route}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
