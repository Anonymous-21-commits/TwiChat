const LikeService = require("../services/likeService");
const likeService = new LikeService();
const toggleLike = async (req, res) => {
  try {
    const response = await likeService.toggleLike(
      req.query.modelId,
      req.query.modelType,
      req.body.userId
    );
    return res.status(200).json({
      err: {},
      success: true,
      message: response,
    });
  } catch (err) {
    return res.status(500).json({
      err: { err },
      success: false,
      message: "something went wrong",
    });
  }
};
module.exports = toggleLike;
