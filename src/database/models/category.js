const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return CategoryTable;
};

module.exports = CategorySchema;
