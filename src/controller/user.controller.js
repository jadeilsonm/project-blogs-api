const { Router } = require('express');
const rescue = require('express-rescue');
const validationUserMiddleware = require('../middlewares/validateUserMiddleware');
const { authentication } = require('../services/token.services');
const { createdUser, getAllUser, getOneUser } = require('../services/user.services');
const validateTokenMiddleware = require('../middlewares/validateTokenMiddleware');

const userRouter = Router();

userRouter.post(
  '/',
  validationUserMiddleware,
  rescue(async (req, res, __next) => {
    const { dataValues } = await createdUser(req.body);
    if (dataValues) {
      const { email, password } = dataValues;
      const token = await authentication({ email, password });
      res.status(201).json(token);
    }
  }),
);

userRouter.use(rescue(validateTokenMiddleware));

userRouter.get(
  '/',
  rescue(async (_req, res) => {
    const response = await getAllUser();
    res.status(200).json(response);
  }),
);

userRouter.get(
  '/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    const response = await getOneUser(id);
    res.status(200).json(response);
  }),
);

module.exports = userRouter;
