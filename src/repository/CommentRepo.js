const CrudRepo=require('./crud-repo');
const Comment=require('../models/commentModel');
class CommentRepo extends CrudRepo{
  constructor(){
    super(Comment);
  }
}
module.exports=CommentRepo;