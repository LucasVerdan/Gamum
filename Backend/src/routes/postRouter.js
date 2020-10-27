const { Router } = require('express');
const { create, deletePost, getPost } = require ('../controllers/postController');

const router = Router();

router.post('/createPost', create)
router.post('/deletePost', deletePost)
router.post('/getPost', getPost)

module.exports = router;
