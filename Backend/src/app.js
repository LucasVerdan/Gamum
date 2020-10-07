const express = require('express');

const app = express()

// Routes
app.get('/login', (req, res) => {
    console.log("teste");
    res.status(200).send({ logged: true});
})

app.listen(8080, () => {
	console.log('Server is running...')
})
