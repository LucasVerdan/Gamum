const userService = require('../services/userService')

exports.auth = async (req,res) => {
    console.log(req.body)
    await userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
}

exports.register = async (req, res) => {
    await userService.register(req.body)
        .then(e => res.json(e))
        .catch(err => next(err));
}