import NotesButton from "@/components/ui/NotesButton";
import AddNote from "@/components/ui/addNote";
import { Badge } from "@/components/ui/badge";
import SortButton from "@/components/ui/sortButton";

export default function Home() {
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
            <Badge variant="outline">2</Badge>
          </div>

          <NotesButton />
          <NotesButton />
        </div>
      </div>
    </main>
  );
}
