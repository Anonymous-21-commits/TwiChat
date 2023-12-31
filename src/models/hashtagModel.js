const mongoose = require("mongoose");
const hashtagSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  tweets: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Tweet",
    },
  ],
});
const Hashtag = mongoose.model("Hashtag", hashtagSchema);
module.exports = Hashtag;
