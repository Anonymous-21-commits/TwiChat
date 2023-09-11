const UserRepo=require('../repository/UserRepo');
class UserService{
  constructor(){
    this.userRepo=new UserRepo();
  }
  async signup(data){
     return await this.userRepo.create(data);
  }
}
module.exports=UserService;