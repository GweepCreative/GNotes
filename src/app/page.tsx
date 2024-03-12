import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

export default function Home() {
  return (
    <main className="bg-[#171717] dark flex min-h-screen  flex-col items-center justify-start p-24">
      <div className="w-1/2">
        <div className="flex justify-between  items-center">
          <h1 className="font-bold text-4xl text-white">GNotes</h1>
          <div className="flex gap-x-4">
            <Button className="bg-transparent hover:bg-[#212121] border border-[#363636] text-white flex gap-x-2">
              <FilterIcon />
              Sort
            </Button>

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
                  <Button
                    className="bg-[#080808] hover:bg-[#141414]"
                    type="submit"
                  >
                    Add Note
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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

function NotesButton() {
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
function FilterIcon() {
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
        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
      />
    </svg>
  );
}
