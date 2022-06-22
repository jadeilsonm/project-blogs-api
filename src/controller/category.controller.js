const { Router } = require('express');
const rescue = require('express-rescue');
const validateCategoryMiddleware = require('../middlewares/validateCategoryMiddleware');
const validateTokenMiddleware = require('../middlewares/validateTokenMiddleware');
const { createdCategory, getAllCategory } = require('../services/category.services');

const categoryRouter = Router();

categoryRouter.use(rescue(validateTokenMiddleware)); // rescue(validationCategoryMiddleware)

categoryRouter.post(
  '/',
  validateCategoryMiddleware,
  rescue(async (req, res) => {
    const { dataValues } = await createdCategory(req.body);
    res.status(201).json(dataValues);
  }),
);

categoryRouter.get(
  '/',
  rescue(async (__req, res) => {
    const payload = await getAllCategory();
    res.status(200).json(payload);
  }),
);

module.exports = categoryRouter;
