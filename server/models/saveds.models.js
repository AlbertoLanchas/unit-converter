import mongoose from "mongoose";

const savedSchema = mongoose.Schema({
  title: String,
  quantity: Number,
  select: String,
  result: Number,
  resultUnits: String,
});

const Saved = mongoose.model("saveds", savedSchema);

export default Saved;
