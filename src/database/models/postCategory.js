const PostsCategorySchema = (sequelize, DataTypes) => {
  const PostsCategoryTable = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
      },
    },
    {
      timestamps: false,
    }
  );

  PostsCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostsCategoryTable,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
    });

    models.Category.belongsToMany(models.BlogPost, {
      through: PostsCategoryTable,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'categoryId',
    });
  };
  return PostsCategoryTable;
};

module.exports = PostsCategorySchema;
