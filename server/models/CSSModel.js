const mongoose = require("mongoose");

const CSSSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  topic: {
    type: String,
    required: [true, "Please provide topic."],
  },
  css: {
    type: String,
    required: [true, "Please provide CSS property."],
  },
});

module.exports = mongoose.model("CSS", CSSSchema);
