import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./button";
export default function AddNote() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 hover:bg-blue-600 border border-[#363636] text-white flex gap-x-2">
          <PlusIcon />
          Add a new notes
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#171717] border border-[#363636] text-white">
        <DialogHeader>
          <DialogTitle>Add new note</DialogTitle>
          <DialogDescription>
            To add a new note, fill in the blanks below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="name"
              placeholder="Enter note title"
              className="col-span-3 border-[#363636]"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Note
            </Label>
            <Textarea
              placeholder="Enter note content"
              className="col-span-3 border-[#363636]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button className="bg-[#080808] hover:bg-[#141414]" type="submit">
            Add Note
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}
