class CrudRepo {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      return await this.model.create(data);
    } catch (err) {
      console.log("something went wrong in crud-repo");
      throw err;
    }
  }
  async destroy(id) {
    try {
      return await this.model.findByIdAndRemove(id);
    } catch (err) {
      console.log("something went wrong in crud-repo");
      throw err;
    }
  }
  async get(id){
    try{
       return await this.model.findById(id);
    }catch (err) {
      console.log("something went wrong in crud-repo");
      throw err;
    }
  }
  async getAll(){
    try{
       return await this.model.find({});
    }catch (err) {
        console.log("something went wrong in crud-repo");
        throw err;
      }
  }
  async update(id,data){
     try{
       return await this.model.findByIdAndUpdate(id,data,{new:true})
     }catch (err) {
        console.log("something went wrong in crud-repo");
        throw err;
      }
  }
}
module.exports=CrudRepo;
