const { Router } = require('express');
const rescue = require('express-rescue');
const validatePostMiddleware = require('../middlewares/validatePostMiddleware');
const validateTokenMiddleware = require('../middlewares/validateTokenMiddleware');
const { createdPost, getAllPost } = require('../services/post.services');

const postRouter = Router();

postRouter.use(rescue(validateTokenMiddleware), validatePostMiddleware);

postRouter.post(
  '/',
  rescue(async (req, res) => {
    const dataValues = await createdPost(req.body, res.locals.payload);
    res.status(201).json(dataValues);
  }),
);

postRouter.get(
  '/',
  rescue(async (req, res) => {
    const payload = await getAllPost();
    res.status(200).json(payload);
  }),
);

module.exports = postRouter;
