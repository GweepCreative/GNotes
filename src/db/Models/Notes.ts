import mongoose from "mongoose";

export interface INote extends mongoose.Document {
  title: string;
  content: string;
  author: {
    name: string;
    email: string;
    avatar: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const NoteSchema = new mongoose.Schema<INote>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String, required: true },
  },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: false },
});

export default mongoose.models.Note || mongoose.model<INote>("Note", NoteSchema);