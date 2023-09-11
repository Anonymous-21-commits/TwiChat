const express = require("express");
const createTweet = require("../../controllers/tweet-Controller");
const toggleLike = require("../../controllers/like-Controller");
const createComment = require("../../controllers/commentController");
const v1Routes = express.Router();
v1Routes.post("/tweets", createTweet);
v1Routes.post("/likes/toggleLike", toggleLike);
v1Routes.post("/comments/create", createComment);

module.exports = v1Routes;
