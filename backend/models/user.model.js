import { Schema, model } from "mongoose";

const User = new Schema(
  {
    name: { type: "string", required: true },
    email: { type: "string", required: true },
    password: { type: "string", required: true },
  },
  { collection: "users" }
);

export default model("User", User);
