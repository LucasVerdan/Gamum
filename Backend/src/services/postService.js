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
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  var dbo = await client.db("gamun");
  const r = await dbo.collection('posts').find({ userId: userId}).toArray()
  return r
}

module.exports.like = async (o) => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  var dbo = await client.db("gamun");
  const r = await dbo.collection('posts_vote').find( { $and: [{userId: o.userId}, {postId: o.postId}] }).toArray()
  if( r.length > 0 ) {
      await dbo.collection('posts_vote').findOneAndUpdate(
        { $and: [{userId: o.userId}, {postId: o.postId}] }, 
        { $set: {like: 1} } , 
         { upsert: true } )
  } else {
    await dbo.collection('posts_vote').insertOne(o);
  }

  return [(await dbo.collection('posts_vote').find( { $and: [{postId: o.postId}, {like: 1}]}).toArray()).length,(await dbo.collection('posts_vote').find( { $and: [{postId: o.postId}, {like: 0}]}).toArray()).length];
}

module.exports.dislike = async (o) => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  var dbo = await client.db("gamun");
  const r = await dbo.collection('posts_vote').find( { $and: [{userId: o.userId}, {postId: o.postId}] }).toArray()
  if( r.length > 0 ) {
      await dbo.collection('posts_vote').findOneAndUpdate(
        { $and: [{userId: o.userId}, {postId: o.postId}] }, 
        { $set: {like: 0} } , 
         { upsert: true } )
  } else {
    await dbo.collection('posts_vote').insertOne(o);
  }

  return [(await dbo.collection('posts_vote').find( { $and: [{postId: o.postId}, {like: 1}]}).toArray()).length,(await dbo.collection('posts_vote').find( { $and: [{postId: o.postId}, {like: 0}]}).toArray()).length];
}


module.exports.getLikes = async (postId) => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  var dbo = await client.db("gamun");

  return [(await dbo.collection('posts_vote').find( { $and: [{postId: postId}, {like: 1}]}).toArray()).length,(await dbo.collection('posts_vote').find( { $and: [{postId: postId}, {like: 0}]}).toArray()).length];

}