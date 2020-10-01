const mongoose = require('mongoose')
const Schema = mongoose.Schema

const COLLECTION_NAME = 'Rooms'

const postSchema = new Schema(
    {
        id,
        title,
        imgUrl,
        fontUrl,
        content
    }
)

module.exports = mongoose.model(COLLECTION_NAME, postSchema)
