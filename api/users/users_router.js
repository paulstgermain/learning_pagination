const router = require('express').Router();

const { getUsers } = require('./users_model');

router.get('/users', (req, res) => {

    getUsers(parseInt(req.query.page))
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});

module.exports = router;