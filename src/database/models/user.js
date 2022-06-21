const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'blogPost' })
  }

  return UserTable;
}

module.exports = UserSchema;