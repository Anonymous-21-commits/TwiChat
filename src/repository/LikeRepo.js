const CrudRepo = require("./crud-repo");
const Like = require("../models/likeModel");
class LikeRepo extends CrudRepo {
  constructor() {
    super(Like);
  }
  async findByUserAndLikeable(data){
    try{
        return await Like.findOne(data);
    }catch(err){
        console.log(err);
    }
  }
}
module.exports = LikeRepo;
