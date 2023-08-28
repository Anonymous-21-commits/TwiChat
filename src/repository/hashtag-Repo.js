const Hashtag = require("../models/hashtags");
class HashTagRepo {
  async create(data) {
    try {
      const tag = await Hashtag.create(data);
      return tag;
    } catch (err) {
      console.log(err);
    }
  }
  async find(id) {
    try {
      const tag = await Hashtag.findById(id);
      return tag;
    } catch (err) {
      console.log(err);
    }
  }
  async update(id) {
    try {
      const tag = await Hashtag.findByIdAndUpdate(id, {
        new: true,
      });
      return tag;
    } catch (err) {
      console.log(err);
    }
  }
  async destroy(id) {
    try {
      const tag = await hashtag.findByIdAndDelete(id);
      return tag;
    } catch (err) {
      console.log(err);
    }
  }
  async bulkCreate(data) {
    try {
      const tags = Hashtag.insertMany(data);
      return tags;
    } catch (err) {
      console.log(err);
    }
  }
  async findByContent(ContentList){
    try{
     await Hashtag.find({
        content:titleList
     }).select('content- _id')
    }catch(err){
        console.log(err);
    }

  }
}
module.exports = HashTagRepo;
