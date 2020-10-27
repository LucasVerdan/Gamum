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
    const postId = req.params.id;
    await postService.delete(postId);
    res.status(204).send();
  };