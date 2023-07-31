const mongoose = require("mongoose");
const hashtagSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    tweets:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tweet'
    }]
  },
  { timestamps: true }
);
const hashtag=mongoose.model('hashtag',hashtagSchema);
module.exports=hashtag;
