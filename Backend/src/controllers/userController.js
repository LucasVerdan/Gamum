const userService = require('../services/userService')

exports.auth = async (req,res) => {
    await userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
}

exports.register = async (req, res) => {
    await userService.register(req.body)
        .then(e => res.json(e))
        .catch(err => res.status(300));
}

exports.getUser = async (req, res) => {
    let userId = req.params.id;
    console.log(userId);
    await userService.getUser(userId)
    .then(e => {
        console.log(res.json(e))
       return res.json(e)
    })
        .catch(err => res.status(300));
}

exports.deleteUser = async (req, res) => {
    let userId = req.params.id;
    await userService.deleteUser(userId);
    res.status(204).send(true);
}

exports.updateUser = async (req,res) => {
    let userId = req.params.id;
    await userService.updateUser(userId, req.body);
    res.json(await userService.getUser(userId));
  }