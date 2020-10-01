var Post = require("../models/post");
var mongoose = require('mongoose');

module.exports.create = async (post) => {
  const newPost = { ...mongoose.Types.ObjectId, ...post} 
  await newPost.save((err) => {
    if (err) console.log(err);
  });
  return newPost;
};

module.exports.getPosts = async () => {
    const posts = await Post.find();
    return posts;
  };

module.exports.deletePost = async (postId) => {
    Post.findByIdAndDelete(postId, function (err) {});
  };
  
