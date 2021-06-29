const db = require('../data/db-config');

const getUsers = async (page) => {
    const limit = 3;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;


    return await db('users').limit(limit).offset(startIndex);
}

module.exports = {
    getUsers,
}