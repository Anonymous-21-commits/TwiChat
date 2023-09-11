const mongoose = require("mongoose");
const TweetSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "tweet cannot have more than 250 charcters"],
    },
    userEmail: {
      type: String,
    },
    likes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Like",
      },
    ],
    comments: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);
const Tweet = mongoose.model("Tweet", TweetSchema);
module.exports = Tweet;
