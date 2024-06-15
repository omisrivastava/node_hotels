const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    body: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", notesSchema);
module.exports = Note;
