import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Images } from "@/constant/Images";
import { RxHamburgerMenu } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import Search from "./Search";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Navbar() {
  return (
    <div
      className="
                absolute w-[90vw] mx-auto left-0 right-0
                flex items-center gap-8 justify-between
                mt-4 sm:mt-0
            "
    >
      {/* ---- LOGO ---- */}
      <div className="flex items-center">
        <Image
          src={Images.CharmLogoWhite}
          alt="charm logo"
          className="size-[50px] sm:size-[75px]"
        />
        <p className="font-futura text-[24px] sm:text-[36px] tracking-wider text-white font-medium">
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
          <DrawerContent className="p-8 pt- min-h-[300px]">
            <Search type="black" />
            <SignedIn>
              <div className="flex flex-col gap-4 mt-4">
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
