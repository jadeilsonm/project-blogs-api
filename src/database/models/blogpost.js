// 'use strict';
// const sequelize = require('sequelize');
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class BlogPost extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   BlogPost.init({
//     title: DataTypes.STRING,
//     content: DataTypes.STRING,
//     userId: DataTypes.INTEGER,
//     published: DataTypes.DATE,
//     update: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'BlogPost',
//   });
//   return BlogPost;
// };

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
