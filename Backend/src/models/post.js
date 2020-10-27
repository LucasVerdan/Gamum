const mongoose = require('mongoose')
const Schema = mongoose.Schema

const COLLECTION_NAME = 'posts'

const postSchema = new Schema(
    {
        id: Number,
        title: String,
        imgUrl: String,
        fontUrl: String,
        content: String
    }
)

module.exports = mongoose.model(COLLECTION_NAME, postSchema)
