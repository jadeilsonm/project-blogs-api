const Joi = require('joi');

const postDTO = Joi.object({
  title: Joi.string().allow(''),
  content: Joi.string().allow(''),
  categoryIds: Joi.array().items(Joi.number().allow(null)),
}).messages({
  'any.allow': 'Some required fields are missing',
  'any.match': 'Some required fields are missing',
  'any.categoryIds': '{{#label}} length must be at least 8 characters long',
  'any.categoryIds.contain': '{{#label}} length must be at least 8 characters long ee',
  'any.categoryIds.has': '{{#label}} length must be at least 8 characters long we',
  'any.categoryIds.allow': '{{#label}} length must be at least 8 characters long aa',
  'any.categoryIds.match': '{{#label}} length must be at least 8 characters long dd',
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