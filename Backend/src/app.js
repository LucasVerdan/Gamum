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

// Routes
app.get('/login', (req, res) => {
    console.log("teste");
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send({ logged: true});
})


const { createPost, deletePost, getPost } = require ('./controllers/postController');

app.post('/createPost', createPost)
app.post('/deletePost', deletePost)
app.get('/getPost', getPost)


app.listen(8080, () => {
	console.log('Server is running...')
})

