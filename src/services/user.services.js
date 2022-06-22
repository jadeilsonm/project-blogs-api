const { User } = require('../database/models');

const createdUser = async (user) => {
  const findUser = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'password', 'image'],
    where: { email: user.email },
  });
  console.log('findUser', findUser);
  if (findUser) {
    const message = { status: 409, message: 'User already registered' };
    throw message;
  }
  return User.create(user);
};

const getAllUser = async () =>
  User.findAll({
    attributes: ['displayName', 'email', 'image'],
  });

module.exports = {
  createdUser,
  getAllUser,
};
