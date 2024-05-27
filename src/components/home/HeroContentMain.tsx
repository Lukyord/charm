"use client";

import React from "react";

import { Button } from "../ui/button";
import { useActiveHeroTab } from "@/context/useActiveHeroTab";

export default function HeroContentMain() {
  const { setActiveTab } = useActiveHeroTab();

  return (
    <div className="h-full w-full">
      main
      <Button onClick={() => setActiveTab(2)}>Animation of the day</Button>
    </div>
  );
}
