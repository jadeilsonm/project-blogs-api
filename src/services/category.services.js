const { Category } = require('../database/models');

const createdCategory = (payload) => Category.create(payload);

module.exports = {
  createdCategory,
};
