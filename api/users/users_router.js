const router = require('express').Router();

const { getUsers } = require('./users_model');

router.get('/users/:page', (req, res) => {
    getUsers(req.params.page)
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});

module.exports = router;