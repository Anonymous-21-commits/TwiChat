const CrudRepo = require("./crud-repo");
const User=require('../models/userModel');

class UserRepo extends CrudRepo{
    constructor(){
        super(User);
    }
}
module.exports=UserRepo;