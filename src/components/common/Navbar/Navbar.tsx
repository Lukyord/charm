import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Images } from "@/constant/Images";
import { RxHamburgerMenu } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import Search from "./Search";
import Link from "next/link";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export default function Navbar() {
  return (
    <div
      className="
                absolute left-0 right-0 mx-auto flex
                h-[10vh] w-[90vw] items-center 
                justify-between gap-8
            "
    >
      {/* ---- LOGO ---- */}
      <div className="flex items-center">
        <Image
          src={Images.CharmLogoWhite}
          alt="charm logo"
          className="size-[50px] sm:size-[75px]"
        />
        <p className="font-futura text-[24px] font-medium tracking-wider text-white sm:text-[36px]">
          Charm
        </p>
      </div>

      {/* ----- Search ----- */}
      <Search type="white" hidden />

      {/* ----- Links ----- (Large Screen) */}
      <div className="hidden sm:block">
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

      {/* ----- Links ----- (Small Screen) */}
      <div className="block sm:hidden">
        <Drawer>
          <DrawerTrigger>
            <RxHamburgerMenu size={24} color="white" />
          </DrawerTrigger>
          <DrawerContent className="pt- min-h-[300px] p-8">
            <Search type="black" />
            <SignedIn>
              <div className="mt-4 flex flex-col gap-4">
                <UserButton afterSignOutUrl="/" />
                <Link href="/create" className="light-p text-black">
                  Create
                </Link>
                <Link href="/feed" className="light-p text-black">
                  Feed
                </Link>
              </div>
            </SignedIn>
            <SignedOut>
              <div className="mt-4">
                <SignInButton mode="modal">
                  <Button variant="secondary">Connect</Button>
                </SignInButton>
              </div>
            </SignedOut>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
