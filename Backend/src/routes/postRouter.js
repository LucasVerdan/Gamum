import { Router } from 'express'
import { create, deletePost, getPost } from '../controllers/postController'

const router = Router();

router.post('/createPost', create)
router.post('/deletePost', deletePost)
router.post('/getPost', getPost)

export default router
