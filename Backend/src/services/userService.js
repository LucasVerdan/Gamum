var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/gamun";
var mongodb = require('mongodb');

module.exports.authenticate = async ( {username, password}) =>
{
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    var dbo = await client.db("gamun");
    const r = await dbo.collection('users').find({ username: username}).toArray()
    return r.find(e => e.password == password);
}

module.exports.register = async (user) => {
    console.log(user)
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    var dbo = await client.db("gamun");

    return await dbo.collection('users').insertOne(user).ops
}

module.exports.getUser = async (id) => {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    var dbo = await client.db("gamun");

    return await dbo.collection('users').findOne({ "_id": new mongodb.ObjectId(id) });

}

module.exports.getUsers = async () => {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    var dbo = await client.db("gamun");

    return await dbo.collection('users').find().toArray();
}