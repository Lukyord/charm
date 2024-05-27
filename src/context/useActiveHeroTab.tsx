"use client";

import React, { createContext, useContext, useState } from "react";

type HeroTabs = "main" | "animation of the day";

type ActiveHeroTabType = {
  activeTab: HeroTabs;
  setActiveTab: React.Dispatch<React.SetStateAction<HeroTabs>>;
};

export const ActiveHeroTabContext = createContext<ActiveHeroTabType | null>(
  null,
);

const ActiveHeroTabContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeTab, setActiveTab] = useState<HeroTabs>("main");

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
