"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const navRoutes = [
    {
      route: "Home",
      href: "/",
    },
    {
      route: "Dashboard",
      href: "/dashboard/home",
    },
  ];

  return (
    <nav className="flex items-center justify-between p-4 bg-[rgba(5,5,25,0.6)] w-full">
      <h1 className="font-bold text-2xl text-white max-sm:text-lg">NEONEX</h1>
      {/* NAV MENU */}

      <div className="relative">
        <BiMenu
          size={32}
          color="white"
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && (
          <div className="absolute bg-white top-10 right-2 px-8 py-4 text-black rounded-lg transition z-[99] border-2 shadow-lg border-gray-900">
            {navRoutes.map((navRoute, index) => (
              <p
                key={index}
                className="text-base max-sm:text-sm font-semibold hover:underline cursor-pointer transition px-3 py-2 w-full"
                onClick={() => {
                  router.push(navRoute.href);
                  setIsOpen(false);
                }}
              >
                {navRoute.route}
              </p>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
