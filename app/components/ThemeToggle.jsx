"use client";

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className="w-10 h-5 border rounded-[50px] cursor-pointer flex items-center justify-between relative"
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f127a" }
      }
    >
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        className="w-[15px] h-[15px] border rounded-[50%] absolute"
        style={
          theme === "dark"
            ? { left: 1, background: "#0f127a" }
            : { right: 1, background: "white" }
        }
      />
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
