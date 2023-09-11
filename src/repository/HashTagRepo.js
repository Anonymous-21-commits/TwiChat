const Hashtag = require("../models/hashtagModel");
class HashTagRepo {
  async create(data) {
    try {
      const hash = await Hashtag.create(data);
      return hash;
    } catch (err) {
      console.log(err);
    }
  }
  async destroy(id) {
    try {
      const hash = await Hashtag.findByIdAndRemove(id);
      return hash;
    } catch (err) {
      console.log(err);
    }
  }
  async bulkCreate(hashtagsTitle) {
    try {
        const hashtags = hashtagsTitle.map((title) => ({
            title: title
          }));
      const createdHashtags = await Hashtag.insertMany(hashtags);
      return createdHashtags;
    } catch (err) {
      console.log(err);
    }
  }
  async findByName(titleList) {
    try {
      let hashtags = await Hashtag.find({
        title: titleList,
      });
      return hashtags;
    } catch (err) {
      console.log(err);
    }
  }
  async get(data) {
    try {
      return await Hashtag.find(data);
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = HashTagRepo;
