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
            flex h-full w-[200vw] transition-transform duration-300 
            ${cn({
              "translate-x-0": activeTab === 1,
              "-translate-x-1/2": activeTab === 2,
            })}
        `}
      >
        <div className="w-[100vw]">{childrenArray[0]}</div>
        <div className="w-[100vw]">{childrenArray[1]}</div>
      </div>
    </div>
  );
}
