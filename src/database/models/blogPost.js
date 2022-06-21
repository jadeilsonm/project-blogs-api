const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });

  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, { foreignKey: 'userId', as: 'users' });
  };

  return BlogPostTable;
};

module.exports = BlogPostSchema;
