import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },
  },
  { collection: "users" }
);

export default mongoose.model("User", User);
