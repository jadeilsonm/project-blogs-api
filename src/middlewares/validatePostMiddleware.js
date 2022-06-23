const Joi = require('joi');

const postDTO = Joi.object({
  title: Joi.string().allow(''),
  content: Joi.string().allow(''),
  categoryIds: Joi.array().items(Joi.number().allow(null)).optional(null),
}).messages({
  'any.allow': 'Some required fields are missing',
  'any.required': 'Some required fields are missing',
  'any.categoryIds.optional': '{{#label}} length must be at least 8 characters long aa',
});

const validatePost = (req, __res, next) => {
  const { error } = postDTO.validate(
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

module.exports = validatePost;