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

const getAllUser = () =>
  User.findAll({
    attributes: ['displayName', 'email', 'image'],
  });

const getOneUser = async (id) => {
  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { id },
  });
  if (!user) {
    const message = { status: 404, message: 'User does not exist' };
    throw message;
  }
  return user;
};

module.exports = {
  createdUser,
  getAllUser,
  getOneUser,
};
