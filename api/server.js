const express = require('express');
const usersRouter = require('./users/users_router');

const server = express();

server.use(express.json());

server.use('/api', usersRouter);


module.exports = server;