"use client";

import React from "react";

import { useActiveHeroTab } from "@/context/useActiveHeroTab";
import { BsArrowUpRight } from "react-icons/bs";

export default function HeroButton() {
  const { setActiveTab } = useActiveHeroTab();

  return (
    <button
      onClick={() => setActiveTab("animation of the day")}
      className="
            group mb-[10vh]
            flex items-center gap-4 
            font-neue-hass-grotesk-light text-white sm:mb-0
            lg:text-[13px] xl:text-subtitle
        "
    >
      <p>Animation of the Day</p>
      <div
        className="
                relative flex size-[50px]
                items-center justify-center overflow-hidden 
                rounded-full border border-white 
                lg:size-[60px] xl:size-[70px]
            "
      >
        <BsArrowUpRight
          className="
                ease-in-out-quint l size-[16px] 
                h-full w-full transition-all duration-300
                group-hover:translate-x-[calc(100%+16px)] group-hover:translate-y-[calc(-100%-16px)]
                lg:size-[20px]
                lg:group-hover:translate-x-[calc(100%+20px)] lg:group-hover:translate-y-[calc(-100%-20px)]
                xl:size-[24px]
                xl:group-hover:translate-x-[calc(100%+24px)] xl:group-hover:translate-y-[calc(-100%-24px)]
            "
        />
        <BsArrowUpRight
          className="
                ease-in-out-quint absolute right-[100%] top-[100%] 
                size-[16px] h-full w-full transition-all
                duration-300 
                group-hover:translate-x-[calc(100%+16px)] group-hover:translate-y-[calc(-100%-16px)]
                lg:size-[20px]
                lg:group-hover:translate-x-[calc(100%+20px)] lg:group-hover:translate-y-[calc(-100%-20px)]
                xl:size-[24px]
                xl:group-hover:translate-x-[calc(100%+24px)] xl:group-hover:translate-y-[calc(-100%-24px)]
                
            "
        />
      </div>
    </button>
  );
}
