import { MONGO_URI } from "../core/settings";
import mongoose from "mongoose";

export const db = mongoose.connect(MONGO_URI).then((_res) => {
  console.log("Connected to MongoDB");
});
