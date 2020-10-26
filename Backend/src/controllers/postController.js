const postService = require('../services/postService')

exports.createPost = async (req, res) => {
  postRequest = req.body
  const room = await postService.create(req.body);
  res.json(room);
}

exports.getPost = async (req, res) => {
  console.log('...')
    const allPosts = await postService.getPosts()
    console.log('teste ' + allPosts);
    res.json(allPosts)
  }

exports.deletePost = async (req, res) => {
    const postId = req.params.id;
    await postService.delete(postId);
    res.status(204).send();
  };