module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    code: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
        isUppercase: true,
        len: [2, 3],
      },
    },
  });

  City.associate = (models) => {
    City.hasMany(models.Airport, {
      onDelete: 'cascade',
      foreignKey: 'city_code',
      sourceKey: 'code',
    });
  };

  return City;
};
