const mongoose = require("mongoose");
const likeSchema = mongoose.Schema(
  {
    onModel: {
      type: String,
      required: true,
      enum: ["Tweet",'Comment'],
    },
    likeable: {
      type: mongoose.Schema.ObjectId,
      required: true,
      refPath: "onModel",
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
const Like = mongoose.model("Like", likeSchema);
module.exports = Like;
