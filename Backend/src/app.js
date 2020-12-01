const { createPost, deletePost, getPost, updatePost, getPostById, getUserPosts, likePost, dislikePost, getLikes } = require ('./controllers/postController');
const { auth, register } = require('./controllers/userController');
const { getComments, createComment, deleteComment } = require('./controllers/commentController')
const express = require('express');

const app = express()

// Add headers
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());
app.use(express.urlencoded());

// Routes



app.get('/login', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send({ logged: true});
})
app.post('/auth', auth)
app.post('/register', register)


app.post('/createPost', createPost)
app.delete('/deletePost/:id', deletePost)
app.get('/getPost', getPost)
app.post('/getUserPosts', getUserPosts)
app.post('/updatePost/:id', updatePost)
app.get('/getPost/:id', getPostById )

app.post('/like', likePost);
app.post('/dislike', dislikePost)
app.get('/getLikes/:id', getLikes )


app.get('/getComments/:id', getComments)
app.post('/createComment', createComment)
app.get('/deleteComment/:id', deleteComment)

app.listen(8080, () => {
	console.log('Server is running...')
})

