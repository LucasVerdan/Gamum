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