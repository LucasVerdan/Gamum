const postService = require('../services/postService')

exports.createPost = async (req, res) => {
  const room = await postService.create(req.body);
  res.json(room.ops);
}

exports.getPost = async (req, res) => {
    const allPosts = await postService.getPosts()
    res.json(allPosts)
}

exports.deletePost = async (req, res) => {
    const postParams = req.params;
    await postService.deletePost(postParams.id);
    res.status(204).send(true);
}

exports.updatePost = async (req,res) => {
  let postId = req.params.id;
  const updatedPost = await postService.updatePost(postId, req.body);
  res.json(await postService.getPostById(postId));
}

exports.getPostById = async (req,res) => {
  let postId = req.params.id;
  res.json(await postService.getPostById(postId));
}

exports.getUserPosts = async (req,res) => {
  res.json(await postService.getPostByUserId(req.body.userId));
}

exports.likePost = async (req,res) => {
  res.json(await postService.like( { ...req.body, like: 1}));
}

exports.dislikePost = async (req,res) => {
  res.json(await postService.dislike( { ...req.body, like: 0}))
}

exports.getLikes = async (req,res) => {
  res.json(await postService.getLikes(req.params.id));
}