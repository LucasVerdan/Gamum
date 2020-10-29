const { createPost, deletePost, getPost, updatePost, getPostById, getUserPosts } = require ('./controllers/postController');
const { auth, register } = require('./controllers/userController');
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


app.listen(8080, () => {
	console.log('Server is running...')
})

