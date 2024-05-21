import Image from "next/image";

import { HiMagnifyingGlass } from "react-icons/hi2";
import { Images } from "@/constant/Images";

import { Button } from "@/components/ui/button";
import Search from "./Search";

export default function Navbar() {
  return (
    <div
      className="
                absolute w-[90vw] mx-auto left-0 right-0
                flex items-center gap-4
            "
    >
      <div className="flex items-center">
        <Image
          src={Images.CharmLogoWhite}
          alt="charm logo"
          className="size-[75px]"
        />
        <p className="font-futura text-[36px] tracking-wider text-white font-medium">
          Charm
        </p>
      </div>
      <Search />
      <div>
        <Button variant="secondary">Connect</Button>
      </div>
    </div>
  );
}
