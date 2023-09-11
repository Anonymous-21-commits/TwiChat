const TweetService = require("../services/tweetService");
const tweetService = new TweetService();
const createTweet = async (req, res) => {
  try {
    const response = await tweetService.create(req.body);
    return res.status(201).json({
      success: true,
      message: "succesfully created a new tweet",
      message: response,
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "failed to create a tweet",
      err: err,
    });
  }
};
module.exports = createTweet;
