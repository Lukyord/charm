import React from "react";

import HeroTabs from "./HeroTabs";
import ActiveHeroTabContextProvider from "@/context/useActiveHeroTab";
import HeroFeaturedAnimation from "./HeroFeaturedAnimation";
import HeroContentMain from "./HeroContentMain";

import "./Hero.css";

export default function Hero() {
  return (
    <div className="pt-[10vh]">
      <ActiveHeroTabContextProvider>
        <HeroTabs>
          <HeroContentMain />
          <HeroFeaturedAnimation />
        </HeroTabs>
      </ActiveHeroTabContextProvider>
    </div>
  );
}
