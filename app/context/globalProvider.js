"use client";

import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Fetch user info from backend and update it here. Set to null at beginning and then update it in a function when data is fetched
  const [user, setUser] = useState("IK");
  const [userReferralId, setUserReferralId] = useState("IK2uhd3irr3ij");

  const [isLoading, setIsLoading] = useState(false);

  return (
    <GlobalContext.Provider value={{ user, userReferralId }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
