const TweetRepository  = require("../repository/tweet-Repo");
const hashtag=require("../models/hashtags");
class TweetService {
  constructor() {
    this.repo = new TweetRepository();
  }
  async create(data) {
    const content = data.content;
    const tweet = await this.repo.create(data);
    const hashtagPattern = /#[a-za-z0-9_]+/g;
    const tags = content.match(hashtagPattern);
    
    if (tags) {
      const cleanedTags = tags.map((tag) => tag.substring(1));
      for (let i = 0; i < cleanedTags.length; i++) {
        const created=await hashtag.create(
        {
            content:cleanedTags[i]
        });
        tweet.hashtags.push(created._id);
      }
    }
    await tweet.save();
    return tweet;
  }
  
}
module.exports = TweetService;
