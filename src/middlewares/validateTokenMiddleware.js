const { authenticateToken } = require('../utils/JWTToken');

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  const payload = await authenticateToken(token).catch((e) => {
    throw e;
  });
  res.locals.payload = payload;
  next();
};

module.exports = validateToken;
