"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { useActiveHeroTab } from "@/context/useActiveHeroTab";

export default function HeroTabs({ children }: { children: React.ReactNode }) {
  const { activeTab } = useActiveHeroTab();
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="h-full w-full overflow-hidden">
      <div
        className={`
            ease-in-out-quint flex h-full w-[200vw] transition-all 
            duration-700
            ${cn({
              "translate-x-0": activeTab === "main",
              "-translate-x-1/2": activeTab === "animation of the day",
            })}
        `}
        style={{}}
      >
        <div className="h-[90vh] w-[100vw]">{childrenArray[0]}</div>
        <div className="h-[90vh] w-[100vw]">{childrenArray[1]}</div>
      </div>
    </div>
  );
}
