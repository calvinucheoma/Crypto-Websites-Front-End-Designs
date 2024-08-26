"use client";

import { useEffect, useState } from "react";
import { GlobalProvider } from "../context/globalProvider";

const ContextProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsReady(true), 200);
  }, []);

  if (!isReady) {
    return (
      <div className="w-[100vw] h-[100vh] flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  return <GlobalProvider>{children}</GlobalProvider>;
};

export default ContextProvider;
