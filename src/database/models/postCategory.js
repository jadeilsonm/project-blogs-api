const PostsCategorySchema = (sequelize, __DataTypes) => {
  const PostsCategoryTable = sequelize.define('PostCategory', {});

  PostsCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: postId,
      foreignKey: '',
      otherKey: '',
      as: '',
    });

    models.Category.belongsToMany(models.BlogPost, {
      through: categoryId,
      foreignKey: '',
      otherKey: '',
      as: '',
    });
  };
};

module.exports = PostsCategorySchema;
