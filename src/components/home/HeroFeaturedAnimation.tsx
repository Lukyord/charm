"use client";

import React from "react";

import { Button } from "../ui/button";
import { useActiveHeroTab } from "@/context/useActiveHeroTab";

export default function HeroFeaturedAnimation() {
  const { setActiveTab } = useActiveHeroTab();

  return (
    <div className="h-full w-full">
      animation
      <Button onClick={() => setActiveTab(1)}>back</Button>
    </div>
  );
}
