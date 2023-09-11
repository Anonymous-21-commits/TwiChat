const { TweetRepo } = require("../repository/index");
const { HashTagRepo } = require("../repository/index");
class TweetService {
  constructor() {
    this.tweetRepo = new TweetRepo();
    this.hashRepo = new HashTagRepo();
  }
  async create(data) {
    const tweet = await this.tweetRepo.create(data);
    const content = data.content;
    let hashtagsTitle = content
      .match(/#[a-zA-Z0-9_]+/g)
      .map((title) => title.substring(1).toLowerCase());
    let alreadyPresentHashtagsTitle = await this.hashRepo.findByName(
      hashtagsTitle
    );
    alreadyPresentHashtagsTitle = alreadyPresentHashtagsTitle.map(
      (hashtag) => hashtag.title
    );
    const newTagsTitle = hashtagsTitle.filter(
      (title) => !alreadyPresentHashtagsTitle.includes(title)
    );
    const alreadyPresentHashs = await this.hashRepo.findByName(
      alreadyPresentHashtagsTitle
    );
    alreadyPresentHashs.map(async (hash) => {
      hash.tweets.push(tweet);
      await hash.save();
    });
    await this.hashRepo.bulkCreate(newTagsTitle);
    const newHashs = await this.hashRepo.findByName(newTagsTitle);
    newHashs.map(async (hash) => {
      hash.tweets.push(tweet);
      await hash.save();
    });
    return tweet;
  }
}
module.exports = TweetService;
