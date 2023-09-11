const { CommentRepo, TweetRepo } = require("../repository/index");
class CommentService {
  constructor() {
    this.commentRepo = new CommentRepo();
    this.tweetRepo = new TweetRepo();
  }
  async createComment(modelId, modelType, userId, content) {
    try {
      const comment = await this.commentRepo.create({
        content: content,
        user: userId,
        onModel: modelType,
        commentable: modelId,
        likes: [],
        comments: [],
      });
      if (modelType=="Comment") {
        var commentable = await this.commentRepo.get(modelId);
        commentable.comments.push(comment);
        await commentable.save();
      } else if (modelType=="Tweet") {
        var commentable = await this.tweetRepo.get(modelId);
        commentable.comments.push(comment);
        await commentable.save();
      } else throw "Unknown model type";
      return comment;
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = CommentService;
