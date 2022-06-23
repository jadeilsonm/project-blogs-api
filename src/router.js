const { Router } = require('express');
const postRouter = require('./controller/blogPost.controller');
const categoryRouter = require('./controller/category.controller');
const loginRouter = require('./controller/login.controller');
const userRouter = require('./controller/user.controller');

const routers = Router();

routers.use('/login', loginRouter);

routers.use('/user', userRouter);

routers.use('/categories', categoryRouter);

routers.use('/post', postRouter);

module.exports = routers;
