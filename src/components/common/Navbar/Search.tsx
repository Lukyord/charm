"use client";

import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import "./Search.css";
import Link from "next/link";

const mockData = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const FormSchema = z.object({
  search: z.string().min(2, {
    message: "Search input must be at least 2 characters.",
  }),
});

export default function Search() {
  const [open, setOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [filteredData, setFilteredData] = useState(mockData);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search: "",
    },
  });

  useEffect(() => {
    const subscription = form.watch((value) => {
      const searchText = value.search?.toLowerCase() || "";
      const newFilteredData = mockData.filter((data) =>
        data.label.toLowerCase().includes(searchText)
      );
      setFilteredData(newFilteredData);
    });

    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <Popover open={open}>
      <PopoverTrigger asChild>
        <div
          className={`
                flex items-center transition-all duration-300
                ${cn({
                  "search-animation": open,
                  "ml-auto": !open,
                })}
            `}
        >
          {open && (
            <Form {...form}>
              <form className="w-full">
                <FormField
                  control={form.control}
                  name="search"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Search Animation..."
                          autoComplete="off"
                          onFocus={() => setIsFocused(true)}
                          onBlur={(e) => {
                            if (
                              !e.relatedTarget ||
                              e.relatedTarget.tagName !== "DIV"
                            ) {
                              setIsFocused(false);
                            }
                          }}
                          className="roman-subtitle placeholder:roman-subtitle py-1 px-0 w-[95%] mx-auto border-b-[1px] border-white bg-transparent rounded-none text-white placeholder:text-white focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 "
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          )}
          {!open ? (
            <HiMagnifyingGlass
              className="text-white text-[30px]"
              onClick={() => setOpen((prev) => !prev)}
            />
          ) : (
            <RxCross1
              onClick={() => {
                setOpen((prev) => !prev);
                setIsFocused(false);
              }}
              className="text-white text-[30px]"
            />
          )}
        </div>
      </PopoverTrigger>
      {isFocused && open && (
        <PopoverContent
          className="w-full"
          align="start"
          alignOffset={30}
          onMouseDown={(e) => e.preventDefault()}
        >
          <ScrollArea className="h-fit w-[350px] rounded-md border p-4">
            {filteredData.length > 0 ? (
              filteredData.map((data, i) => (
                <React.Fragment key={data.value}>
                  <Link
                    href={`/${data.value}`}
                    className="light-subtitle w-full"
                  >
                    {data.label}
                  </Link>
                  {i !== filteredData.length - 1 && (
                    <Separator className="my-2" />
                  )}
                </React.Fragment>
              ))
            ) : (
              <div className="text-sm">No results found</div>
            )}
          </ScrollArea>
        </PopoverContent>
      )}
    </Popover>
  );
}
