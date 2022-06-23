const { Router } = require('express');
const rescue = require('express-rescue');
const validatePostMiddleware = require('../middlewares/validatePostMiddleware');
const validateTokenMiddleware = require('../middlewares/validateTokenMiddleware');
const { createdPost } = require('../services/post.services');

const postRouter = Router();

postRouter.use(rescue(validateTokenMiddleware), validatePostMiddleware);

postRouter.post(
  '/',
  rescue(async (req, res) => {
    const dataValues = await createdPost(req.body, res.locals.payload);
    console.log('data', dataValues);
    res.status(201).json(dataValues);
  }),
);

module.exports = postRouter;
