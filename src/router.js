const { Router } = require('express');
const loginRouter = require('./controller/login.controller');

const routers = Router();

routers.use('/login', loginRouter);

module.exports = routers;
