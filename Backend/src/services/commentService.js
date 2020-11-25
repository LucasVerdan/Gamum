var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/gamun";
var mongodb = require('mongodb');


const userService = require('../services/userService');


module.exports.getCommentsByPostId = async (postId) => {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    var dbo = await client.db("gamun");
    return dbo.collection('comments').find({ "postId": postId }).toArray();
}

module.exports.create = async (comment) => {
 

  const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  var dbo = await client.db("gamun");

  return dbo.collection("comments").insertOne(comment);  
}