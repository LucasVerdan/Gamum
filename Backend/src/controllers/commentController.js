const commentService = require('../services/commentService');

const userService = require('../services/userService');
const postService = require('../services/postService');

exports.getComments = async (req, res) => {
    let postId = req.params.id;
    console.log('postId', postId)
    res.json(await commentService.getCommentsByPostId(postId))
}

exports.createComment = async (req,res) => {
    const room = await commentService.create(req.body);
    res.json(room.ops);
}