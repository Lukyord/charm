import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Images } from "@/constant/Images";

import { Button } from "@/components/ui/button";
import Search from "./Search";
import Link from "next/link";

export default function Navbar() {
  return (
    <div
      className="
                absolute w-[90vw] mx-auto left-0 right-0
                flex items-center gap-8
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
      <SignedIn>
        <div className="flex items-center gap-8">
          <Link href="/create" className="light-p text-white">
            Create
          </Link>
          <Link href="/feed" className="light-p text-white">
            Feed
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="secondary">Connect</Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}
