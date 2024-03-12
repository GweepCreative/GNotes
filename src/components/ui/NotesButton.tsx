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
import { INote } from "@/db/Models/Notes";
import moment from "moment";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

export default function NotesButton({ note }: { note: INote }) {
  const { toast } = useToast();
  const deleteNote = async (id: string) => {
    const res = await axios.delete(`/api/note`, {
      data: {
        id,
      },
    });
    if (res.data.success) {
      toast({
        title: "Note deleted",
        description: "Your note has been deleted successfully",
      });
      window.location.reload();
    } else {
      return toast({
        title: "Error",
        description: res.data.error,
      });
    }
  };
  return (
    <div
      key={note._id}
      className="text-white bg-[#141414] p-8 rounded-lg border border-[#080808]"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2 items-center justify-center">
          <h1>{note.title}</h1>
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
                  onClick={() => {
                    deleteNote(note._id);
                  }}
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
        <p className="text-sm text-zinc-500">{note.content}</p>
      </div>

      <div className="mt-2 flex justify-between items-center">
        <div className="flex items-center gap-x-1">
          <Avatar className="w-6 h-6">
            <AvatarImage src={note.author.avatar} />
            <AvatarFallback>{note.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <p className="text-zinc-500 font-semibold text-sm">
            {note.author.name}
          </p>
        </div>
        <div>
          <p className="text-zinc-500 text-sm font-semibold">
            {moment(note.createdAt).format("D MMM YY dddd HH:mm")}
          </p>
        </div>
      </div>
    </div>
  );
}
