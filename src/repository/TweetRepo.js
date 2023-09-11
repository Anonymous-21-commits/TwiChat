const Tweet = require("../models/tweetModel");
const CrudRepo = require("./crud-repo");
class TweetRepo extends CrudRepo {
  constructor() {
    super(Tweet);
  }
  async getAll(offset, limit) {
    try {
      const tweets = await Tweet.find().skip(offset).limit(limit);
      return tweets;
    } catch (err) {
      console.log(err);
    }
  }
    async get(id){
    try{
      const tweet=  await Tweet.findById(id).populate({path:'likes'});
      return tweet;
    }catch(err){
      console.log(err);

    }
  }
}
module.exports = TweetRepo;
