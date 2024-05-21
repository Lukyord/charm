"use client";

import { useState } from "react";

import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Search() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`
                flex items-center px-4 ${open ? "mr-auto" : "ml-auto"}
            `}
    >
      <HiMagnifyingGlass
        className="text-white text-[30px]"
        onClick={() => setOpen((prev) => !prev)}
      />
    </div>
  );
}
