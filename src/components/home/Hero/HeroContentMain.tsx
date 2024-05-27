import React from "react";

import HeroButton from "./HeroButton";

export default function HeroContentMain() {
  return (
    <div
      className="
                mx-auto flex h-full 
                w-[85%] flex-col justify-center
              "
    >
      <div className="flex items-center justify-between">
        <p
          className="
                  hidden font-neue-hass-grotesk-light text-white 
                  sm:block lg:text-[13px] xl:text-subtitle
                "
        >
          Open Source
        </p>
        <HeroButton />
      </div>

      <h1
        className="
                  lg:medium-h2 xl:medium-h1 font-neue-hass-grotesk-medium 
                  text-[56px] text-white
                "
      >
        The Charms <br />
        of Web Animations
      </h1>
      <p className="lg:roman-p xl:roman-h3 w-full text-white sm:w-[70%]">
        Your go-to hub for curated frontend animations, handpicked to enhance
        workflow and foster growth.
      </p>
    </div>
  );
}
