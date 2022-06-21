const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/JWTToken');

const authentication = async ({ email, password }) => {
  if (!email || !password) {
    const message = {
      status: 400,
      message: 'Some required fields are missing',
    };
    throw message;
  }

  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'password', 'image'],
    where: { email, password },
  });

  if (!user) {
    const message = { status: 400, message: 'Invalid fields' };
    throw message;
  }

  // Gerar o token
  const token = generateJWTToken(JSON.stringify(user));
  return { token };
};

module.exports = {
  authentication,
};
