const postService = require('../services/postServices')

exports.createPost = async (req, res) => {
  postRequest = req.body
  const room = await postService.create(req.body);
  res.json(room);
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