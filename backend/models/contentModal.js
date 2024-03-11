const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    componentId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      // required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Content", contentSchema);
