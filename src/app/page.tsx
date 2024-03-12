"use client";
import NotesButton from "@/components/ui/NotesButton";
import AddNote from "@/components/ui/addNote";
import { Badge } from "@/components/ui/badge";
import SortButton from "@/components/ui/sortButton";
import { INote } from "@/db/Models/Notes";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState<INote[]>();

  async function getNotes() {
    const res = await axios.get("/api/note");
    return res.data.data;
  }
  useEffect(() => {
    getNotes().then((data) => setNotes(data));
  }, []);

  return (
    <main className="bg-[#171717] dark flex min-h-screen  flex-col items-center justify-start p-24">
      <div className="w-1/2">
        <div className="flex justify-between  items-center">
          <h1 className="font-bold text-4xl text-white">GNotes</h1>
          <div className="flex gap-x-4">
            <SortButton />
            <AddNote />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-y-4">
          <div className="flex gap-x-2">
            <h2 className="text-white">Recently added notes</h2>
            <Badge variant="outline">{notes?.length}</Badge>
          </div>

          {notes &&
            notes.map((note: INote, index: number) => (
              <NotesButton key={index} note={note} />
            ))}
        </div>
      </div>
    </main>
  );
}
