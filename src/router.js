const { Router } = require('express');
const loginRouter = require('./controller/login.controller');
const userRouter = require('./controller/user.controller');

const routers = Router();

routers.use('/login', loginRouter);

routers.use('/user', userRouter);

module.exports = routers;
