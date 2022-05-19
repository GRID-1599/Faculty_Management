const mongoose = require("mongoose");

const constentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const contentModel = mongoose.model("contents", constentSchema);
module.exports = contentModel;
