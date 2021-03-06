const commentService = require('../services/commentService');

const userService = require('../services/userService');
const postService = require('../services/postService');

exports.getComments = async (req, res) => {
    let postId = req.params.id;
    res.json(await commentService.getCommentsByPostId(postId))
}

exports.createComment = async (req,res) => {
    const room = await commentService.create({ ...req.body, date: new Date()});
    res.json(room.ops);
}

exports.deleteComment = async(req,res) => {
    let id = req.params.id;
    console.log(id);
    const delete_ = await commentService.deleteComment(id);
    res.json(null)
}