const db = require('../data/db-config');

const getUsers = async (page) => {
    return await db('users').limit(3).offset(page);
}

module.exports = {
    getUsers,
}