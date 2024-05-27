"use client";

import React, { createContext, useContext, useState } from "react";

type ActiveHeroTabType = {
  activeTab: 1 | 2;
  setActiveTab: React.Dispatch<React.SetStateAction<1 | 2>>;
};

export const ActiveHeroTabContext = createContext<ActiveHeroTabType | null>(
  null,
);

const ActiveHeroTabContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeTab, setActiveTab] = useState<1 | 2>(1);

  return (
    <ActiveHeroTabContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </ActiveHeroTabContext.Provider>
  );
};

export const useActiveHeroTab = () => {
  const context = useContext(ActiveHeroTabContext);

  if (context === null) {
    throw new Error(
      "useActiveHeroTab must be used within ActiveProductContextProvider",
    );
  }

  return context;
};

export default ActiveHeroTabContextProvider;
