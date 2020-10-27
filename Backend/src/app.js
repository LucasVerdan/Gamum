const { createPost, deletePost, getPost } = require ('./controllers/postController');

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

app.post('/createPost', createPost)
app.delete('/deletePost/:id', deletePost)
app.get('/getPost', getPost)


app.listen(8080, () => {
	console.log('Server is running...')
})

