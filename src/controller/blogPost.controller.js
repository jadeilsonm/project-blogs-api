const { Router } = require('express');
const rescue = require('express-rescue');
const validatePostMiddleware = require('../middlewares/validatePostMiddleware');
const validateTokenMiddleware = require('../middlewares/validateTokenMiddleware');
const { createdPost, getAllPost, getOnePost, updatePost } = require('../services/post.services');

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
  rescue(async (__req, res) => {
    const payload = await getAllPost();
    res.status(200).json(payload);
  }),
);

postRouter.get(
  '/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    const payload = await getOnePost(id);
    res.status(200).json(payload);
  }),
);

postRouter.put(
  '/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    const payload = await updatePost(res.locals.payload, id, req.body);
    res.status(200).json(payload);
  }),
);

module.exports = postRouter;
