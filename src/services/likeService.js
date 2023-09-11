const { LikeRepo, TweetRepo, CommentRepo } = require("../repository/index");
class LikeService {
  constructor() {
    this.likeRepo = new LikeRepo();
    this.tweetRepo = new TweetRepo();
    this.commentRepo = new CommentRepo();
  }
  async toggleLike(modelId, modelType, userId) {
    try {
      if (modelType == "Tweet") {
        var likeable = await this.tweetRepo.get(modelId);
      } else if (modelType == "Comment") {
        likeable = await this.commentRepo.get(modelId);
      } else throw "Unknown model type";
      const exists = await this.likeRepo.findByUserAndLikeable({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      if (exists) {
        likeable.likes.pull(exists.id);
        await likeable.save();
        await this.likeRepo.destroy(exists.id);
        return "you liked the " + modelType.toLowerCase();
      } else {
        const like = await this.likeRepo.create({
          user: userId,
          onModel: modelType,
          likeable: modelId,
        });
        likeable.likes.push(like);
        await likeable.save();
        return "your like has been removed from " + modelType.toLowerCase();
      }
    } catch (err) {
      console.log("error in toggling a like");
      throw err;
    }
  }
}
module.exports = LikeService;
