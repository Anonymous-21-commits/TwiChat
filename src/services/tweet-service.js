const {TweetRepository,HashTagRepo}  = require("../repository/index");
class TweetService {
  constructor() {
    this.tweetRepo = new TweetRepository();
    this.hashtagRepo=new HashTagRepo();
  }
  async create(data) {
    const content = data.content;
    const tweet = await this.tweetRepo.create(data);
    const hashtagPattern = /#[a-za-z0-9_]+/g;
    let tags = content.match(hashtagPattern);
    const alreadyPresentTags=this.hashtagRepo.findByContent(tags).map((tag)=>tag.content)
    const newTags=tags.filter((tag) =>!alreadyPresentTags.includes(tag) )
    this.hashtagRepo.bulkCreate(newTags);
    await tweet.save();
    return tweet;
  }
  
}
module.exports = TweetService;
