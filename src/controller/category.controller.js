const { Router } = require('express');
const rescue = require('express-rescue');
const validateCategoryMiddleware = require('../middlewares/validateCategoryMiddleware');
const validateTokenMiddleware = require('../middlewares/validateTokenMiddleware');
const { createdCategory } = require('../services/category.services');

const categoryRouter = Router();

categoryRouter.use(rescue(validateTokenMiddleware)); // rescue(validationCategoryMiddleware)

categoryRouter.use(validateCategoryMiddleware);

categoryRouter.post('/',
  rescue(async (req, res) => {
    const { dataValues } = await createdCategory(req.body);
    res.status(201).json(dataValues);
  }));

module.exports = categoryRouter;
