const { Router } = require('express');
const rescue = require('express-rescue');
const validationUserMiddleware = require('../middlewares/validateUserMidlewares');
const { authentication } = require('../services/token.services');
const { createdUser } = require('../services/user.services');

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

module.exports = userRouter;
