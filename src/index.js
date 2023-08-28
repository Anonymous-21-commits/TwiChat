const express = require("express");
const connect = require("./config/db");
const app = express();
const TweetService = require("./services/tweet-service");
const HashTagRepo = require("./repository/index");
app.listen(3000, async () => {
  await connect();
  console.log('mongo connected');
});
