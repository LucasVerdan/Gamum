var Post = require("../models/post");
var mongoose = require('mongoose');
const { response } = require("express");

module.exports.create = async (post) => {
  const newPost = { ...mongoose.Types.ObjectId, ...post} 
  await newPost.save((err) => {
    if (err) console.log(err);
  });
  return newPost;
};

module.exports.getPosts = async () => {
  console.log('getPostsService')
  Post.exists().then(res => console.log(res));

    Post.find((err, res) => {
      console.log(err, res);
    });
    console.log('resultado ' + '');
    return "";
  };

module.exports.deletePost = async (postId) => {
    Post.findByIdAndDelete(postId, function (err) {});
  };
  
