const mongoose = require("mongoose");
const shortId = require("shortid");

const shortUrlSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    default: shortId.generate
  }
});

module.exports = mongoose.model("Ids", shortUrlSchema);
