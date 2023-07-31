const Tweet = require("../models/tweet");
class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (err) {
      console.log(err);
    }
  }
  async update(id, data) {
    try {
      const tweet = await Tweet.findByIdAndUpdate(id,data,{new:true});
      return tweet;
    } catch (err) {
      console.log(err);
    }
  }
  async destroy(id) {
    try {
      await Tweet.findOneAndRemove(id);
      return true;
    } catch (err) {
      console.log(err);
    }
  }
  async get(id) {
    try {
      return await Tweet.findById(id);
    } catch (err) {
      console.log(err);
    }
  }
  async getAll(offset,limit){
    try{
      const tweet=await Tweet.find().skip(offset).limit(limit);
      return tweet;
    }catch(err){
        console.log(err);
    }
  }
}
module.exports = TweetRepository;
