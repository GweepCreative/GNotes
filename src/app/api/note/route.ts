import Notes, { INote } from "@/db/Models/Notes";
import dbConnect from "@/db/MongoClient";

export async function GET() {
  await dbConnect();
  const notes = await Notes.find({});
  return new Response(JSON.stringify({ data: notes }));
}

export async function POST(request: Request) {
  await dbConnect();
  const body: INote = await request.json();
  const note = await Notes.create({
    title: body.title,
    content: body.content,
    author: body.author,
    createdAt: new Date(),
  });
  return new Response(JSON.stringify({ success: true, data: note }));
}
export async function PUT() {}

export async function DELETE(request: Request) {
  await dbConnect();
  const body = await request.json();
  await Notes.findByIdAndDelete(body.id);
  return new Response(JSON.stringify({ success: true }));
}
