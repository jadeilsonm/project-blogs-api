// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class PostsCategorie extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   PostsCategorie.init({
//     postId: DataTypes.INTEGER,
//     categoriyId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'PostsCategorie',
//   });
//   return PostsCategorie;
// };

const PostsCategorieSchema = (sequelize, DataTypes) => {
  const PostsCategorieTable = sequelize.define('PostsCategorie', {}, { timestamps: false });

  PostsCategorieTable.associate = (models) => {

    models.blogPost.belongsToMany(models.Categorie, {
      through: PostsCategorieTable,
    });

  }
}
