const { Category } = require('../database/models');

const createdCategory = (payload) => Category.create(payload);

const getAllCategory = () =>
  Category.findAll({
    attributes: ['id', 'name'],
  });

module.exports = {
  createdCategory,
  getAllCategory,
};
