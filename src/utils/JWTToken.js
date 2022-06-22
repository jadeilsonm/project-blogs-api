const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'senhaSecreta';
// https://datatracker.ietf.org/doc/html/rfc7519#section-4.1
const jwtConfig = {
  // expiresIn: '15m',
  algorithm: 'HS256',
};

const generateJWTToken = (payload) => jwt.sign(payload, SECRET, jwtConfig);

const authenticateToken = async (token) => {
  if (!token) {
    const message = { status: 401, message: 'Token not found' };
    throw message;
  }
  try {
    const introspection = await jwt.verify(token, SECRET, jwtConfig);
    console.log(introspection);
    return introspection;
  } catch (e) {
    console.log('error', e.message);
    const message = { status: 401, message: 'Expired or invalid token' };
    throw message;
  }
};

module.exports = {
  generateJWTToken,
  authenticateToken,
};
