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
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    update: DataTypes.DATE,
  });

  BlogPostTable.associate = (models) => {
    BlogPostTable.BelongsTo =
      (models.User, { foreignKey: 'idUser', as: 'UserId' });
  };

  return BlogPostTable;
};
