const db = require('../data/db-config');

const getUsers = async (page) => {
    const limit = 3;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    const users = await db('users');
    
    if (endIndex < await users.length){
        results.next = {
            page: page + 1,
            limit: limit
        }
    }

    if (startIndex > 0){
        results.previous = {
            page: page - 1,
            limit: limit
        }
    }

    results.paginatedUsers = await db('users').limit(limit).offset(startIndex);

    return results;
}

module.exports = {
    getUsers,
}