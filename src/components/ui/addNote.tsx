"use client";
import React, { useState } from "react";
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
import axios from "axios";
import { useToast } from "./use-toast";
import { INote } from "@/db/Models/Notes";
export default function AddNote() {
  const [noteTitle, setNoteTitle] = useState<string>();
  const [noteContent, setNoteContent] = useState<string>();
  const { toast } = useToast();
  async function newNote() {
    await axios
      .post("/api/note", {
        title: noteTitle,
        content: noteContent,
        author: {
          name: "Grkn",
          email: "info@rabelcode.net",
          avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
        },
      })
      .then((res) => {
        if (res.data.success) {
          toast({
            title: "Note added",
            description: "Your note has been added successfully",
          });
          window.location.reload();
        } else {
          toast({
            title: "Error",
            description: res.data.error,
          });
        }
      });
  }
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
              onChange={(e) => {
                setNoteTitle(e.target.value);
              }}
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
              onChange={(e) => setNoteContent(e.target.value)}
              className="col-span-3 border-[#363636]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => newNote()}
            className="bg-[#080808] hover:bg-[#141414]"
            type="submit"
          >
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
