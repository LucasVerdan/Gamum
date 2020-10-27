var Post = require("../models/post");
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/gamun";

module.exports.create = async (post) => {

  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  var dbo = await client.db("gamun");

  return dbo.collection("posts").insertOne(post);  
};

module.exports.getPosts = async () => {
  let posts;
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  var dbo = await client.db("gamun");
  const result = await dbo.collection("posts").find({}).toArray();
  return result;
};

module.exports.deletePost = async (postId) => {
  Post.findByIdAndDelete(postId, function (err) { });
};