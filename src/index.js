const express = require("express");
const connect = require("./config/db");
const app = express();
const TweetRepository = require("./repository/tweet-Repo");
const Comment=require('./models/comment');
app.listen(3000, async () => {
  console.log("server started");
  await connect();
  const repo=await new TweetRepository();
  const tweets=await repo.getAll();
  console.log(tweets[35].userEmail);
  console.log(tweets[35].contentWithEmail);
  
});
