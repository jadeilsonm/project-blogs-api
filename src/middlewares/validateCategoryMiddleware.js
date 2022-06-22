const Joi = require('joi');

const categoryDTO = Joi.object({
  name: Joi.string().required(),
}).messages({
  'any.required': '{{#label}} is required',
});

const validateCategoryMiddleware = (req, __res, next) => {
  const { error } = categoryDTO.validate(
    req.body,
    { abortEarly: false },
  );
  if (!error) {
    return next();
  }
  const message = error.details.map((e) => e.message);
  const err = { status: 400, message: message[0] };
  throw err;
};

module.exports = validateCategoryMiddleware;
