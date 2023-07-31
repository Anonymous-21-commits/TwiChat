const mongoose=require('mongoose');
const connect=async function(){
    await mongoose.connect('mongodb://localhost/twitter_Dev');
}
module.exports=connect;