const CommentService = require("../services/commentService");
const commentService = new CommentService();
const createComment = async (req, res) => {
  try {
    const comment = await commentService.createComment(
        req.query.modelId,
        req.query.modelType,
        req.body.userId,
        req.body.content
      );
    return res.status(200).json({
      success: true,
      data: comment,
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      err: err,
      message: "failed to create comment",
    });
  }
};
module.exports=createComment;
