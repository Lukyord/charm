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
            mb-[10vh] flex
            items-center gap-4 font-neue-hass-grotesk-light 
            text-white sm:mb-0
            lg:text-[13px] xl:text-subtitle
        "
    >
      <p>Animation of the Day</p>
      <div
        className="
                flex items-center justify-center 
                rounded-full border border-white 
                p-3 lg:p-4 xl:p-5
            "
      >
        <BsArrowUpRight className="size-[16px] lg:size-[20px] xl:size-[24px]" />
      </div>
    </button>
  );
}
