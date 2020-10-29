var Post = require("../models/post");
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/gamun";
var mongodb = require('mongodb');


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

  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  var dbo = await client.db("gamun");
  return dbo.collection("posts").deleteOne( { "_id": new mongodb.ObjectId(postId) } );
};

module.exports.updatePost = async (postId, post) => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  var dbo = await client.db("gamun");
  return dbo.collection('posts').findOneAndUpdate(
    { "_id": new mongodb.ObjectId(postId) }, 
    { $set: post },
    { upsert: true } );
};

module.exports.getPostById = async (postId) => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  var dbo = await client.db("gamun");
  return dbo.collection('posts').findOne({ "_id": new mongodb.ObjectId(postId) });
}

module.exports.getPostByUserId = async (userId) => {
  console.log(userId);
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  var dbo = await client.db("gamun");
  const r = await dbo.collection('posts').find({ userId: userId}).toArray()
  return r
}