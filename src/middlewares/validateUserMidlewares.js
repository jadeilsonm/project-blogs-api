const Joi = require('joi');

const userDTO = Joi.object({
  image: Joi.string().optional(),
  displayName: Joi.string().min(8).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
}).messages({
  'any.required': '{{#label}} is required',
  'any.displayName.min': '{{#label}} length must be at least 8 characters long',
  'any.password.min': '{{#label}} length must be at least 6 characters long',
  'any.email': '{{#label}} must be a valid email',
});

const validationUserMiddleware = (req, __res, next) => {
  const { error } = userDTO.validate(
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

module.exports = validationUserMiddleware;
