const { Router } = require('express');
const rescue = require('express-rescue');
const { authentication } = require('../services/token.services');

const loginRouter = Router();

loginRouter.post(
  '/',
  rescue(async (req, res, __next) => {
    const token = await authentication(req.body);
    res.status(200).json(token);
  }),
);

module.exports = loginRouter;
