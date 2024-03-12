import React from "react";
import {
  ChevronRightIcon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function NotesButton() {
  return (
    <div className="text-white bg-[#141414] p-8 rounded-lg border border-[#080808]">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2 items-center justify-center">
          <h1>Note Title</h1>
          <Badge variant={"secondary"}>New</Badge>
        </div>
        <div>
          <Popover>
            <PopoverTrigger className="p-2 bg-[#080808] rounded border border-inherit border-[#171717]">
              <ChevronRightIcon className="h-4 w-4" />
            </PopoverTrigger>

            <PopoverContent className="bg-[#171717] border-[#242424] w-full">
              <div className="bg-[#171717] flex flex-col gap-y-2 w-full items-start">
                <Button
                  variant="ghost"
                  className="hover:bg-[#242424]  text-white hover:text-zinc-500 gap-x-1"
                >
                  <Pencil1Icon className="h-4 w-4" />
                  Edit
                </Button>
                <Button
                  variant="ghost"
                  className="hover:bg-[#242424] hover:text-red-800 text-red-500 gap-x-1"
                >
                  <TrashIcon className="h-4 w-4" />
                  Delete
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="py-5">
        <p className="text-sm text-zinc-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iste
          quos est facere dolore natus illo, nostrum ut earum expedita accusamus
          vero fuga ab commodi cupiditate accusantium ipsum quas nulla.
        </p>
      </div>

      <div className="mt-2 flex justify-between items-center">
        <div className="flex items-center gap-x-1">
          <Avatar className="w-6 h-6">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>GW</AvatarFallback>
          </Avatar>
          <p className="text-zinc-500 font-semibold text-sm">Gweep Creative</p>
        </div>
        <div>
          <p className="text-zinc-500 text-sm font-semibold">2 days ago</p>
        </div>
      </div>
    </div>
  );
}
