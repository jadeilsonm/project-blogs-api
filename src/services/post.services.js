const Sequelize = require('sequelize');
const {
  BlogPost: post,
  Category,
  User,
  PostCategory,
} = require('../database/models');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const isExistCategory = async (categoryIds) => {
  const payload = await Category.findAll({ attributes: ['id', 'name'] });
  const allCategory = payload.map((el) => el.id);
  if (categoryIds.length === 0) {
    const message = {
      status: 400,
      message: 'Some required fields are missing',
    };
    throw message;
  }
  const isCategory = categoryIds.some((e) => allCategory.includes(e));
  return isCategory;
};

const createdPost = async ({ title, content, categoryIds }, userId) => {
  const isCategory = await isExistCategory(categoryIds);
  if (!isCategory) {
    const message = { status: 400, message: '"categoryIds" not found' };
    throw message;
  }
  try {
    const result = await sequelize.transaction(async (t) => {
      const payload = await post.create({ title, content, userId: userId.id }, { transaction: t });
      const newPostCategory = categoryIds.map((categoryId) => ({ postId: payload.id, categoryId }));
      await PostCategory.bulkCreate(newPostCategory, { transaction: t });
      return payload;
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getAllPost = () =>
  post.findAll({
    include: [
      { model: User, 
        as: 'user', 
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      { model: Category, as: 'categories' },
    ],
  });

const getOnePost = async (id) => {
  const payload = await post.findOne({
    include: [
      { model: User, 
        as: 'user', 
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      { model: Category, as: 'categories' },
    ],
    where: { id },
  });
  if (!payload) {
    const message = { status: 404, message: 'Post does not exist' };
    throw message;
  }
  return payload;
};
  
module.exports = {
  createdPost,
  getAllPost,
  getOnePost,
};
